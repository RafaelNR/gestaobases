// Utilitário de cookies — funções puras, sem React hooks.
// Pode ser chamado fora de componentes (interceptors, loaders, etc).

export function getCookie(name: string): string | null {
	if (typeof document === "undefined") return null;
	const match = document.cookie
		.split("; ")
		.find((row) => row.startsWith(name + "="));
	return match ? decodeURIComponent(match.split("=")[1]) : null;
}

export function setCookie(
	name: string,
	value: string,
	options?: {
		days?: number;
		path?: string;
		secure?: boolean;
		sameSite?: "Lax" | "Strict" | "None";
	},
): void {
	if (typeof document === "undefined") return;
	let cookie = `${name}=${encodeURIComponent(value)}`;

	if (options?.days) {
		const expires = new Date();
		expires.setDate(expires.getDate() + options.days);
		cookie += `; expires=${expires.toUTCString()}`;
	}

	cookie += `; path=${options?.path ?? "/"}`;
	if (options?.secure) cookie += "; Secure";
	if (options?.sameSite) cookie += `; SameSite=${options.sameSite}`;

	document.cookie = cookie;
}

export function removeCookie(name: string): void {
	if (typeof document === "undefined") return;
	document.cookie = `${name}=; Max-Age=0; path=/`;
}

// Compatibilidade com código que chama cookies() como fábrica
export default function cookies() {
	return { get: getCookie, set: setCookie, remove: removeCookie };
}
