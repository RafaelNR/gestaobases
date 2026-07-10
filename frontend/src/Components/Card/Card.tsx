/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Card,
	CardHeader,
	Grid,
	Typography,
	Divider,
	CardContent,
	Button,
	useMediaQuery,
	Theme,
	Tooltip,
	IconButton,
	CardProps,
} from "@mui/material";
import { JSX } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CopyIcon from "../Button/ButtonCopiar";

export function MyCardRow({
	title,
	ajuda,
	valor,
	copy,
}: {
	title: string;
	ajuda?: string;
	valor: any;
	copy?: boolean;
}) {
	const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

	return (
		<>
			<Grid
				size={{ xs: 12, sm: 5 }}
				sx={{ display: "flex", alignItems: "center" }}
			>
				<Typography
					variant="subtitle1"
					component="span"
					sx={{
						fontWeight: "bold",
						fontSize: "1rem",
						textDecoration: smDown ? "underline" : "auto",
					}}
				>
					{title}
				</Typography>
				{ajuda && (
					<Tooltip title={ajuda} arrow>
						<IconButton size="small">
							<HelpOutlineIcon fontSize="small" sx={{ fontSize: 15 }} />
						</IconButton>
					</Tooltip>
				)}
			</Grid>

			<Grid size={{ xs: 12, sm: 7 }}>
				<Typography
					variant="subtitle1"
					component="span"
					sx={{ fontWeight: "normal", fontSize: "1rem" }}
				>
					{valor}
				</Typography>
				{copy && <CopyIcon value={valor} />}
			</Grid>
		</>
	);
}

export function MyCardHeader({
	title,
	href,
	buttonName,
}: {
	title: JSX.Element | React.ReactNode;
	href?: string;
	buttonName?: string;
}) {
	return (
		<>
			{title && !href ? (
				<>
					<CardHeader
						title={
							<Typography
								variant="body1"
								component="h6"
								sx={{
									fontWeight: "bold",
									fontSize: "1.1rem",
								}}
							>
								{title}
							</Typography>
						}
					/>
					<Divider />
				</>
			) : (
				href && (
					<>
						<CardHeader
							title={
								<Grid container rowSpacing={2}>
									<Grid size={6}>
										<Typography
											variant="body1"
											component="h6"
											sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
										>
											{title}
										</Typography>
									</Grid>
									<Grid size={6}>
										<Button
											color="primary"
											href={href}
											variant="contained"
											size="small"
										>
											{buttonName}
										</Button>
									</Grid>
								</Grid>
							}
						/>
						<Divider />
					</>
				)
			)}
		</>
	);
}

type IProps = {
	titulo?: JSX.Element | React.ReactNode;
	title?: JSX.Element | React.ReactNode;
	href?: string;
	buttonName?: string;
	children: string | React.ReactNode;
	rowSpacing?: number;
} & CardProps;

export default function MyCard({
	titulo,
	title,
	href,
	buttonName = "Acessar",
	children,
	rowSpacing = 2,
	...rest
}: IProps) {
	return (
		<Card {...rest}>
			<MyCardHeader
				title={titulo || title}
				href={href}
				buttonName={buttonName}
			/>
			<CardContent>
				<Grid container rowSpacing={rowSpacing}>
					{children}
				</Grid>
			</CardContent>
		</Card>
	);
}
