import type {
	EstoqueItem,
	EstoqueLote,
	StatusValidadeEstoque,
	TipoMovimentacaoEstoque,
} from "@/Types/Estoque";
export function resumirValidades(items: EstoqueItem[]) {
	return items.reduce<Record<StatusValidadeEstoque, number>>(
		(acc, item) => {
			for (const status of Object.keys(acc) as StatusValidadeEstoque[]) {
				acc[status] += item.validadeResumo?.[status] ?? 0;
			}
			return acc;
		},
		{ SemValidade: 0, Regular: 0, Atencao: 0, Alerta: 0, Vencido: 0 },
	);
}

// Se lote com saldo disponivel para saida
export function permiteMovimentacao(
	lote: EstoqueLote,
	tipo: TipoMovimentacaoEstoque,
) {
	if (["Saida", "TransferenciaSaida"].includes(tipo))
		return lote.disponivelParaSaida;
	return true;
}
