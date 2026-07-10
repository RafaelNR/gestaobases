import { Chip, Typography, ChipProps } from "@mui/material";
import { TipoManifestacao } from "@/Types/TipoManifestacoes";

type IProps = {
	tipo: keyof typeof TipoManifestacao;
	keys?: string;
} & ChipProps;

export const normalize = (val: unknown) => {
	if (typeof val !== "string") return val;

	return val.toLocaleLowerCase();
};

export default function ChipTipoManifestacao({
	tipo,
	keys,
	size = "small",
	...rest
}: IProps) {
	return (
		<Chip
			sx={{
				bgcolor: keys
					? "background." + normalize(keys)
					: tipo && "background." + normalize(tipo),
				width: 150,
				color: "white",
			}}
			size={size}
			label={
				<>
					{keys
						? Object.assign(TipoManifestacao)[keys]
						: tipo && Object.assign(TipoManifestacao)[tipo]}
				</>
			}
			{...rest}
		/>
	);
}
