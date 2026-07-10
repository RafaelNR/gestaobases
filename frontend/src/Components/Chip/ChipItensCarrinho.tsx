import { Chip, ChipProps } from "@mui/material";

type Props = {
	qnt?: number | null | undefined;
} & Omit<ChipProps, "label">;

export default function ChipItensCarrinho({ qnt, ...props }: Props) {
	return (
		<Chip
			label={`${qnt || 0} item(s)`}
			size="small"
			variant="outlined"
			{...props}
		/>
	);
}
