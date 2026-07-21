import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { PrismaClient, Unidade } from '../../generated/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import 'dotenv/config';

type ProdutoCsvRow = {
  id: string;
  produto: string;
  cod: string;
  cod25: string;
  unid: string;
  material: string;
  tipo: string;
  cme: string;
  ordem: string;
};

const ADMIN_USERNAME = 'rafaelnetto';
const CSV_FILE_NAME = 'tb_admin_produtos.csv';

const categoriaPorMaterial: Record<string, string> = {
  '0': 'MATERIAL MÉDICO',
  '1': 'MATERIAL DE ESCRITÓRIO',
  '2': 'MATERIAL DE LIMPEZA',
  '3': 'GASES MEDICINAIS',
};

const unidadePorCodigo: Record<string, Unidade> = {
  '0': Unidade.Unidade,
  '1': Unidade.Pacote,
  '2': Unidade.Caixa,
  '3': Unidade.Kit,
};

const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  connectionLimit: 10,
  acquireTimeout: 20000,
  connectTimeout: 5000,
  idleTimeout: 300,
});

const prisma = new PrismaClient({ adapter });

function getCsvPath(): string {
  const candidates = [
    resolve(process.cwd(), CSV_FILE_NAME),
    resolve(process.cwd(), '..', CSV_FILE_NAME),
    resolve(__dirname, '..', '..', '..', CSV_FILE_NAME),
  ];

  const csvPath = candidates.find((path) => existsSync(path));

  if (!csvPath) {
    throw new Error(
      `Arquivo ${CSV_FILE_NAME} não encontrado. Locais verificados: ${candidates.join(', ')}`
    );
  }

  return csvPath;
}

function parseCsvLine(line: string): string[] {
  const values: string[] = [];
  let current = '';
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];

    if (char === '"') {
      if (quoted && line[index + 1] === '"') {
        current += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
      continue;
    }

    if (char === ';' && !quoted) {
      values.push(current);
      current = '';
      continue;
    }

    current += char;
  }

  values.push(current);
  return values;
}

function parseProdutosCsv(csvPath: string): ProdutoCsvRow[] {
  const csvContent = new TextDecoder('windows-1252').decode(
    readFileSync(csvPath)
  );
  const [headerLine, ...lines] = csvContent
    .split(/\r?\n/)
    .filter((line) => line.trim().length > 0);

  const headers = parseCsvLine(headerLine);
  const expectedHeaders = [
    'id',
    'produto',
    'cod',
    'cod25',
    'unid',
    'material',
    'tipo',
    'cme',
    'ordem',
  ];

  if (headers.join('|') !== expectedHeaders.join('|')) {
    throw new Error(
      `Cabeçalho inválido em ${csvPath}. Esperado: ${expectedHeaders.join(';')}`
    );
  }

  return lines.map((line, index) => {
    const values = parseCsvLine(line);

    if (values.length !== expectedHeaders.length) {
      throw new Error(
        `Linha ${index + 2} inválida em ${csvPath}: esperados ${expectedHeaders.length} campos, encontrados ${values.length}.`
      );
    }

    return expectedHeaders.reduce((row, header, headerIndex) => {
      row[header as keyof ProdutoCsvRow] = values[headerIndex];
      return row;
    }, {} as ProdutoCsvRow);
  });
}

function buildProdutoData(row: ProdutoCsvRow, userId: string) {
  const categoria = categoriaPorMaterial[row.material];
  const unidade = unidadePorCodigo[row.unid];
  // 1 - USA - 2 - USA/USB
  const USA = row.tipo === '1' ? true : false;

  if (!categoria) {
    throw new Error(`Material inválido no produto CSV id ${row.id}.`);
  }

  if (!unidade) {
    throw new Error(`Unidade inválida no produto CSV id ${row.id}.`);
  }

  return {
    nome: row.produto.trim(),
    codigo: Number(row.cod.trim()),
    unidade,
    categoria,
    usa: USA,
    cme: row.cme === '1',
    ordem: !row.ordem || row.ordem === '' ? null : Number(row.ordem.trim()),
    userId,
  };
}

function removeDuplicadosPorCodigo(rows: ProdutoCsvRow[]): ProdutoCsvRow[] {
  const rowsByCodigo = new Map<string, ProdutoCsvRow>();

  for (const row of rows) {
    if (rowsByCodigo.has(row.cod)) {
      console.warn(
        `Produto duplicado no CSV ignorado: id ${row.id}, codigo ${row.cod}, nome ${row.produto}.`
      );
      continue;
    }

    rowsByCodigo.set(row.cod, row);
  }

  return Array.from(rowsByCodigo.values());
}

async function main() {
  try {
    await prisma.$connect();
    await prisma.$queryRaw`SELECT 1`;
    console.log('Conexão com Prisma realizada com sucesso.');
  } catch (error) {
    console.error('Prisma connection error:', error);
    throw error;
  }

  const csvPath = getCsvPath();
  const rows = removeDuplicadosPorCodigo(parseProdutosCsv(csvPath));

  await prisma.$transaction(async (tx) => {
    const admin = await tx.user.findUnique({
      where: { username: ADMIN_USERNAME },
    });

    if (!admin) {
      throw new Error(
        `Usuário administrador ${ADMIN_USERNAME} não encontrado.`
      );
    }

    const categorias = [
      ...new Set(rows.map((row) => categoriaPorMaterial[row.material])),
    ];

    for (const nome of categorias) {
      if (!nome) {
        continue;
      }

      await tx.categoriaProduto.upsert({
        where: { nome },
        update: {
          active: true,
          userId: admin.id,
        },
        create: {
          nome,
          userId: admin.id,
        },
      });
    }

    for (const row of rows) {
      const produto = buildProdutoData(row, admin.id);

      const produtoExistente = await tx.produto.findFirst({
        where: { codigo: produto.codigo, nome: produto.nome },
        select: { id: true },
      });

      if (produtoExistente) {
        console.log('Produto já existe', produto);
        continue;
      }

      await tx.produto.create({ data: produto });
    }
  });

  console.log(`${rows.length} produtos processados a partir de ${csvPath}.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
