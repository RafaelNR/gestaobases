/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_ENCRYPT_KEY: string;
	readonly VITE_MODE: string;
	readonly VITE_URL: string;
	readonly VITE_API_BACKEND_HTTP_URL: string;
	readonly VITE_API_BACKEND_HTTPS_URL: string;
	readonly VITE_VERSION: string;
	readonly VITE_RECAPTCHA_CLIENTE: string;
	readonly VITE_RECAPTCHA_SERVER: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
