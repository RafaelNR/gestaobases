import { memo } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button, { ButtonProps } from "@mui/material/Button";
import Tootip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

//* CONTEXT
import usePerfil from "@/Hooks/usePerfil";
import useDialog from "@/Contexts/DialogContext";

type IProps = {
	id?: any;
	permission?: string;
	row?: any;
	edit?: any;
	view?: any;
	deletar?: any;
	status?: any;
};

const MyButton = ({
	label = "",
	bgColor,
	children,
	onclick,
	...rest
}: Record<string, any> & { children: any } & ButtonProps) => {
	return (
		<Button
			aria-label={label}
			size="small"
			sx={{ backgroundColor: bgColor, border: "transparent" }}
			onClick={() => onclick()}
			{...rest}
		>
			<Tootip title={label}>{children}</Tootip>
		</Button>
	);
};

const MyButtonsGroup = ({
	id,
	permission,
	row,
	edit,
	view,
	deletar,
	status,
}: IProps) => {
	const { hasPermission } = usePerfil();
	const { handleClickOpenDialog } = useDialog();

	return (
		<>
			{hasPermission && (
				<ButtonGroup
					disableElevation
					size="small"
					variant="contained"
					aria-label="button group"
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
							onClick={() =>
								handleClickOpenDialog({ t: "edit", ID: id, r: row })
							}
						>
							<EditIcon fontSize="small" sx={{ color: "white" }} />
						</MyButton>
					)}

					{view && hasPermission(`${permission}:view` as any) && (
						<MyButton
							bgColor={"#2185d0"}
							label="Visualizar"
							onClick={() =>
								handleClickOpenDialog({ t: "view", ID: id, r: row })
							}
						>
							<VisibilityIcon fontSize="small" sx={{ color: "white" }} />
						</MyButton>
					)}

					{status && hasPermission(`${permission}:status` as any) && (
						<MyButton
							label="Mudar Status"
							bgColor="background.status"
							onClick={() =>
								handleClickOpenDialog({ t: "status", ID: id, r: row })
							}
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
							onClick={() =>
								handleClickOpenDialog({ t: "deletar", ID: id, r: row })
							}
						>
							<DeleteIcon fontSize="small" sx={{ color: "white" }} />
						</MyButton>
					)}
				</ButtonGroup>
			)}
		</>
	);
};

export default memo(MyButtonsGroup);
