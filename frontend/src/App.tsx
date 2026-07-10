import { CssBaseline } from "@mui/material";

import Routes from "./Routes/";

//** PROVIDERS
import { MyThemeProvider } from "./Contexts/ThemeContext";
import { QueryProvider } from "@/Providers/QueryProvider";

function App() {
	return (
		<MyThemeProvider>
			<>
				<CssBaseline />
				<QueryProvider>
					<Routes />
				</QueryProvider>
			</>
		</MyThemeProvider>
	);
}

export default App;
