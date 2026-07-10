import { createContext, JSX, useState } from "react";
import {
	createTheme,
	responsiveFontSizes,
	ThemeProvider,
	ThemeOptions,
} from "@mui/material/styles";
import PropTypes from "prop-types";
import darkScrollbar from "@mui/material/darkScrollbar";

import "@fontsource/inter/400.css"; // Regular
import "@fontsource/inter/700.css"; // Bold

import useLocalStore from "@/Hooks/useLocalStore";

interface ITheme {
	darkMode: boolean;
	toggleDarkMode: () => void;
}

const ThemeContext = createContext({} as ITheme);

const MyThemeProvider = ({ children }: { children: JSX.Element }) => {
	const { getData, setData, removeData } = useLocalStore();
	const [darkMode, setDarkMode] = useState(getData("darkMode") ? true : false);

	const toggleDarkMode = () => {
		if (darkMode) {
			setDarkMode(false);
			return removeData("darkMode");
		}
		setDarkMode(true);
		setData("darkMode", "true");
	};

	let MyTheme = createTheme({
		palette: {
			mode: darkMode ? "dark" : "light",
			primary: {
				main: "#ff781d",
			},
			secondary: {
				main: "#0B132B",
			},
			text: {
				main: darkMode ? "#fff" : "#363435",
				common: darkMode ? "#fff" : "#363435",
				appBar: "#ffff",
				primary: darkMode ? "#fff" : "#363435",
				secondary: darkMode ? "#fff" : "#0B132B",
			},
			background: {
				main: darkMode ? "#0d1117" : "#f4f6f9",
				appBar: darkMode ? "#1a1f3a" : "#ffffff",
				drawer: "#0B132B",
				collapseMenu: darkMode ? "#0B132B" : "#0B132B",
				paper: darkMode ? "#363435" : "#f2f2f2",
				tab: darkMode ? "#363435" : "white",
				tabList: darkMode ? "#404040" : "#f2f2f2",
				box: darkMode ? "#363435" : "#dbdbdb",
				elogio: "#6ab04c",
				sugestão: "#00a8ff",
				sugestao: "#00a8ff",
				solicitação: "#487eb0",
				solicitacao: "#487eb0",
				reclamação: "#ff781d",
				reclamacao: "#ff781d",
				denúncia: "#d32f2f",
				denuncia: "#d32f2f",
				recebida: "#8c7ae6",
				analise: "#8E24AA",
				respondida: "#124170",
				finalizada: "#44bd32",
				cancelada: "#d32f2f",
				reaberta: "#487eb0",
				pendente: "#ff781d",
				atrasada: "#ffb703",
				resposta: "#124170",
			},
			border: {
				tabList: darkMode
					? "1px solid rgba(255, 255, 255, 0.12)"
					: "1px solid #c9c9c9",
			},
		},
		typography: {
			fontFamily: "Inter, Arial, sans-serif",
			allVariants: {
				fontFamily: "Inter, Arial, sans-serif",
			},
			h1: {
				fontWeight: 600,
			},
			h2: {
				fontWeight: 600,
			},
			h3: {
				fontWeight: 600,
			},
			h4: {
				fontWeight: 600,
			},
			h5: {
				fontWeight: 600,
			},
			h6: {
				fontWeight: 600,
			},
		},
		components: {
			"MuiTypography-h6": {
				styleOverrides: {
					fontWeight: "bold",
				},
			},
			MuiPaper: {
				styleOverrides: {
					root: {
						backgroundColor: darkMode ? "#363435" : "white",
					},
				},
			},
			MuiInputLabel: {
				styleOverrides: {
					root: {
						"&.Mui-focused": {
							color: darkMode ? `#D7D5D6` : `#ff781d`,
						},
					},
					shrink: {
						"&.Mui-focused": {
							color: darkMode ? `#D7D5D6` : `#ff781d`,
						},
					},
				},
			},
			MuiOutlinedInput: {
				styleOverrides: {
					root: {
						"&.Mui-focused": {
							"& .MuiOutlinedInput-notchedOutline": {
								border: darkMode ? `1px solid #D7D5D6` : `1px solid #ff781d`,
							},
							"& .MuiInputLabel-root": {
								color: "red",
								background: "red",
							},
							"& .MuiFormLabel-root": {
								color: "red",
							},
						},
					},
				},
			},
			MuiTab: {
				styleOverrides: {
					root: {
						"&.Mui-selected": {
							color: darkMode ? `#D7D5D6` : `#ff781d`,
						},
					},
				},
			},
			MuiCircularProgress: {
				styleOverrides: {
					root: {
						color: darkMode ? `#D7D5D6` : `#ff781d`,
					},
				},
			},
			MuiIcon: {
				styleOverrides: {
					root: {
						boxSizing: "content-box",
						padding: 3,
						fontSize: "1.125rem",
					},
				},
			},
			MuiCssBaseline: {
				styleOverrides: (themeParam) => ({
					body: themeParam.palette.mode === "dark" ? darkScrollbar() : null,
					"#root": {
						display: "flex",
						flexDirection: "column",
						height: "100vh",
						fontFamily: "Inter, Arial, sans-serif",
					},
					pre: {
						textWrapMode: "wrap",
					},
					a: {
						textDecoration: "none",
						color: "whitesmoke",
					},
					// "*::-webkit-scrollbar": {
					// 	width: "1em",
					// },
					// "*::-webkit-scrollbar-track": {
					// 	"-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
					// },
					// "*::-webkit-scrollbar-thumb": {
					// 	// borderBottomLeftRadius: 100,
					// 	// borderBottomRightRadius: 100,
					// 	backgroundColor: themeParam.palette.primary,
					// 	backgroundClip: "content-box",
					// },
					// "*::-webkit-outer-spin-button, *::-webkit-inner-spin-button": {
					// 	"-webkit-appearance": "none",
					// 	margin: 0,
					// },
					// "*[type=number]": {
					// 	"-moz-appearance": "textfield",
					// },
				}),
			},
		},
	} as ThemeOptions);

	MyTheme = responsiveFontSizes(MyTheme);

	return (
		<ThemeProvider theme={MyTheme}>
			<ThemeContext.Provider
				value={{
					darkMode,
					toggleDarkMode,
				}}
			>
				{children}
			</ThemeContext.Provider>
		</ThemeProvider>
	);
};

export { ThemeContext, MyThemeProvider };
