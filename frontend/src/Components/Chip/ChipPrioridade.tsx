import * as React from "react";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import Chip, { ChipProps } from "@mui/material/Chip";
import { Prioridade } from "@/Types/Prioridade";
import { getEnumKey, getEnumValue } from "@/Utils/functions";

export interface PriorityBadgeProps
	extends Omit<ChipProps, "label" | "color" | "icon"> {
	/** Nível de prioridade */
	prioridade: keyof typeof Prioridade;
	showLabel?: boolean;
	keyValue?: boolean;
	keys?: string;
}

const mapConfig: Record<
	Prioridade,
	{
		color: ChipProps["color"];
		label: string;
		icon: React.ReactElement;
	}
> = {
	Alta: {
		color: "error",
		label: "Alta",
		icon: <PriorityHighIcon fontSize="small" />,
	},
	Média: {
		color: "warning",
		label: "Média",
		icon: <ReportProblemRoundedIcon fontSize="small" />,
	},
	Baixa: {
		color: "success",
		label: "Baixa",
		icon: <LowPriorityIcon fontSize="small" />,
	},
};
/**
 * Componente MUI para exibir prioridade (Alta, Média, Baixa) com ícone e cores semânticas.
 *
 * Exemplos:
 * <PriorityBadge prioridade="Alta" />
 * <PriorityBadge prioridade="Média" size="small" variant="outlined" />
 * <PriorityBadge prioridade="Baixa" showLabel={false} />
 */
export default function ChipPrioridade({
	prioridade,
	showLabel = true,
	keyValue = true,
	...chipProps
}: PriorityBadgeProps) {
	const prioridadeKey = keyValue ? getEnumValue(Prioridade, prioridade) : prioridade;
	const cfg = mapConfig[prioridadeKey as Prioridade];


	return (
		<Chip
			icon={cfg.icon}
			label={showLabel ? cfg.label : undefined}
			color={cfg.color}
			variant={chipProps.variant ?? "filled"}
			size={chipProps.size ?? "small"}
			sx={{
				fontWeight: 600,
				width: 150,
				letterSpacing: 0.2,
				// Ajuste quando não há label (chip só com ícone)
				...(showLabel
					? {}
					: {
						px: 0.75,
						"& .MuiChip-label": { display: "none" },
					}),
			}}
			{...chipProps}
		/>
	);
}

// ---- Exemplo rápido de uso ----
// import { Stack } from "@mui/material";
// function Demo() {
// return (
// <Stack direction="row" spacing={1}>
// <ChipPrioridade prioridade="Alta" />
// <ChipPrioridade prioridade="Média" variant="outlined" />
// <ChipPrioridade prioridade="Baixa" size="small" />
// <ChipPrioridade prioridade="Alta" showLabel={false} />
// </Stack>
// );
// }
