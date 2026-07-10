import { Chip, ChipProps } from "@mui/material";
import {
	RequerimentoStatus,
	STATUS_REQUERIMENTO_LABELS,
} from "@/Types/Requerimento";

const STATUS_COLORS: Record<
	RequerimentoStatus,
	"default" | "info" | "warning" | "secondary" | "success" | "error"
> = {
	Rascunho: "default",
	Aguardando: "default",
	Recebido: "info",
	Analise: "warning",
	Separacao: "secondary",
	Finalizado: "success",
	Cancelado: "error",
};

type IProps = {
	status: RequerimentoStatus;
} & ChipProps;

export default function ChipStatusRequerimento({
	status,
	size = "small",
	...rest
}: IProps) {
	return (
		<Chip
			size={size}
			color={STATUS_COLORS[status]}
			label={STATUS_REQUERIMENTO_LABELS[status]}
			{...rest}
		/>
	);
}
