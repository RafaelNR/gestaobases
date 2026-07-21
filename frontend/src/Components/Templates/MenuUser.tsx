import * as React from "react";
import {
	Menu,
	MenuItem,
	Button,
	Typography,
	Box,
	useMediaQuery,
	Divider,
	Avatar,
	ListItemIcon,
	Theme,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import { useLogout, useMe } from "@/Hooks/useAuth";

export default function MenuUser() {
	const navigate = useNavigate();
	const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [anchorEl, setAnchorEl] = React.useState<any>(false);
	const { data: user } = useMe();
	const { mutate: logout } = useLogout();

	const initials =
		user?.nome
			?.split(" ")
			.slice(0, 2)
			.map((n: string) => n[0])
			.join("")
			.toUpperCase() ?? "U";

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleMenu = React.useCallback((event: any) => {
		setAnchorEl(event.currentTarget);
	}, []);

	const handleClose = React.useCallback(() => {
		setAnchorEl(false);
	}, []);

	return (
		<>
			<Button
				onClick={handleMenu}
				aria-label="user menu"
				sx={{
					color: "inherit",
					textTransform: "none",
					borderRadius: 2,
					px: 1,
					py: 0.5,
					gap: 0.75,
					"&:hover": { bgcolor: "action.hover" },
				}}
			>
				<Avatar
					sx={{
						width: 32,
						height: 32,
						bgcolor: "primary.main",
						fontSize: "0.8rem",
						fontWeight: 700,
					}}
				>
					{initials}
				</Avatar>
				{!smDown && (
					<>
						<Typography
							component="span"
							sx={{
								fontWeight: 600,
								fontSize: "0.875rem",
								maxWidth: 140,
								overflow: "hidden",
								textOverflow: "ellipsis",
								whiteSpace: "nowrap",
								color: "inherit",
							}}
						>
							{user?.nome}
						</Typography>
						<KeyboardArrowDownIcon sx={{ fontSize: 16, opacity: 0.6 }} />
					</>
				)}
			</Button>

			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleClose}
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				transformOrigin={{ vertical: "top", horizontal: "right" }}
				PaperProps={{
					elevation: 4,
					sx: {
						mt: 0.5,
						borderRadius: 2,
						minWidth: 200,
						overflow: "hidden",
					},
				}}
			>
				<Box sx={{ px: 2, py: 1.5 }}>
					<Typography
						variant="body1"
						sx={{ fontWeight: 700, color: "text.primary", lineHeight: 1.3 }}
					>
						{user?.nome}
					</Typography>
					<Typography
						variant="subtitle1"
						sx={{ color: "text.primary", lineHeight: 1.3 }}
					>
						{user?.Base.nome}
					</Typography>
					<Typography
						variant="subtitle2"
						sx={{ color: "text.primary", lineHeight: 1.3 }}
					>
						{user?.Setor?.nomeVisivel}
					</Typography>
					<Typography
						variant="subtitle2"
						sx={{ color: "text.primary", lineHeight: 1.3 }}
					>
						{user?.Cargo.nomeVisivel}
					</Typography>
				</Box>
				<Divider />
				<MenuItem
					onClick={() => {
						navigate("/perfil");
						handleClose();
					}}
					sx={{ gap: 1.5, py: 1.2 }}
				>
					<ListItemIcon>
						<PersonIcon fontSize="small" />
					</ListItemIcon>
					Meu Perfil
				</MenuItem>
				<Divider />
				<MenuItem
					onClick={() => logout()}
					sx={{ gap: 1.5, py: 1.2, color: "error.main" }}
				>
					<ListItemIcon>
						<LogoutIcon fontSize="small" sx={{ color: "error.main" }} />
					</ListItemIcon>
					Sair
				</MenuItem>
			</Menu>
		</>
	);
}
