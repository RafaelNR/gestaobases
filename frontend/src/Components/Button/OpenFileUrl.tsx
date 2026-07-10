import { Button, ButtonProps } from "@mui/material";
import FileOpenIcon from "@mui/icons-material/FileOpen";

import useSnackBar from "@/Contexts/SnackBarContext";
import { useCallback } from "react";
import { openFileIsExiste } from "@/Utils/arquivoExiste";

type Props = {
	loading?: boolean;
	title?: string;
	link?: string;
} & ButtonProps;

export default function ButtonOpenFile({
	loading,
	link,
	title = "Abrir",
	...otherProps
}: Props) {
	const { handleSnackBarError } = useSnackBar();

	const openFile = useCallback(async (url: string | undefined) => {
		if (url) {
			const isExist = await openFileIsExiste(url);

			if (!isExist) {
				handleSnackBarError(null, "Arquivo não existe ou não foi encontrado.");
			}
		}
	}, []);
	return (
		<Button
			startIcon={<FileOpenIcon />}
			variant="contained"
			color="success"
			onClick={() => openFile(link)}
			{...otherProps}
		>
			{title}
		</Button>
	);
}
