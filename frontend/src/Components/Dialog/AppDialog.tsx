import React from "react";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Divider,
	IconButton,
	Box,
	Slide,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & { children: React.ReactElement<unknown> },
	ref: React.Ref<unknown>,
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

interface AppDialogProps {
	open: boolean;
	onClose: () => void;
	title: string;
	icon?: React.ReactNode;
	children: React.ReactNode;
	actions?: React.ReactNode;
	maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
	fullScreen?: boolean;
}

export default function AppDialog({
	open,
	onClose,
	title,
	icon,
	children,
	actions,
	maxWidth = "sm",
	fullScreen = false,
}: AppDialogProps) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const isFullScreen = fullScreen || isMobile;

	return (
		<Dialog
			open={open}
			onClose={onClose}
			maxWidth={maxWidth}
			fullWidth
			fullScreen={isFullScreen}
			slots={{ transition: Transition }}
			PaperProps={{
				sx: { borderRadius: isFullScreen ? 0 : 2 },
			}}
		>
			<DialogTitle sx={{ py: 1.5, px: 2.5 }}>
				<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
					{icon && (
						<Box
							sx={{
								color: "primary.main",
								display: "flex",
								alignItems: "center",
							}}
						>
							{icon}
						</Box>
					)}
					<Box sx={{ flex: 1, fontWeight: 600, fontSize: "1.05rem" }}>
						{title}
					</Box>
					<IconButton onClick={onClose} size="small" edge="end" sx={{ ml: 1 }}>
						<CloseIcon fontSize="small" />
					</IconButton>
				</Box>
			</DialogTitle>

			<Divider />

			<DialogContent sx={{ px: 2.5, py: 2.5 }}>{children}</DialogContent>

			{actions && (
				<>
					<Divider />
					<DialogActions sx={{ px: 2.5, py: 1.5 }}>{actions}</DialogActions>
				</>
			)}
		</Dialog>
	);
}
