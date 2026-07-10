import * as React from "react";
import { useLocation } from "react-router-dom";
import { Stack, Snackbar, Slide, Box } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
// import LinearProgress from "@mui/material/LinearProgress";

import useSnackBar from "@/Hooks/useSnackBar";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SlideTransition(props: any) {
	return <Slide {...props} direction="up" />;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Alert = React.forwardRef((props: any, ref: any) => {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
	const location = useLocation();
	const { severity, message, openSnackBar, handleClose, handleSnackBar } =
		useSnackBar();

	React.useEffect(() => {
		const state = location.state;
		if (state && state.type && state.message) {
			handleSnackBar(state);
			window.history.replaceState({}, document.title);
		}
		// eslint-disable-next-line
	}, [location]);

	return (
		<React.Fragment>
			{openSnackBar && (
				<Stack spacing={2} sx={{ width: "100%" }}>
					<Snackbar
						anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
						open={openSnackBar}
						autoHideDuration={5000}
						TransitionComponent={SlideTransition}
						onClose={handleClose}
					>
						<Box>
							<Alert
								onClose={handleClose}
								severity={severity ? severity : "success"}
								sx={{ fontSize: 15 }}
							>
								{message}
							</Alert>
						</Box>
					</Snackbar>
				</Stack>
			)}
		</React.Fragment>
	);
}
