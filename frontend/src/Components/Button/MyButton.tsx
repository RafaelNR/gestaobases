import Button, { ButtonProps } from "@mui/material/Button";
import Tootip from "@mui/material/Tooltip";

const MyButton = ({
	label = "",
	bgColor,
	href,
	children,
	...rest
}: Record<string, any> & { children: any } & ButtonProps) => {
	return (
		<Button
			aria-label={label}
			size="small"
			sx={{ backgroundColor: bgColor, border: "transparent" }}
			href={href}
			{...rest}
		>
			<Tootip title={label}>{children}</Tootip>
		</Button>
	);
};

export default MyButton;
