import { BoxProps, Chip } from "@mui/material";

type Props = {
	active: boolean;
	label?: string;
} & BoxProps;

export default function ChipAtivoInativo({ active }: Props) {
	return (
		<Chip
			label={active ? "Ativa" : "Inativa"}
			color={active ? "success" : "error"}
			size="small"
		/>
	);
}
