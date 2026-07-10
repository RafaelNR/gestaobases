import { memo } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import FeedbackIcon from '@mui/icons-material/Feedback';

//* CONTEXT
import usePerfil from "@/Hooks/usePerfil";
import { useNavigate } from "react-router";
import MyButton from "./MyButton";
import useDialog from "@/Contexts/DialogContext";

type IProps = {
	id?: any;
	path?: any;
	edit?: any;
	view?: any;
	deletar?: any;
	status?: any;
	feedback?: any;
	feedbackCount?: number;
	permission?: string;
};

const MyButtonsGroup = ({
	id,
	path,
	edit,
	view,
	deletar,
	status,
	feedback,
	feedbackCount,
	permission,
}: IProps) => {
	const { hasPermission } = usePerfil();
	const { handleClickOpenDialog } = useDialog();
	const navigate = useNavigate();

	return (
		<>
			{hasPermission && (
				<ButtonGroup
					disableElevation
					size="small"
					variant="contained"
					aria-label="outlined primary button group"
					sx={{
						"& .MuiButtonBase-root": {
							border: "transparent",
						},
					}}
				>
					{edit && hasPermission(`${permission}:edit` as any) && (
						<MyButton
							bgColor="#16ab39"
							label="Editar"
							onClick={() => navigate(`/${path}/edit/${id}`)}
						>
							<EditIcon fontSize="small" sx={{ color: "white" }} />
						</MyButton>
					)}

					{view && hasPermission(`${permission}:view` as any) && (
						<MyButton
							bgColor={"#2185d0"}
							label="Visualizar"
							onClick={() => navigate(`/${path}/view/${id}`)}
						>
							<VisibilityIcon fontSize="small" sx={{ color: "white" }} />
						</MyButton>
					)}

					{status && hasPermission(`${permission}:status` as any) && (
						<MyButton
							label="Mudar Status"
							bgColor="background.status"
							onClick={status}
						>
							<PublishedWithChangesIcon
								fontSize="small"
								sx={{ color: "white" }}
							/>
						</MyButton>
					)}

					{deletar && hasPermission(`${permission}:deletar` as any) && (
						<MyButton
							label="Remover"
							bgColor="#d01919"
							onClick={() => deletar(id)}
						>
							<DeleteIcon fontSize="small" sx={{ color: "white" }} />
						</MyButton>
					)}

					{feedback && hasPermission(`${permission}:feedback` as any) && (
						<MyButton
							label={`Feedback ${feedbackCount}`}
							bgColor={feedbackCount && feedbackCount > 0 ? "#16ab39" : "#d01919"}
							onClick={() => handleClickOpenDialog({ t: "feedback", ID: id })}
						>
							<FeedbackIcon fontSize="small" sx={{ color: "white" }} />
						</MyButton>
					)}
				</ButtonGroup>
			)}
		</>
	);
};

export default memo(MyButtonsGroup);
