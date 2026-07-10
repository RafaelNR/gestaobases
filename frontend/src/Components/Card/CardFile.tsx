import {
	Card,
	CardContent,
	Typography,
	Box,
	Button,
	Grid,
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ImageIcon from "@mui/icons-material/Image";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { AcompanhamentoFile } from "@/Types/Acompanhamentos";
import DownloadFileAuth from "../Button/DownloadFileAuth";

function getFileIcon(type: string) {
	if (type.includes("pdf"))
		return <PictureAsPdfIcon color="error" sx={{ fontSize: 40 }} />;
	if (type.includes("image"))
		return <ImageIcon color="primary" sx={{ fontSize: 40 }} />;
	if (type.includes("audio"))
		return <AudiotrackIcon color="secondary" sx={{ fontSize: 40 }} />;
	if (type.includes("video"))
		return <VideoLibraryIcon color="success" sx={{ fontSize: 40 }} />;
	return <InsertDriveFileIcon sx={{ fontSize: 40 }} />;
}

interface IProps {
	file: { name: string; size: number; type: string };
}

export default function FileInfoCard({ file }: IProps) {
	return (
		<Card sx={{ maxWidth: "100%", mt: 2, mb: 2, boxShadow: 3 }}>
			<CardContent>
				<Box display="flex" alignItems="center" flex-direction="row" gap={2}>
					{getFileIcon(file.type || "")}
					<Box>
						<Typography variant="h6">{file.name}</Typography>
						<Typography variant="body2" color="text.secondary">
							Tamanho: {(file.size / 1024).toFixed(2)} KB
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Tipo: {file.type || "Desconhecido"}
						</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
}

export function AcompanhamentoFileCard({ file }: { file: AcompanhamentoFile }) {
	return (
		<Card sx={{ maxWidth: "100%", mt: 2, mb: 2 }} elevation={0}>
			<CardContent>
				<Grid
					container
					display="flex"
					alignItems="center"
					flex-direction="row"
					sx={{ width: "100%" }}
				>
					<Grid size={3}>{getFileIcon(file.mimetype || "")}</Grid>
					<Grid size={9}>
						<Typography variant="h6">{file.originalname}</Typography>
						<Typography variant="body2" color="text.secondary">
							Tamanho: {(file.size / 1024).toFixed(2)} KB
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Tipo: {file.mimetype || "Desconhecido"}
						</Typography>
					</Grid>
					<Grid
						size={12}
						display={"flex"}
						justifyContent={"flex-start"}
						sx={{ mt: 2 }}
					>
						<DownloadFileAuth
							originalname={file.originalname}
							filename={file.filename}
							url={file.url}
							preview={false}
							title="Baixar"
						/>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}
