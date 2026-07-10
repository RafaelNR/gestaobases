import type {
	RequerimentoFormValues,
	TipoRequerimento,
} from "@/Types/Requerimento";
import type { CartItem } from "./RequerimentoPage";

const STORAGE_PREFIX = "pedidos:requerimento";
const STORAGE_VERSION = 1;

export type RequerimentoLocalDraft = {
	version: number;
	values: RequerimentoFormValues;
	cart: CartItem[];
	updatedAt: string;
};

export function getRequerimentoLocalDraftKey(
	tipo: TipoRequerimento,
	userId: string,
) {
	return `${STORAGE_PREFIX}:${userId}:${tipo}`;
}

export function loadRequerimentoLocalDraft(
	key: string,
): RequerimentoLocalDraft | null {
	if (typeof window === "undefined") return null;

	try {
		const rawDraft = window.localStorage.getItem(key);
		if (!rawDraft) return null;

		const draft = JSON.parse(rawDraft) as Partial<RequerimentoLocalDraft>;
		if (draft.version !== STORAGE_VERSION || !draft.values || !draft.cart) {
			return null;
		}

		return draft as RequerimentoLocalDraft;
	} catch {
		return null;
	}
}

export function saveRequerimentoLocalDraft(
	key: string,
	values: RequerimentoFormValues,
	cart: CartItem[],
) {
	if (typeof window === "undefined") return;

	try {
		const draft: RequerimentoLocalDraft = {
			version: STORAGE_VERSION,
			values,
			cart,
			updatedAt: new Date().toISOString(),
		};

		window.localStorage.setItem(key, JSON.stringify(draft));
	} catch {
		// Ignora falhas de storage para não bloquear o preenchimento do formulário.
	}
}

export function removeRequerimentoLocalDraft(key: string) {
	if (typeof window === "undefined") return;

	try {
		window.localStorage.removeItem(key);
	} catch {
		// Ignora falhas de storage para não bloquear o fluxo de envio.
	}
}
