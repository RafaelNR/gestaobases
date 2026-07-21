import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { permiteMovimentacao, resumirValidades } from "./estoque.helpers";
describe("helpers de estoque", () => {
  it("agrupa lotes por validade", () => assert.deepEqual(resumirValidades([{ lotes: [{ status: "Alerta" }, { status: "Vencido" }] }] as any), { SemValidade: 0, Regular: 0, Atencao: 0, Alerta: 1, Vencido: 1 }));
  it("bloqueia saída indisponível e mantém devolução", () => { const lote = { disponivelParaSaida: false } as any; assert.equal(permiteMovimentacao(lote, "Saida"), false); assert.equal(permiteMovimentacao(lote, "Devolucao"), true); });
});
