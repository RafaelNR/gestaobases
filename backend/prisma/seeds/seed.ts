import { PrismaClient } from '../../generated/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import 'dotenv/config';
import argon2 from 'argon2';

const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  connectionLimit: 10, // pool size
  acquireTimeout: 20000, // wait up to 20s for a connection
  connectTimeout: 5000, // 5s connect timeout (similar to v6)
  idleTimeout: 300, // 300s idle timeout (seconds)
});

const ARGON2_OPTIONS: argon2.Options = {
  type: argon2.argon2id,
  memoryCost: 65536, // 64 MB
  timeCost: 3,
  parallelism: 2,
};

const bases = [
  'Alto Rio Doce',
  // 'Barroso',
  // "Barbacena",
  'Bom Sucesso',
  'Carandaí',
  'Congonhas',
  'Conselheiro Lafaiete',
  'Entre Rios de Minas',
  'Ibertioga',
  'Lagoa Dourada',
  'Madre de Deus de Minas',
  'Nazareno',
  'Ouro Branco',
  'Piranga',
  'Resende Costa',
  'Rio Espera',
  'São João Del Rei',
  'São Tiago',
  'Tiradentes',
];

const setor = {
  Administrativo: 'Administrativo',
  Almoxarifado: 'Almoxarifado',
  Farmacia: 'Farmácia',
  CME: 'CME',
  Frota: 'Frota',
  Base: 'Base Descentralizada',
  Enfermagem: 'Enfermagem',
};

const cargos = {
  Almoxarifado: 'Coordenação de Almoxarifado',
  AuxAlmoxarifado: 'Auxiliar de Almoxarifado',
  Separador: 'Separador',
  Farmaceutica: 'Farmacêutica',
  TecFarmacia: 'Técnico de Farmácia',
  CME: 'CME',
  Frota: 'Coordenação Frota',
  ApoioBases: 'Apoio Bases',
  Facilitador: 'Facilitador',
  RH: 'RH',
  Enfermagem: 'Enfermagem',
};

export async function hashPassword(plain: string): Promise<string> {
  return argon2.hash(plain, ARGON2_OPTIONS);
}

const prisma = new PrismaClient({ adapter });

async function main() {
  try {
    await prisma.$connect();
    await prisma.$queryRaw`SELECT 1`;
    console.log('Sucesso');
  } catch (error) {
    console.error('❌ Prisma connection error:', error);
    throw error;
  }

  await prisma.$transaction(async (tx) => {
    const base = await tx.base.create({
      data: {
        nome: 'Barbacena',
      },
    });
    const base2 = await tx.base.create({
      data: {
        nome: 'Barroso',
      },
    });

    const admSetor = await tx.setor.create({
      data: {
        nome: 'Administrador',
        nomeVisivel: 'Administrador',
      },
    });

    const admCargo = await tx.cargo.create({
      data: {
        nome: 'Administrador',
        nomeVisivel: 'Administrador',
        setor: admSetor.nome,
      },
    });

    await tx.base.createMany({
      data: bases.map((b) => ({ nome: b })),
    });

    await tx.setor.createMany({
      data: Object.entries(setor).map(([chave, valor]) => ({
        nome: chave,
        nomeVisivel: valor,
      })),
    });

    await tx.cargo.createMany({
      data: Object.entries(cargos).map(([chave, valor]) => {
        return {
          nome: chave,
          nomeVisivel: valor,
          setor: 'Administrativo',
        };
      }),
    });

    const setorBase = await tx.setor.findUnique({
      where: { nome: 'Base' },
      select: { id: true },
    });

    const cargoFacilitado = await tx.cargo.findUnique({
      where: { nome: 'Facilitador' },
      select: { id: true },
    });

    const admin = await tx.user.create({
      data: {
        username: 'rafaelnetto',
        password: await hashPassword('batata15'),
        email: 'rafaelnetto_@hotmail.com',
        nome: 'Rafael Rodrigues',
        baseId: base.id,
        setorId: admSetor.id,
        cargoId: admCargo.id,
      },
    });

    if (setorBase && cargoFacilitado) {
      await tx.user.create({
        data: {
          username: 'facilitador',
          password: await hashPassword('batata15'),
          email: 'rafaelnetto_2@hotmail.com',
          nome: 'facilitador',
          baseId: base.id,
          setorId: setorBase.id,
          cargoId: cargoFacilitado.id,
        },
      });
      await tx.user.create({
        data: {
          username: 'facilitador2',
          password: await hashPassword('batata15'),
          email: 'rafaelnetto_3@hotmail.com',
          nome: 'facilitador2',
          baseId: base2.id,
          setorId: setorBase.id,
          cargoId: cargoFacilitado.id,
        },
      });
    }
    await tx.ambulancia.create({
      data: {
        nome: 'Barbacena',
        tipo: 'USA',
        baseId: base.id,
        userId: admin.id,
      },
    });

    // ----ALX

    const setorAlx = await tx.setor.findUnique({
      where: { nome: 'Almoxarifado' },
    });

    const cargoAlx = await tx.cargo.findUnique({
      where: { nome: 'Almoxarifado' },
    });

    if (setorAlx && cargoAlx) {
      await tx.user.create({
        data: {
          username: 'alx',
          password: await hashPassword('batata15'),
          email: 'rafaelnetto_alx@hotmail.com',
          nome: 'alx',
          baseId: base.id,
          setorId: setorAlx.id,
          cargoId: cargoAlx.id,
        },
      });
    }

    //---- Farmacia

    const setorF = await tx.setor.findUnique({
      where: { nome: 'Farmácia' },
    });

    const cargoF = await tx.cargo.findUnique({
      where: { nome: 'Farmacêutica' },
    });

    if (setorF && cargoF) {
      await tx.user.create({
        data: {
          username: 'farmacia',
          password: await hashPassword('batata15'),
          email: 'rafaelnetto_f@hotmail.com',
          nome: 'farmcia',
          baseId: base.id,
          setorId: setorF.id,
          cargoId: cargoF.id,
        },
      });
    }

    //---- CME

    const setorCME = await tx.setor.findUnique({
      where: { nome: 'CME' },
    });

    const cargoCME = await tx.cargo.findUnique({
      where: { nome: 'CME' },
    });

    if (setorCME && cargoCME) {
      await tx.user.create({
        data: {
          username: 'cme',
          password: await hashPassword('batata15'),
          email: 'rafaelnetto_cme@hotmail.com',
          nome: 'cme',
          baseId: base.id,
          setorId: setorCME.id,
          cargoId: cargoCME.id,
        },
      });
    }

    //---- APOIO

    const setorA = await tx.setor.findUnique({
      where: { nome: 'Frota' },
    });

    const cargoA = await tx.cargo.findUnique({
      where: { nome: 'Apoio Bases' },
    });

    if (setorA && cargoA) {
      await tx.user.create({
        data: {
          username: 'apoio',
          password: await hashPassword('batata15'),
          email: 'rafaelnetto_apoio@hotmail.com',
          nome: 'apoio',
          baseId: base.id,
          setorId: setorA.id,
          cargoId: cargoA.id,
        },
      });
    }

    // ----Enfermagem

    const setorEnf = await tx.setor.findUnique({
      where: { nome: 'Enfermagem' },
    });

    const cargoEnf = await tx.cargo.findUnique({
      where: { nome: 'Enfermagem' },
    });

    if (cargoEnf && setorEnf) {
      await tx.user.create({
        data: {
          username: 'enfermagem',
          password: await hashPassword('batata15'),
          email: 'rafaelnetto_enf@hotmail.com',
          nome: 'enfermagem',
          baseId: base.id,
          setorId: setorEnf.id,
          cargoId: cargoEnf.id,
        },
      });
    }
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    // process.exit(1);
  });
