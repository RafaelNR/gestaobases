import { Card, CardContent, Typography } from "@mui/material";
import CheckBoxTermos from "../CheckBox/CheckboxTermos";

export default function CardTermos() {
	return (
		<Card sx={{ mt: 3 }}>
			<CardContent>
				<Typography
					variant="h6"
					sx={{
						mb: 1,
						color: "orange",
						borderBottom: "1px solid orange",
						display: "inline-block",
						textAlign: "justify",
					}}
				>
					Termos & Privacidade
				</Typography>

				<CheckBoxTermos />
			</CardContent>
		</Card>
	);
}
