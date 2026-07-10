# Backend TypeScript 7 Experimental Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add TypeScript 7's native Go compiler as a parallel backend type-checker without changing the NestJS production build toolchain.

**Architecture:** Keep the `typescript` dependency name mapped to the TypeScript 6 compatibility package so API consumers continue to work. Install TypeScript 7 under `@typescript/native`, expose explicit TS6/TS7 scripts, and give TS7 a no-emit configuration that analyzes production sources only.

**Tech Stack:** NestJS 11, Yarn 4, TypeScript 6 compatibility package, TypeScript 7 native compiler, Jest 30, ts-jest 29.

## Global Constraints

- Do not change runtime behavior or application source code.
- Keep Nest build, Jest, ts-jest, ts-node, ts-loader, and typescript-eslint on the TypeScript 6 programmatic API.
- Use TypeScript 7 only for static analysis with `noEmit` in this experiment.
- Preserve existing package scripts and add explicitly named comparison scripts.
- Record results and incompatibilities in the root `plan.md`.
- Run unit tests, E2E tests, Nest build, TS6 type-check, and TS7 type-check; distinguish pre-existing failures from regressions.

---

### Task 1: Add the parallel compiler toolchain

**Files:**
- Modify: `backend/package.json`
- Modify: `backend/yarn.lock`
- Create: `backend/tsconfig.ts7.json`

**Interfaces:**
- Consumes: existing `backend/tsconfig.json` and NestJS build scripts.
- Produces: `typecheck:ts6`, `typecheck:ts7`, and `typecheck:compare` scripts; a TS7-only no-emit configuration.

- [ ] **Step 1: Capture the current TypeScript 6 baseline**

Run from `backend`:

```powershell
yarn tsc --noEmit -p tsconfig.json --pretty false
```

Expected: save the exit code and diagnostics as the pre-change baseline.

- [ ] **Step 2: Update compiler dependencies and scripts**

Add these scripts without removing existing scripts:

```json
"typecheck:ts6": "tsc6 --noEmit -p tsconfig.json --pretty false",
"typecheck:ts7": "tsc --noEmit -p tsconfig.ts7.json --pretty false",
"typecheck:compare": "yarn typecheck:ts6 && yarn typecheck:ts7"
```

Replace the TypeScript dependency and add the native alias:

```json
"@typescript/native": "npm:typescript@^7.0.2",
"typescript": "npm:@typescript/typescript6@^6.0.2"
```

Keep every unrelated script and dependency unchanged.

- [ ] **Step 3: Add the TS7 analysis configuration**

Create `backend/tsconfig.ts7.json`:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "noEmit": true,
    "incremental": false,
    "types": ["node"]
  },
  "include": ["src/**/*.ts", "prisma/**/*.ts"],
  "exclude": ["node_modules", "dist", "test", "**/*.spec.ts"]
}
```

- [ ] **Step 4: Install dependencies reproducibly**

Run from `backend`:

```powershell
yarn install
```

Expected: Yarn resolves both compilers, updates `backend/yarn.lock`, and exits successfully.

- [ ] **Step 5: Verify compiler identities**

```powershell
yarn tsc --version
yarn tsc6 --version
```

Expected: `tsc` reports 7.0.x and `tsc6` reports 6.0.x.

- [ ] **Step 6: Run both checks**

```powershell
yarn typecheck:ts6
yarn typecheck:ts7
```

Expected: TS6 matches the baseline; TS7 starts successfully. Do not relax strictness to hide diagnostics.

- [ ] **Step 7: Commit the isolated toolchain change**

```powershell
git add backend/package.json backend/yarn.lock backend/tsconfig.ts7.json
git commit -m "build: testar TypeScript 7 no backend"
```

### Task 2: Verify NestJS compatibility and document the decision

**Files:**
- Create or replace: `plan.md`

**Interfaces:**
- Consumes: scripts and configuration from Task 1.
- Produces: compatibility evidence and a production-readiness recommendation.

- [ ] **Step 1: Run the unit suite**

```powershell
yarn test --runInBand
```

Expected: existing unit tests pass; pre-existing failures are captured exactly in `plan.md`.

- [ ] **Step 2: Run the E2E suite**

```powershell
yarn test:e2e --runInBand
```

Expected: E2E tests pass, or unavailable external services are documented with the exact failure.

- [ ] **Step 3: Build through the unchanged NestJS path**

```powershell
yarn nest build
```

Expected: NestJS compiles while importing the TypeScript 6 compatibility API.

- [ ] **Step 4: Measure both type-checkers**

```powershell
Measure-Command { yarn typecheck:ts6 }
Measure-Command { yarn typecheck:ts7 }
```

Expected: record elapsed time, exit code, and diagnostics for each compiler.

- [ ] **Step 5: Write the migration report**

Create `plan.md` with concrete observed values:

```markdown
# Avaliação do TypeScript 7 no backend

## Problema identificado
O ecossistema atual do NestJS ainda consome a API programática do TypeScript 6, enquanto o TypeScript 7.0 nativo não fornece essa API.

## Impacto
Substituir diretamente o pacote pode interromper build, testes, lint e scripts TypeScript.

## Solução aplicada
TypeScript 6 permanece como API de compatibilidade e TypeScript 7 funciona como verificador paralelo sem emissão.

## Prioridade
Média.

## Exemplo de implementação
`yarn typecheck:ts6` preserva a baseline e `yarn typecheck:ts7` executa o compilador nativo.

## Resultados
- TypeScript 6: versão, tempo e saída observados
- TypeScript 7: versão, tempo e saída observados
- Testes unitários: resultado observado
- Testes E2E: resultado observado
- Build NestJS: resultado observado

## Recomendação
Decisão de manter ou remover o verificador paralelo, fundamentada nos resultados.
```

- [ ] **Step 6: Check the final diff**

```powershell
git diff --check
git status --short
git diff -- backend/package.json backend/tsconfig.ts7.json plan.md
```

Expected: no whitespace errors; only compiler configuration, lockfile, and report changes.

- [ ] **Step 7: Commit verification evidence**

```powershell
git add plan.md
git commit -m "docs: registrar avaliação do TypeScript 7"
```

