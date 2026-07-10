import { apiDelete, apiGet, apiPut } from "@/Lib/HttpClient";
import type { Notificacao } from "@/Types/Notificacoes";

const BASE = "/notificacoes";

export const notificacoesService = {
	getNotificacoes: () => apiGet<Notificacao[]>(BASE),

	getUnreadCount: () => apiGet<{ total: number }>(`${BASE}/unread/count`),

	marcarComoLida: (uuid: string) =>
		apiPut<{ success: boolean }>(`${BASE}/${uuid}/lida`, {}),

	marcarTodasComoLidas: () =>
		apiPut<{ success: boolean }>(`${BASE}/lida/todas`, {}),

	remover: (uuid: string) =>
		apiDelete<{ success: boolean }>(`${BASE}/${uuid}`),

	removerAllMyUser: () =>
		apiDelete<{ success: boolean }>(`${BASE}/remover/all/my_user`),
};
