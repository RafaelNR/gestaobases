import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import useDialog from "@/Contexts/DialogContext";
import { DialogContent, DialogActions } from "@mui/material";

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<unknown>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="left" ref={ref} {...props} />;
});

type IProps = {
	title: string;
	actions?: React.ReactNode;
	children: React.ReactNode;
};

export default function FullScreenDialog({ actions, title, children }: IProps) {
	const { open, handleCloseDialog } = useDialog();

	return (
		<Dialog
			fullScreen
			open={open}
			slots={{
				transition: Transition,
			}}
			sx={{ width: "50%", left: "50%" }}
		>
			<AppBar sx={{ position: "relative" }}>
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						onClick={handleCloseDialog}
						aria-label="close"
						sx={{ color: "white" }}
					>
						<CloseIcon />
					</IconButton>
					<Typography
						sx={{ ml: 2, flex: 1, color: "white" }}
						variant="h6"
						component="div"
					>
						{title}
					</Typography>
				</Toolbar>
			</AppBar>
			<DialogContent sx={{ p: 0 }}>{children}</DialogContent>
			{actions && <DialogActions>{actions}</DialogActions>}
		</Dialog>
	);
}
