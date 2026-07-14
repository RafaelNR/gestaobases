# Relatório Geral de Requerimentos

## Objetivo

Criar o primeiro relatório do novo módulo de relatórios do sistema, permitindo consultar a quantidade de requerimentos e itens por base e ambulância, com filtros por período, base, ambulância e tipo.

## Regras de negócio

- Considerar somente os requerimentos com status `Recebido`, `Analise`, `Separacao` ou `Finalizado`.
- Excluir sempre requerimentos `Rascunho` e `Cancelado`.
- Usar `data_inicio` como data de referência do período.
- Agrupar os resultados por `base` e `ambulância`.
- Requerimentos sem ambulância devem aparecer com uma representação explícita, como `Sem ambulância`.
- Contar requerimentos separadamente para itens de medicamentos e de produtos.
- Somar `quantidade` dos itens ativos (`deleted_by IS NULL`) separadamente para medicamentos e produtos.
- Não misturar nem exibir a unidade de embalagem do medicamento neste relatório; a dimensão solicitada é a ambulância.

## Filtros

O endpoint e a tela devem aceitar:

- `dataInicial`: data inicial inclusiva.
- `dataFinal`: data final inclusiva, considerando o fim do dia.
- `base`: nome da base.
- `ambulanciaId`: identificador da ambulância.
- `tipo`: `Almoxarifado`, `Farmacia` ou `CME`.

Filtros vazios não devem restringir a consulta. A validação deve rejeitar datas inválidas, período invertido e valores de enumeração inválidos.

## Resultado

Cada linha deve possuir o seguinte contrato lógico:

```ts
type RelatorioGeralRequerimentosRow = {
  base: string;
  ambulancia: { id: string; nome: string; tipo: string } | null;
  requerimentosMedicamentos: number;
  quantidadeMedicamentos: number;
  requerimentosProdutos: number;
  quantidadeProdutos: number;
};
```

O contador de requerimentos deve contar cada requerimento uma vez por categoria de item. A quantidade deve ser a soma das quantidades dos itens ativos daquela categoria.

## Backend

Criar um módulo/controlador de relatórios ou incorporá-lo ao módulo de relatórios existente, conforme o padrão de módulos do backend, expondo:

```http
GET /relatorios/requerimentos
```

A consulta deve ser agregada no banco ou em consultas agregadas específicas, evitando carregar todos os requerimentos e itens para a memória e evitando N+1. Deve haver validação do DTO/query, autorização autenticada e filtro de escopo compatível com o acesso atual aos requerimentos. O endpoint não deve alterar as rotas existentes de requerimentos.

## Frontend

Adicionar a rota protegida `/relatorios/requerimentos` e o menu hierárquico:

- `Relatórios`
  - `Relatório geral de requerimentos`

Adicionar uma permissão específica para o menu e a página, compondo-a nos grupos de acesso existentes sem conceder acesso indevido a perfis que não tenham permissão de relatório.

A tela deve reutilizar os componentes compartilhados de base, ambulância e data, usar React Query para buscar os dados e mostrar estados de carregamento, erro, vazio e sucesso. A tabela deve exibir Base, Ambulância, requerimentos/quantidades de medicamentos e requerimentos/quantidades de produtos.

## Testes

- Backend unitário: validação dos filtros, exclusão de `Rascunho`/`Cancelado`, agrupamento por base/ambulância, separação medicamento/produto e soma apenas de itens ativos.
- Backend B2B/e2e: autenticação, permissão, filtros e contrato do endpoint.
- Frontend unitário: montagem dos filtros, chamada do serviço e renderização dos estados/colunas principais.

## Alternativas consideradas

1. Buscar todos os requerimentos e agregar em memória: simples, mas não adequado para produção quando o volume crescer.
2. Fazer uma única consulta relacional com todos os joins: pode duplicar contagens e dificultar a separação das categorias.
3. Executar consultas agregadas específicas para medicamentos e produtos e consolidar por base/ambulância: escolhida por equilibrar performance, clareza e compatibilidade com o modelo atual.

## Fora do escopo

- Exportação para Excel/PDF.
- Gráficos e indicadores adicionais.
- Alteração do modelo de dados.
- Outros submenus de relatório além do relatório geral de requerimentos.
