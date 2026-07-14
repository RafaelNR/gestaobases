# Relatório de Movimentações de Estoque

## Objetivo

Disponibilizar um relatório paginado das movimentações de estoque por base, com filtros de período, tipo, item e validade, além de indicadores resumidos.

## Regras

- A base é obrigatória; sem `baseId` não deve haver consulta ao backend nem exibição de dados.
- O período usa `EstoqueMovimentacao.created_at`, com datas inicial/final inclusivas.
- A movimentação deve pertencer a um lote ativo ou histórico do lote associado à base selecionada.
- O item pode ser produto ou medicamento.
- A busca textual deve pesquisar nome e código do produto/medicamento.
- A validade é classificada pelo lote usando `SemValidade`, `Regular`, `Atencao`, `Alerta` e `Vencido`.

## Resultado

Tabela paginada com data, tipo, item, código, lote, validade, quantidade, saldo anterior, saldo posterior, usuário e observação.

Cards:

- entradas e saídas no período;
- perdas no período;
- quantidade movimentada com tipo `Vencimento`;
- saldo atual de lotes vencidos;
- lotes próximos do vencimento (`Atencao`/`Alerta`).

## Backend

Adicionar `GET /relatorios/estoque/movimentacoes`, protegido por permissão de relatório e exigindo `baseId`, com paginação e filtros no banco. A resposta conterá `items`, `page`, `limit`, `total`, `pages` e `cards`.

## Frontend

Adicionar `Relatórios > Controle de estoque`, rota `/relatorios/estoque`, formulário RHF com botão Filtrar/Limpar, seleção de base obrigatória, tabela paginada e cards. A query ficará desabilitada enquanto `baseId` estiver vazio.

## Testes

- Backend unitário para filtros, paginação e cards.
- Backend B2B/e2e para base obrigatória e contrato.
- Frontend com checagem de tipos e validação da query desabilitada sem base.

## Fora do escopo

- Exportação PDF/Excel.
- Alteração das regras transacionais de movimentação.
- Alteração do cadastro de lotes.
