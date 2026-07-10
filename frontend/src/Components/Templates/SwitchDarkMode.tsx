import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import useTheme from "@/Hooks/useTheme";

const ThemeSwitch = styled(Switch)(({ theme }) => ({
	width: 58,
	height: 32,
	padding: 6,
	"& .MuiSwitch-switchBase": {
		margin: 1,
		padding: 0,
		transform: "translateX(5px)",
		"&.Mui-checked": {
			color: "#fff",
			transform: "translateX(25px)",
			"& .MuiSwitch-thumb": {
				backgroundColor: theme.palette.primary.main,
			},
			"& .MuiSwitch-thumb:before": {
				backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
					"#fff",
				)}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
			},
			"& + .MuiSwitch-track": {
				opacity: 1,
				backgroundColor: theme.palette.primary.main,
			},
		},
	},
	"& .MuiSwitch-thumb": {
		backgroundColor: theme.palette.secondary.main,
		width: 30,
		height: 30,
		// boxShadow: "0 4px 12px rgba(0,0,0,0.28)",
		"&::before": {
			content: "''",
			position: "absolute",
			width: "100%",
			height: "100%",
			left: 0,
			top: 0,
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
				"#fff",
			)}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139z"/></svg>')`,
		},
	},
	"& .MuiSwitch-track": {
		opacity: 1,
		backgroundColor: theme.palette.secondary.main,
		borderRadius: 999,
	},
}));

export default function SwitchDarkMode() {
	const { toggleDarkMode, darkMode } = useTheme();

	return (
		<ThemeSwitch
			checked={darkMode}
			onChange={toggleDarkMode}
			inputProps={{ "aria-label": "Alternar tema claro e escuro" }}
		/>
	);
}
