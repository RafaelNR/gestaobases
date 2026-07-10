import { ButtonProps } from "@mui/material/";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";

type IProps = {
	loading: boolean;
	children: React.ReactNode | string;
} & ButtonProps &
	LoadingButtonProps;

export default function ButtonLoading({
	loading = false,
	children,
	...rest
}: IProps) {
	return (
		<LoadingButton
			variant={loading ? "outlined" : "contained"}
			disabled={loading}
			loading={loading}
			{...rest}
		>
			{children}
		</LoadingButton>
	);
}
