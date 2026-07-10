import {
	Breadcrumbs,
	Link,
	Stack,
	Typography,
	SxProps,
	Box,
} from "@mui/material";

type List = {
	label: string;
	href?: string;
};

export default function MyBreadcrumbs({
	list,
	sx,
}: {
	list: List[];
	sx?: SxProps;
}) {
	return (
		<Stack
			spacing={2}
			sx={{ ...sx, display: "flex", justifyContent: "center", ml: 2 }}
		>
			<Breadcrumbs
				separator={<Typography variant={"h5"}>/</Typography>}
				aria-label={`breadcrumb`}
			>
				{list.map((l, index) => {
					return (
						<Box key={index + 1}>
							{l.href ? (
								<Link
									underline="hover"
									color="inherit"
									href={l.href}
									sx={{
										display: "flex",
										alignItems: "center",
										"& > svg": { marginRight: 1, marginTop: "3px" },
									}}
								>
									<Typography
										variant="h5"
										sx={{
											display: "flex",
											alignItems: "center",
											"& > svg": { marginRight: 1, marginTop: "3px" },
										}}
									>
										{l.label}
									</Typography>
								</Link>
							) : (
								<Typography
									variant="h5"
									sx={{
										display: "flex",
										alignItems: "center",
										"& > svg": { marginRight: 1, marginTop: "3px" },
									}}
								>
									{l.label}
								</Typography>
							)}
						</Box>
					);
				})}
			</Breadcrumbs>
		</Stack>
	);
}
