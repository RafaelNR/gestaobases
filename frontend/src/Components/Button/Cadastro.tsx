import {
	Stack,
	Button,
	Link,
	Theme,
	SxProps,
	ButtonProps,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { SvgIconComponent } from "@mui/icons-material";

type IProps = {
	name: string;
	path?: string;
	Icon?: SvgIconComponent;
} & ButtonProps;

export default function AddButton({ name, Icon = AddIcon, ...rest }: IProps) {
	return (
		<Stack direction="row" spacing={2}>
			<Button
				variant="contained"
				color="primary"
				component={Link}
				startIcon={<Icon />}
				{...rest}
			>
				{name}
			</Button>
		</Stack>
	);
}

export function AddButtonDialog({ name, Icon = AddIcon, ...rest }: IProps) {
	return (
		<Stack direction="row" spacing={2}>
			<Button
				variant="contained"
				color="primary"
				component={Link}
				startIcon={<Icon />}
				{...rest}
			>
				{name}
			</Button>
		</Stack>
	);
}
