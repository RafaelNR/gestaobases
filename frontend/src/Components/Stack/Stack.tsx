import { Stack, Typography } from "@mui/material";

const MyStack = ({
	chave,
	value,
}: {
	chave: string;
	value?: string | number | JSX.Element | undefined | null;
}) => {
	return (
		<>
			{value || value === 0 ? (
				<Stack>
					<Typography variant="h6">{chave}</Typography>
					<Typography variant="subtitle1">{value}</Typography>
				</Stack>
			) : null}
		</>
	);
};
export default MyStack;
