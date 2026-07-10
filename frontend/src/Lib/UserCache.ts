import type { UserMe } from "@/Types/Auth";
import encryptStore from "../Lib/encryptStore";

const CACHE_KEY = import.meta.env.VITE_ENCRYPTION_CACHE_KEY as string;

export function saveUser(user: UserMe): void {
	if (typeof window === "undefined") return;
	try {
		encryptStore.setItem(CACHE_KEY, JSON.stringify(user));
	} catch {
		/* quota exceeded ou similar */
	}
}

export function loadUser(): UserMe | null {
	if (typeof window === "undefined") return null;
	try {
		const userAuth = encryptStore.getItem(CACHE_KEY);
		if (!userAuth) return null;
		return JSON.parse(userAuth) as UserMe;
	} catch {
		clearUser();
		return null;
	}
}

export function clearUser(): void {
	if (typeof window !== "undefined") encryptStore.removeItem(CACHE_KEY);
}
