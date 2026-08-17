import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { Chip, type ChipProps } from "@mui/material";
import type { StatusValidadeEstoque } from "@/Types/Estoque";

export const STATUS_VALIDADE_CONFIG: Record<
	StatusValidadeEstoque,
	{ label: string; color: "default" | "success" | "warning" | "error" }
> = {
	SemValidade: { label: "Sem validade", color: "default" },
	Regular: { label: "Regular", color: "success" },
	Atencao: { label: "Vence até 15 dias", color: "default" },
	Alerta: { label: "Vence até 7 dias", color: "warning" },
	Hoje: { label: "Vence hoje", color: "error" },
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
	sx,
	style,
	...rest
}: Props) {
	const item = STATUS_VALIDADE_CONFIG[status];
	const atencao = status === "Atencao";

	return (
		<Chip
			size={size}
			color={atencao ? "default" : item.color}
			variant={variant ?? "filled"}
			icon={
				["Vencido", "Alerta", "Hoje"].includes(status) ? (
					<WarningAmberIcon />
				) : undefined
			}
			label={item.label}
			sx={sx}
			style={
				atencao
					? { backgroundColor: "#fdd835", color: "#3e2723", ...style }
					: style
			}
			{...rest}
		/>
	);
}
