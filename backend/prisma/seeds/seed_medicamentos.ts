import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { PrismaClient } from '../../generated/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import 'dotenv/config';

type MedicamentoCsvRow = {
  id: string;
  codigo: string;
  medicamento: string;
  Mtipo: string;
  Mstatus: string;
  date_mod: string;
  usuario_mod: string;
};

const ADMIN_USERNAME = 'rafaelnetto';
const CSV_FILE_NAME = 'tb_admin_medicamentos.csv';

const categoriaPorTipo: Record<string, string> = {
  '1': 'AMPOLA DE 1ML',
  '2': 'AMPOLA DE 2ML',
  '3': 'AMPOLA DE 3ML',
  '4': 'AMPOLA DE 4ML',
  '5': 'AMPOLA DE 5ML',
  '10': 'AMPOLA DE 10ML',
  '20': 'AMPOLA DE 20ML',
  '30': 'COMPRIMIDO',
  '40': 'FLACONETE DE 10ML',
  '50': 'FRASCO DE 200 DOSES',
  '51': 'FRASCO-AMPOLA COM PÓ LIÓFILO',
  '52': 'FRASCO-AMPOLA COM PÓ LIÓFILO + DILUENTE',
  '53': 'FRASCO-AMPOLA DE 20ML',
  '54': 'FRASCO DE 250ML',
  '60': 'TUBO DE 20G',
  '70': 'BOLSA DE 250ML',
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

function parseMedicamentosCsv(csvPath: string): MedicamentoCsvRow[] {
  const csvContent = new TextDecoder('windows-1252').decode(
    readFileSync(csvPath)
  );
  const [headerLine, ...lines] = csvContent
    .split(/\r?\n/)
    .filter((line) => line.trim().length > 0);

  const headers = parseCsvLine(headerLine);
  const expectedHeaders = [
    'id',
    'codigo',
    'medicamento',
    'Mtipo',
    'Mstatus',
    'date_mod',
    'usuario_mod',
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
      row[header as keyof MedicamentoCsvRow] = values[headerIndex];
      return row;
    }, {} as MedicamentoCsvRow);
  });
}

function buildMedicamentoData(row: MedicamentoCsvRow, userId: string) {
  const categoria = categoriaPorTipo[row.Mtipo];

  if (!categoria) {
    throw new Error(`Tipo inválido no medicamento CSV id ${row.id}.`);
  }

  if (!row.codigo.trim()) {
    throw new Error(`Código vazio no medicamento CSV id ${row.id}.`);
  }

  if (!row.medicamento.trim()) {
    throw new Error(`Nome vazio no medicamento CSV id ${row.id}.`);
  }

  return {
    nome: row.medicamento.trim(),
    codigo: Number(row.codigo.trim()),
    especificacao: categoria,
    categoria,
    active: row.Mstatus === '1',
    userId,
  };
}

function removeDuplicadosPorCodigo(
  rows: MedicamentoCsvRow[]
): MedicamentoCsvRow[] {
  const rowsByCodigo = new Map<string, MedicamentoCsvRow>();

  for (const row of rows) {
    const current = rowsByCodigo.get(row.codigo);

    if (!current) {
      rowsByCodigo.set(row.codigo, row);
      continue;
    }

    const shouldReplace = current.Mstatus !== '1' && row.Mstatus === '1';

    if (shouldReplace) {
      console.warn(
        `Medicamento duplicado no CSV substituído: id ${current.id} por id ${row.id}, codigo ${row.codigo}.`
      );
      rowsByCodigo.set(row.codigo, row);
      continue;
    }

    console.warn(
      `Medicamento duplicado no CSV ignorado: id ${row.id}, codigo ${row.codigo}, nome ${row.medicamento}.`
    );
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
  const rows = removeDuplicadosPorCodigo(parseMedicamentosCsv(csvPath));

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
      ...new Set(rows.map((row) => categoriaPorTipo[row.Mtipo])),
    ];

    for (const nome of categorias) {
      if (!nome) {
        continue;
      }

      await tx.categoriasMedicamento.upsert({
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
      const medicamento = buildMedicamentoData(row, admin.id);
      // const medicamentoExistente = await tx.medicamento.findFirst({
      //   where: { codigo: medicamento.codigo, nome: medicamento.nome },
      //   select: { id: true },
      // });

      // if (medicamentoExistente) {
      //   await tx.medicamento.update({
      //     where: { id: medicamentoExistente.id },
      //     data: medicamento,
      //   });
      //   continue;
      // }

      await tx.medicamento.create({ data: medicamento });
    }
  });

  console.log(
    `${rows.length} medicamentos processados a partir de ${csvPath}.`
  );
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
