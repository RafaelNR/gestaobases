import { Toolbar, Box } from "@mui/material";
import AddButton, { AddButtonDialog } from "../Button/Cadastro";

//* CONTEXT
import usePerfil from "@/Hooks/usePerfil";
import useDialog from "@/Contexts/DialogContext";

const TableToolbar = ({
	addButton,
	nameButton = "Cadastrar",
	loading,
	children,
}: {
	title?: string | React.ReactElement;
	addButton?: string;
	nameButton?: string;
	loading?: boolean;
	children?: React.ReactElement;
}) => {
	const { hasPermission } = usePerfil();

	return (
		<>
			{(addButton || nameButton || children) && (
				<Toolbar sx={{ height: "75px", background: "transparent" }}>
					<Box
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Box sx={{ display: "flex" }}>
							{/* <Search handleChangeSearch={handleChangeSearch} /> */}
							{!loading && children}
						</Box>
						<Box sx={{ display: "flex" }}>
							{addButton && hasPermission(`${addButton}:new`) && (
								<AddButton
									name={nameButton}
									href={`/${addButton}/new`}
									sx={{ height: 40 }}
								/>
							)}
						</Box>
					</Box>
				</Toolbar>
			)}
		</>
	);
};

export default TableToolbar;

export const TableToolbarDialog = ({
	permission,
	nameButton = "Cadastrar",
	loading,
	children,
}: {
	title?: string | React.ReactElement;
	permission?: string;
	nameButton?: string;
	loading?: boolean;
	children?: React.ReactElement;
}) => {
	const { hasPermission } = usePerfil();
	const { handleClickOpenDialog } = useDialog();

	return (
		<Toolbar sx={{ height: "75px", background: "transparent" }}>
			<Box
				sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
			>
				<Box sx={{ display: "flex" }}>{!loading && children}</Box>
				<Box sx={{ display: "flex" }}>
					{permission && hasPermission(permission) && (
						<AddButtonDialog
							name={nameButton}
							onClick={() => handleClickOpenDialog({ t: "new" })}
							sx={{ height: 40 }}
						/>
					)}
				</Box>
			</Box>
		</Toolbar>
	);
};
