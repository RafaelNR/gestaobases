# Relatório de Movimentações de Estoque Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Criar um relatório paginado de movimentações de estoque por base, com filtros e cards de validade/perdas.

**Architecture:** Reutilizar `EstoqueMovimentacao`, `EstoqueLote`, `Estoque`, produto/medicamento e classificação de validade existentes. O backend fará uma consulta paginada filtrada por base e agregará os cards; o frontend só habilitará a query após selecionar a base.

**Tech Stack:** NestJS, Prisma, MariaDB, Jest/Supertest, React, MUI, React Hook Form e TanStack Query.

## Global Constraints

- Base obrigatória antes de consultar.
- Filtros e paginação no backend.
- Datas referem-se a `EstoqueMovimentacao.created_at`.
- Reutilizar `classificarValidade` e os enums existentes.

### Task 1: Backend contrato, consulta e cards

**Files:**
- Create: `backend/src/modules/relatorios/dto/relatorio-estoque.dto.ts`
- Create: `backend/src/modules/relatorios/types/relatorio-estoque.types.ts`
- Modify: `backend/src/modules/relatorios/validation/relatorios.schema.ts`
- Modify: `backend/src/modules/relatorios/repository/relatorios.repository.ts`
- Modify: `backend/src/modules/relatorios/services/relatorios.service.ts`
- Test: `backend/src/modules/relatorios/test/relatorios.repository.spec.ts`

- [x] Escrever testes de base obrigatória, filtros, paginação e cards.
- [x] Implementar consulta paginada e agregação dos cards.
- [x] Validar a checagem TypeScript focada; sem erros nos arquivos do relatório.

### Task 2: Backend endpoint

**Files:**
- Modify: `backend/src/modules/relatorios/relatorios.controller.ts`
- Test: `backend/src/modules/relatorios/test/relatorios.controller.e2e.spec.ts`

- [x] Adicionar `GET /relatorios/estoque/movimentacoes` com permissão e query DTO.
- [x] Cobrir o contrato e deixar a validação de `baseId` obrigatória no DTO.

### Task 3: Frontend serviço, tipos, hook, rota e menu

**Files:**
- Modify: `frontend/src/Types/Relatorios.ts`
- Modify: `frontend/src/Service/Relatorios.service.ts`
- Modify: `frontend/src/Hooks/useRelatorios.ts`
- Modify: `frontend/src/Guard/PermissionGroups.ts`
- Modify: `frontend/src/Guard/Administrativo.permissions.ts`
- Modify: `frontend/src/Pages/Pages.ts`
- Modify: `frontend/src/Store/Menu.tsx`
- Modify: `frontend/src/Store/Icons.ts`

- [x] Criar contrato da query e cards.
- [x] Desabilitar query sem base selecionada.
- [x] Registrar permissão, rota e submenu.

### Task 4: Frontend página

**Files:**
- Create: `frontend/src/Pages/relatorios/estoque/index.tsx`
- Create: `frontend/src/Pages/relatorios/estoque/components/FiltroRelatorioEstoque.tsx`
- Create: `frontend/src/Pages/relatorios/estoque/components/CardsRelatorioEstoque.tsx`
- Create: `frontend/src/Pages/relatorios/estoque/components/TabelaMovimentacoesEstoque.tsx`

- [x] Implementar filtro RHF com base obrigatória.
- [x] Implementar cards, tabela, paginação, loading, erro e vazio.
- [x] Validar TypeScript focado; o build completo permanece limitado por erro preexistente do frontend.
