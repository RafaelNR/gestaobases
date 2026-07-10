import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

export default function DialogButtonsAction({
	FORM_ID,
	handleClose,
	isSubmitting,
	fechar,
	salvar,
}: {
	FORM_ID: string;
	handleClose: () => void;
	isSubmitting: boolean;
	fechar?: boolean;
	salvar?: boolean;
}) {
	return (
		<>
			{fechar && (
				<Button
					onClick={handleClose}
					disabled={isSubmitting}
					variant="outlined"
				>
					Fechar
				</Button>
			)}

			{salvar && (
				<LoadingButton
					type="submit"
					form={FORM_ID}
					variant="contained"
					loading={isSubmitting}
					startIcon={<SaveIcon />}
				>
					Salvar
				</LoadingButton>
			)}
		</>
	);
}
