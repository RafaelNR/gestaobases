import * as React from "react";

import { TransitionProps } from "@mui/material/transitions";
import {
	Box,
	Toolbar,
	AppBar,
	IconButton,
	Typography,
	Slide,
	Dialog,
	DialogContent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

//*
import useDialog from "@/Contexts/DialogContext";

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<unknown>;
	},
	ref: React.Ref<unknown>,
) {
	return <Slide direction="left" ref={ref} {...props} />;
});

export default function DialogFactory({
	title,
	subTitle,
	element,
}: {
	title: string;
	subTitle?: string;
	element?: React.ReactNode;
}) {
	const { open, handleCloseDialog } = useDialog();

	return (
		<Dialog
			fullScreen
			open={open}
			slots={{
				transition: Transition,
			}}
			sx={[
				(theme) => ({
					width: "50%",
					left: "50%",
					[theme.breakpoints.down("md")]: {
						width: "100%",
						left: "0",
					},
				}),
			]}
		>
			<AppBar sx={{ position: "relative" }}>
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						onClick={handleCloseDialog}
						aria-label="close"
					>
						<CloseIcon />
					</IconButton>
					<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
						{title}
					</Typography>
				</Toolbar>
			</AppBar>
			<DialogContent>
				<Box
					sx={{
						gap: 2,
						height: "100%",
					}}
				>
					{subTitle && <Typography>{subTitle}</Typography>}
					{element && <>{element}</>}
				</Box>
			</DialogContent>
		</Dialog>
	);
}
