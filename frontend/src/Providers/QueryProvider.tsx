import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";

// Singleton para invalidação manual fora de componentes (ex: após logout)
let _queryClient: QueryClient | null = null;

export function getQueryClient(): QueryClient {
	if (!_queryClient) {
		_queryClient = createQueryClient();
	}
	return _queryClient;
}

function createQueryClient(): QueryClient {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 60 * 1000,
				retry: 0,
				refetchOnWindowFocus: false,
			},
			mutations: {
				retry: 0,
			},
		},
	});
}

interface QueryProviderProps {
	children: ReactNode;
}

export function QueryProvider({ children }: QueryProviderProps) {
	// useState garante que cada sessão SSR tenha seu próprio client
	const [queryClient] = useState(() => {
		const client = createQueryClient();
		_queryClient = client;
		return client;
	});

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
}
