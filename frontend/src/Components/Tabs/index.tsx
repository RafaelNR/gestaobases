import Box from "@mui/material/Box";
import { SxProps, Tab, Theme } from "@mui/material";
import { styled } from "@mui/system";

type IProps = {
	value: number;
	index: number;
	children: React.ReactElement | string;
	sx?: SxProps;
};

export function TabPanel({ children, value, index, sx, ...other }: IProps) {
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 2, ...sx }}>{children}</Box>}
		</div>
	);
}

export function TabPanelElevation({
	children,
	value,
	index,
	sx,
	...other
}: IProps) {
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box
					sx={{
						p: 2,
						boxShadow:
							"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
					}}
				>
					{children}
				</Box>
			)}
		</div>
	);
}

export function a11yProps(index: number) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}

export const MyTab = styled(Tab)(({ theme }: { theme?: Theme }) => {
	return {
		paddingTop: 0,
		paddingBottom: 0,
		minHeight: "60px",
		borderTopLeftRadius: "8px",
		borderTopRightRadius: "8px",
		"&.Mui-selected": {
			borderTopLeftRadius: "8px",
			borderTopRightRadius: "8px",
			backgroundColor:
				theme?.palette.mode === "dark"
					? theme?.palette.primary.main
					: theme?.palette.secondary.main,
			color: "white",
		},
	};
});
