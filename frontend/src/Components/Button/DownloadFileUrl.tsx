import { Button, ButtonProps } from "@mui/material";
import FileOpenIcon from "@mui/icons-material/FileOpen";

type Props = {
	loading?: boolean;
	title?: string;
	url: string;
	fileName: string;
	preview: boolean;
} & ButtonProps;

export default function ButtonDownloadFile({
	loading,
	url,
	fileName,
	preview,
	title = "Download",
	...otherProps
}: Props) {
	const handleDownload = () => {
		if (preview) {
			const link = document.createElement("a");
			link.href = url;
			link.download = fileName || "downloaded-file-preview";
			document.body.appendChild(link);

			link.click();

			document.body.removeChild(link);
			window.URL.revokeObjectURL(url);
		} else {
			const link = document.createElement("a");
			link.href = url;
			link.download = fileName || "downloaded-file";
			document.body.appendChild(link);
			console.log(url);

			link.click();

			document.body.removeChild(link);
			window.URL.revokeObjectURL(url);
			// fetch(url)
			// 	.then((response) => response.blob())
			// 	.then((blob) => {
			// 		const url = window.URL.createObjectURL(new Blob([blob]));
			// 		const link = document.createElement("a");
			// 		link.href = url;
			// 		link.download = fileName || "downloaded-file";
			// 		document.body.appendChild(link);
			// 		console.log(url);

			// 		link.click();

			// 		document.body.removeChild(link);
			// 		window.URL.revokeObjectURL(url);
			// 	})
			// 	.catch((error) => {
			// 		console.error("Error fetching the file:", error);
			// 	});
		}
	};
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
