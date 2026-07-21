import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { Chip, type ChipProps } from "@mui/material";
import type { StatusValidadeEstoque } from "@/Types/Estoque";

export const STATUS_VALIDADE_CONFIG: Record<
	StatusValidadeEstoque,
	{ label: string; color: "default" | "success" | "warning" | "error" }
> = {
	SemValidade: { label: "Sem validade", color: "default" },
	Regular: { label: "Regular", color: "success" },
	Atencao: { label: "Atenção · até 15 dias", color: "warning" },
	Alerta: { label: "Alerta · até 7 dias", color: "error" },
	Vencido: { label: "Vencido", color: "error" },
};

export const validadeOptions = Object.entries(STATUS_VALIDADE_CONFIG).map(
	([value, item]) => ({ value, label: item.label }),
);

type Props = {
	status: StatusValidadeEstoque;
} & Omit<ChipProps, "color" | "icon" | "label">;

export default function ChipStatusValidade({
	status,
	size = "small",
	variant,
	...rest
}: Props) {
	const item = STATUS_VALIDADE_CONFIG[status];

	return (
		<Chip
			size={size}
			color={item.color}
			variant={variant ?? "filled"}
			icon={
				["Vencido", "Alerta"].includes(status) ? (
					<WarningAmberIcon />
				) : undefined
			}
			label={item.label}
			{...rest}
		/>
	);
}
