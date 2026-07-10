import { Box, Typography } from "@mui/material";
import { matchPath, useLocation } from "react-router-dom";
import React from "react";
import { Pages } from "@/Pages/Pages";

export default function PageHeader() {
	const { pathname } = useLocation();

	const page = React.useMemo(() => {
		return Pages.find((item) =>
			matchPath({ path: item.path, end: true }, pathname),
		);
	}, [pathname]);

	if (!page?.title) return null;

	return (
		<Box
			sx={{
				px: { xs: 2, sm: 3 },
				py: 2.5,
				bgcolor: "background.paper",
				borderBottom: "1px solid",
				borderColor: "divider",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				gap: 2,
			}}
		>
			<Box>
				<Typography
					variant="h5"
					component="h1"
					sx={{
						fontWeight: 700,
						color: "text.primary",
						lineHeight: 1.2,
						fontSize: { xs: "1.25rem", sm: "1.5rem" },
					}}
				>
					{page.title}
				</Typography>
				{page.subTitle && (
					<Typography
						variant="body2"
						color="text.secondary"
						sx={{ mt: 0.5, maxWidth: 720 }}
					>
						{page.subTitle}
					</Typography>
				)}
			</Box>
		</Box>
	);
}
