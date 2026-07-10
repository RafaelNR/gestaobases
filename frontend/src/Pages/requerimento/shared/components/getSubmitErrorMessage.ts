import {
	RequerimentoCarrinhoFormValues,
	TipoRequerimento,
} from "@/Types/Requerimento";
import { FieldErrors } from "react-hook-form";

function getItemErrorMessage(
	tipo: TipoRequerimento,
	errors: FieldErrors<RequerimentoCarrinhoFormValues>,
) {
	if (!errors.itens) return undefined;
	if (typeof errors.itens.message === "string") return errors.itens.message;
	if (!Array.isArray(errors.itens)) return undefined;

	const hasQuantidadeError = errors.itens.some((item) => item?.quantidade);
	if (hasQuantidadeError) return "Informe uma quantidade válida para os itens.";

	if (tipo === "Farmacia") {
		const hasOcorrenciaError = errors.itens.some((item) => item?.ocorrencia);
		if (hasOcorrenciaError) {
			return "Informe a ocorrência dos medicamentos no carrinho.";
		}

		const hasMedicamentoError = errors.itens.some(
			(item) => item?.medicamentoId,
		);
		if (hasMedicamentoError) return "Selecione medicamentos válidos.";
	}

	const hasProdutoError = errors.itens.some((item) => item?.produtoId);
	if (hasProdutoError) return "Selecione produtos válidos.";

	return undefined;
}

export function getSubmitErrorMessage(
	tipo: TipoRequerimento,
	errors: FieldErrors<RequerimentoCarrinhoFormValues>,
) {
	if (errors.setor?.message) return String(errors.setor.message);
	if (errors.base?.message) return String(errors.base.message);
	if (tipo === "Farmacia" && errors.ambulancia?.message) {
		return String(errors.ambulancia.message);
	}

	return (
		getItemErrorMessage(tipo, errors) ?? "Preencha os campos obrigatórios."
	);
}
