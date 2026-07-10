import { removeCookie } from "./Cookies";

export function clearSessionCookieAction(): void {
	removeCookie(import.meta.env.VITE_SESSION_COOKIE as string);
	removeCookie(import.meta.env.VITE_JWT_TOKEN as string);
	removeCookie(import.meta.env.VITE_JWT_RT as string);
	removeCookie(import.meta.env.VITE_USER_COOKIE as string);
}
