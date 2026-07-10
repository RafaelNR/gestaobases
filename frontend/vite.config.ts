import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { reactRouter } from "@react-router/dev/vite";
import path from "path";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	optimizeDeps: {
		include: [
			"@mui/icons-material",
			"@mui/material/Tooltip",
			"@mui/material",
			"@emotion/react",
			"@emotion/styled",
		],
	},
	server: {
		// this ensures that the browser opens upon server start
		open: true,
		// this sets a default port to 3000
		port: 3000,
		https: {
			key: fs.readFileSync(".cert/key.pem"),
			cert: fs.readFileSync(".cert/cert.pem"),
		},
	},

	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@/Components": path.resolve(__dirname, "./src/Components"),
			"@/Contexts": path.resolve(__dirname, "./src/Contexts"),
		},
	},
});
