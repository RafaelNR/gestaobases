declare namespace NodeJS {
	interface ProcessEnv {
		// 🔐 Backend
		NEXT_PUBLIC_EXTERNAL_API_URL: string;
		// 🔑 Auth
		JWT_SECRET: string;

		// 🌐 Next público (OBRIGATORIAMENTE começa com NEXT_PUBLIC_)
		NEXT_PUBLIC_API_URL: string;

		// Ambiente
		NODE_ENV: "development" | "production" | "test";
	}
}
