import axios, {
	type AxiosInstance,
	type AxiosRequestConfig,
	type InternalAxiosRequestConfig,
} from "axios";
import { clearUser } from "@/Lib/UserCache";
import { clearSessionCookieAction } from "./Session";
import type { ApiResponse, ApiError } from "@/Types/Api";

// ─── Instância base ───────────────────────────────────────────────────────────

export const http: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true, // envia cookies jwt_token e jwt_refresh automaticamente
});

const refreshHttp: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

// ─── Fila de retry durante refresh ───────────────────────────────────────────

type QueueItem = {
	resolve: () => void;
	reject: (err: unknown) => void;
};

let isRefreshing = false;
let failedQueue: QueueItem[] = [];

function processQueue(error: unknown): void {
	failedQueue.forEach((item) => {
		if (error) {
			item.reject(error);
		} else {
			item.resolve();
		}
	});
	failedQueue = [];
}

function redirectToLogin(): void {
	if (typeof window === "undefined") return;
	if (window.location.pathname === "/login") return;
	window.location.replace("/login");
}

async function requestRefreshByCookie(): Promise<void> {
	await refreshHttp.post<ApiResponse<{ refreshed: true }>>("/auth/refresh");
}

// ─── Interceptor de REQUEST ──────────────────────────────────────────────────
// A autenticação é cookie-only: o navegador envia jwt_token/jwt_refresh via
// withCredentials, sem expor JWT para o JavaScript.

http.interceptors.request.use(
	async (config: InternalAxiosRequestConfig) => {
		return config;
	},
	(error) => Promise.reject(error),
);

// ─── Interceptor de RESPONSE — normaliza + refresh automático ─────────────────

http.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config as AxiosRequestConfig & {
			_retry?: boolean;
		};

		// Rotas de autenticação nunca devem disparar refresh — retorna o erro real do backend
		const isAuthRoute = /\/auth\/(login|register|refresh|logout)/.test(
			originalRequest.url ?? "",
		);
		const isLoginPage =
			typeof window !== "undefined" &&
			(window.location.pathname === "/login" ||
				window.location.pathname === "/logout");
		const isLoginBootstrapRequest =
			isLoginPage && /\/auth\/me(?:\?|$)/.test(originalRequest.url ?? "");

		// Apenas 401 indica token ausente, expirado ou inválido.
		// 403 é autorização/permissão e não deve disparar refresh + retry.
		const isAuthError = error.response?.status === 401;

		if (
			!isAuthError ||
			originalRequest._retry ||
			isAuthRoute ||
			isLoginBootstrapRequest
		) {
			return Promise.reject(normalizeError(error));
		}

		if (isRefreshing) {
			return new Promise<void>((resolve, reject) => {
				failedQueue.push({ resolve, reject });
			})
				.then(() => http(originalRequest))
				.catch((err) => Promise.reject(normalizeError(err)));
		}

		originalRequest._retry = true;
		isRefreshing = true;

		try {
			await requestRefreshByCookie();
			processQueue(null);
			return http(originalRequest);
		} catch (refreshError) {
			clearUser();
			clearSessionCookieAction();
			processQueue(refreshError);
			redirectToLogin();
			return Promise.reject(normalizeError(refreshError));
		} finally {
			isRefreshing = false;
		}
	},
);

// ─── Normalizador de erro ─────────────────────────────────────────────────────

function normalizeError(error: unknown): ApiError {
	if (axios.isAxiosError(error) && error.response) {
		const data = error.response.data as Partial<ApiError>;
		return {
			status: error.response.status,
			success: false,
			message: data.message ?? error.message ?? "Erro desconhecido",
			errors: data.errors,
			requestId: data.requestId,
		};
	}

	if (error instanceof Error) {
		if (error.message === "Network Error") {
			return {
				status: 0,
				success: false,
				message:
					"Erro em acesso o servidor. Verifique sua conexão ou tente novamente mais tarde.",
			};
		}

		return {
			status: 0,
			success: false,
			message: error.message,
		};
	}

	return {
		status: 0,
		success: false,
		message: error instanceof Error ? error.message : "Erro de rede",
	};
}

// ─── Helper tipado: extrai `response` do envelope ────────────────────────────

export async function apiGet<T>(
	url: string,
	params?: Record<string, unknown>,
): Promise<T> {
	const res = await http.get<ApiResponse<T>>(url, { params });
	return res.data.response as T;
}

export async function apiPost<T>(url: string, body?: unknown): Promise<T> {
	const res = await http.post<ApiResponse<T>>(url, body);
	return res.data.response as T;
}

export async function apiPut<T>(url: string, body?: unknown): Promise<T> {
	const res = await http.put<ApiResponse<T>>(url, body);
	return res.data.response as T;
}

export async function apiPatch<T>(url: string, body?: unknown): Promise<T> {
	const res = await http.patch<ApiResponse<T>>(url, body);
	return res.data.response as T;
}

export async function apiDelete<T>(url: string): Promise<T> {
	const res = await http.delete<ApiResponse<T>>(url);
	return res.data.response as T;
}
