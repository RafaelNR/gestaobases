import { Button, ButtonProps } from "@mui/material";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import { useCallback, useState } from "react";
import { uploadService } from "@/Service/Upload.service";
import { AxiosProgressEvent } from "axios";
import useSnackBar from "@/Hooks/useSnackBar";

type Props = {
	loading?: boolean;
	title?: string;
	url: string;
	filename: string;
	originalname: string;
	preview: boolean;
	registerLog?: boolean;
} & ButtonProps;

export default function ButtonDownloadFileAuthManifestacao({
	loading,
	url,
	filename,
	originalname,
	preview,
	title = "Download",
	registerLog = true,
	...otherProps
}: Props) {
	const { handleSnackBar } = useSnackBar();
	const handleDownload = useCallback(async () => {
		try {
			const onDownloadProgress = (progressEvent: AxiosProgressEvent) => {
				console.log(progressEvent.loaded);
				if (progressEvent.total) {
					const percent = Math.round(
						(progressEvent.loaded * 100) / (progressEvent.total || 0),
					);
					console.log(`Progresso: ${percent}%`);
				}
			};

			// // Faz a requisição para o arquivo
			const response = await uploadService.getDownloadFile(url, {
				onDownloadProgress,
			});

			// Cria um link temporário para o blob
			const blob = new Blob([response.data]);
			const downloadUrl = window.URL.createObjectURL(blob);

			const link = document.createElement("a");
			link.href = downloadUrl;
			link.download = originalname || "downloaded-file";
			document.body.appendChild(link);
			link.click();

			// so para manifestacao
			if (registerLog) await uploadService.postLogDownload(filename);

			document.body.removeChild(link);
			window.URL.revokeObjectURL(downloadUrl);
		} catch (error: any) {
			console.log(error.message as string);
			handleSnackBar({
				message: error.message ?? "Não foi possivel baixar o arquivo.",
				type: "error",
			});
		}
	}, [originalname, url, filename, loading]);

	return (
		<Button
			startIcon={<FileOpenIcon />}
			variant="contained"
			color="success"
			onClick={() => handleDownload()}
			{...otherProps}
		>
			{title}
		</Button>
	);
}
