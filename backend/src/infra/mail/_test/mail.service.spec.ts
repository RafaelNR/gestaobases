import { Test, TestingModule, MockFactory } from '@nestjs/testing';
import { MailModule } from '../mail.module';
import { MailService } from '../mail.service';
import { PrismaService } from '../../database/prisma/prisma.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

describe('MailService', () => {
  let mailService: MailService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        MailModule,
        ConfigModule.forRoot({
          cache: true,
          isGlobal: true,
        }),
      ],
      // controllers: [BasesController],
      providers: [
        PrismaService,
        MailService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('test-value'), // Mock do ConfigService
          },
        },
      ],
    }).compile();

    mailService = await moduleRef.resolve<MailService>(MailService);
  });

  it('Should be defined MailServidor', () => {
    expect(mailService).toBeDefined();
  });

  it('Should be connected', async () => {
    const connected = await mailService.mailerService.verifyAllTransporters();
    expect(connected).toEqual(true);
  });

  it('Send email manifestacao criada', async () => {
    const manifestacao = {
      uuid: '88824453-c5a8-45e6-8bc8-fa4bd5adfa51',
      protocolo: '1741784819.8717692',
      previsao_resposta: new Date(),
    };

    const user = {
      email: 'rafaelnetto_@hotmail.com',
    };

    const bcc = ['rafael.rodrigues@seg.eti.br'];

    // const result = await mailService.sendManifestacaoCriada(
    //   manifestacao,
    //   user,
    //   bcc
    // );
    // expect(result).toEqual(true);
  });

  // it('Send email manifestacao respondida', async () => {
  //   const manifestacao = {
  //     uuid: '88824453-c5a8-45e6-8bc8-fa4bd5adfa51',
  //     protocolo: '1741784819.8717692',
  //   };

  //   const user = {
  //     email: 'rafaelnetto_@hotmail.com',
  //   };

  //   const bcc = ['rafael.rodrigues@seg.eti.br'];

  //   const result = await mailService.sendManifestacaoRespondida(
  //     manifestacao,
  //     user,
  //     bcc
  //   );
  //   expect(result).toEqual(true);
  // });

  // it('Send email novo acompanhamento', async () => {
  //   const manifestacao = {
  //     uuid: '88824453-c5a8-45e6-8bc8-fa4bd5adfa51',
  //   };

  //   const emails = ['rafael.rodrigues@seg.eti.br', 'rafael.r@seg.eti.br'];

  //   const result = await mailService.sendNovoAcompanhamento(
  //     manifestacao,
  //     emails
  //   );
  //   expect(result).toEqual(true);
  // });

  // it('Should manifestacao criada no auth', async () => {
  //   const mnifestacao = {
  //     protocolo: '1741784819.8717692',
  //   };

  //   const user = {
  //     email: 'rafaelnetto_@hotmail.com',
  //     nome: 'Rafael Rodrigues22',
  //   };

  //   const result = await mailService.sendManifestanteCriada(mnifestacao, user);
  //   console.log(result);
  //   expect(result).toEqual(true);
  // });

  //   it('Should inscricao aprovada', async () => {
  //     const inscricao = {
  //       numero: '1741784819.8717692',
  //     };

  //     const user = {
  //       email: 'rafael.r@seg.eti.br',
  //       nome: 'Rafael Rodrigues22',
  //     };

  //     const result = await mailService.sendInscricaoAprovada(inscricao, user);
  //     console.log(result);
  //     expect(result).toEqual(true);
  //     // expect(result[0].id).toEqual(userMock.id);
  //   });

  //   it('Should inscricao recusada', async () => {
  //     const inscricao = {
  //       numero: '1741784819.8717692',
  //     };

  //     const user = {
  //       email: 'rafael.r@seg.eti.br',
  //       nome: 'Rafael Rodrigues22',
  //     };

  //     const result = await mailService.sendInscricaoRecusada(inscricao, user);
  //     console.log(result);
  //     expect(result).toEqual(true);
  //     // expect(result[0].id).toEqual(userMock.id);
  //   });

  //   it('Should inscricao cancelada', async () => {
  //     const inscricao = {
  //       numero: '1741784819.8717692',
  //     };

  //     const user = {
  //       email: 'rafael.r@seg.eti.br',
  //       nome: 'Rafael Rodrigues22',
  //     };

  //     const result = await mailService.sendInscricaoCancelada(inscricao, user);
  //     console.log(result);
  //     expect(result).toEqual(true);
  //     // expect(result[0].id).toEqual(userMock.id);
});
