import {
	Card,
	CardContent,
	Typography,
	Grid,
	IconButton,
	Box,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ImageIcon from "@mui/icons-material/Image";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

import { useCallback } from "react";
import { useFormContext } from "react-hook-form";

function getFileIcon(type: string) {
	if (type.includes("pdf")) return <PictureAsPdfIcon color="error" />;
	if (type.includes("image")) return <ImageIcon color="primary" />;
	if (type.includes("audio")) return <AudiotrackIcon color="secondary" />;
	if (type.includes("video")) return <VideoLibraryIcon color="success" />;
	return <InsertDriveFileIcon />;
}

export default function Files() {
	const { setValue, watch } = useFormContext();
	const files: File[] = watch("arquivos") || [];

	const removeFile = useCallback(
		(index: number) => {
			setValue(
				"arquivos",
				files.filter((_, i) => i !== index),
				{ shouldValidate: true },
			);
		},
		[files, setValue],
	);

	return (
		<Grid container spacing={2} sx={{ mt: 1 }}>
			{files.map((file, index) => (
				<Grid size={{ xs: 6, sm: 4, md: 3, lg: 2.4 }} key={index}>
					<Card sx={{ position: "relative", height: "100%" }}>
						<IconButton
							size="small"
							color="error"
							onClick={() => removeFile(index)}
							sx={{
								position: "absolute",
								top: 4,
								right: 4,
							}}
						>
							<DeleteIcon fontSize="small" />
						</IconButton>

						<CardContent
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								textAlign: "center",
								p: 2,
							}}
						>
							<Box sx={{ fontSize: 40 }}>{getFileIcon(file.type || "")}</Box>

							<Typography
								variant="body2"
								sx={{
									mt: 1,
									fontWeight: "bold",
									wordBreak: "break-word",
								}}
							>
								{file.name}
							</Typography>

							{/* <Typography variant="caption" color="text.secondary">
								{(file.size / 1024).toFixed(1)} KB
							</Typography> */}
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	);
}
