# Migração experimental do backend para TypeScript 7

## Contexto

O backend NestJS usa TypeScript 6.0.3 e ferramentas que consomem a API programática do compilador, incluindo `ts-jest`, `ts-node`, `ts-loader` e `typescript-eslint`. O TypeScript 7 usa o novo compilador nativo em Go, mas a versão 7.0 ainda não fornece uma API programática compatível.

## Objetivo

Validar o TypeScript 7 no backend com baixo risco, preservando os comandos atuais de desenvolvimento, testes e produção. O experimento deve revelar incompatibilidades de configuração e comparar o tempo de verificação entre os compiladores 6 e 7.

## Escopo

- Manter TypeScript 6 como dependência de compatibilidade para NestJS e ferramentas que usam sua API.
- Instalar TypeScript 7 com um alias independente.
- Criar uma configuração dedicada à verificação com TypeScript 7.
- Adicionar scripts explícitos para verificação com TS6 e TS7.
- Executar build, testes unitários, testes E2E e as duas verificações de tipos.
- Registrar resultados, problemas e recomendações no `plan.md` da raiz.

O frontend, a emissão de produção pelo TS7 e a adoção do language server no editor ficam fora deste primeiro experimento.

## Arquitetura da solução

O pacote `typescript` continuará apontando para o pacote de compatibilidade `@typescript/typescript6`, preservando a API usada pelo ecossistema atual. Um alias separado apontará para o TypeScript 7 e fornecerá seu executável nativo. Os scripts terão nomes distintos para evitar que um comando existente passe silenciosamente a usar outro compilador.

O `nest build` continuará sendo a fonte oficial do diretório `dist`. Nesta fase, o TS7 será usado somente para checagem estática com `noEmit`, eliminando risco de diferenças na emissão de decorators, metadados, aliases ou assets do NestJS.

## Configuração

Uma configuração específica estenderá o `tsconfig.json` do backend e aplicará apenas os ajustes necessários ao TypeScript 7. Ela deverá:

- desabilitar emissão;
- declarar explicitamente tipos globais necessários;
- evitar opções removidas ou incompatíveis;
- manter os mesmos arquivos de produção analisados pelo build;
- não esconder novos erros com relaxamentos adicionais.

Se `deleteOutDir` ou outra opção exclusiva do Nest CLI for rejeitada, a configuração do TS7 não estenderá `tsconfig.build.json`; ela permanecerá separada do build oficial.

## Scripts

Os scripts devem distinguir claramente:

- checagem de compatibilidade com TypeScript 6;
- checagem experimental com TypeScript 7;
- comparação mensurável entre ambos;
- build NestJS existente.

Nenhum script atual terá seu comportamento alterado nesta etapa.

## Tratamento de falhas

Uma falha do TS7 não bloqueará nem modificará o build de produção automaticamente. Cada diagnóstico será classificado como:

1. incompatibilidade real do código com TypeScript 7;
2. opção de configuração removida ou com semântica alterada;
3. limitação de ferramenta dependente da API do TS6;
4. erro preexistente também reproduzido no TS6.

Somente correções mínimas, compatíveis com os dois compiladores, serão propostas. Mudanças funcionais ficam fora do escopo.

## Verificação

A aceitação exige:

- instalação reproduzível pelo gerenciador declarado no projeto;
- `nest build` preservado;
- testes unitários executados;
- testes E2E executados;
- checagem TS6 executada como baseline;
- checagem TS7 executada e comparada com o baseline;
- tempos e incompatibilidades registrados no `plan.md`.

Falhas preexistentes deverão ser separadas de regressões introduzidas pela migração. Caso a suíte E2E dependa de serviços externos indisponíveis, o bloqueio e o comando exato serão documentados.

## Critério de decisão

O TS7 será considerado apto para permanecer como verificador paralelo quando analisar o mesmo escopo do TS6 sem divergências críticas e sem afetar build ou testes. A promoção do TS7 para emissão oficial será tratada em uma etapa futura, após validação específica do `dist` e da compatibilidade do ecossistema NestJS.

## Reversão

A reversão consiste em remover o alias do TS7, a configuração dedicada e os novos scripts. Como o compilador oficial e os scripts existentes permanecem preservados, não haverá migração de código nem alteração de artefatos de produção a desfazer.
