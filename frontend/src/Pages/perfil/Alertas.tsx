import { Alert, Stack } from "@mui/material";
import moment from "moment";
import { useFormContext } from "react-hook-form";

export default function Alertas() {
	const { watch } = useFormContext();
	const valores = watch();
	return (
		<Stack spacing={1} sx={{ mt: 1 }}>
			<Alert
				severity={valores.email_validado ? "success" : "error"}
				variant="filled"
			>
				{valores.email_validado
					? "Seu email foi validado."
					: "Seu email não foi validado."}
			</Alert>
			{!valores.cpf && (
				<Alert variant="filled" severity={"error"}>
					CPF não foi informado.
				</Alert>
			)}
			{!moment(valores.data_nascimento).isValid() && (
				<Alert variant="filled" severity={"error"}>
					Data de Nascimento não foi informado.
				</Alert>
			)}

			{!valores.telefone && (
				<Alert variant="filled" severity={"error"}>
					Telefone não foi informado ou é invalido.
				</Alert>
			)}
		</Stack>
	);
}
