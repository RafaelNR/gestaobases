import ShareIcon from "@mui/icons-material/Share";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import { Box, BoxProps, Chip, Tooltip } from "@mui/material";

type Props = {
	compartilhar: boolean;
	compartilhar_setor: boolean;
} & BoxProps;

export default function ChipCompartinhamento({
	compartilhar,
	compartilhar_setor,
	...rest
}: Props) {
	return (
		<Box {...rest}>
			{compartilhar && (
				<Tooltip title={"Compartilhada com Manifestante"} arrow>
					<Chip
						size="small"
						sx={{ "& .MuiChip-label": { marginTop: 1 } }}
						label={<ShareIcon sx={{ fontSize: 14, cursor: "pointer" }} />}
					/>
				</Tooltip>
			)}
			{compartilhar_setor && (
				<Tooltip title={"Compartilhada com Setor"} arrow>
					<Chip
						size="small"
						sx={{ "& .MuiChip-label": { marginTop: 0.8 } }}
						label={<ScreenShareIcon sx={{ fontSize: 14, cursor: "pointer" }} />}
					/>
				</Tooltip>
			)}
		</Box>
	);
}
