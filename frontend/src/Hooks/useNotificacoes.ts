import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { io, type Socket } from "socket.io-client";
import { notificacoesService } from "@/Service/Notificacoes.service";
import { useMe } from "@/Hooks/useAuth";
import snackBar from "@/Hooks/useSnackBar";
import type { Notificacao } from "@/Types/Notificacoes";

// ─── Query key ────────────────────────────────────────────────────────────────

export const notificacoesKeys = {
	all: ["notificacoes"] as const,
};

// ─── Socket singleton ─────────────────────────────────────────────────────────
// Uma única conexão para toda a sessão autenticada.
// Desconecta quando o usuário sai (user → null).

let _socket: Socket | null = null;

// ─── useNotificacoes ──────────────────────────────────────────────────────────

export default function useNotificacoes() {
	const queryClient = useQueryClient();
	const { data: user } = useMe();

	// ─── Query inicial ─────────────────────────────────────────────────────────
	const { data: notificacoes, isLoading, refetch } = useQuery({
		queryKey: notificacoesKeys.all,
		queryFn: () => notificacoesService.getNotificacoes(),
		enabled: !!user,
	});

	// ─── WebSocket ─────────────────────────────────────────────────────────────
	useEffect(() => {
		if (!user) {
			_socket?.disconnect();
			_socket = null;
			return;
		}

		if (_socket?.connected) return;

		const backendUrl =
			window.location.protocol === "https:"
				? import.meta.env.VITE_API_BACKEND_HTTPS_URL
				: import.meta.env.VITE_API_BACKEND_HTTP_URL;

		const socket = io(`${backendUrl}/notificacoes`, { withCredentials: true });
		_socket = socket;

		socket.on("notificacao.nova", (nova: Notificacao) => {
			queryClient.setQueryData<Notificacao[]>(
				notificacoesKeys.all,
				(prev) => (prev ? [nova, ...prev] : [nova]),
			);
		});

		// polling de fallback se o WS não conectar
		const poll = setInterval(() => {
			if (!socket.connected) {
				queryClient.invalidateQueries({ queryKey: notificacoesKeys.all });
			}
		}, 60_000);

		return () => clearInterval(poll);
	}, [user?.id, queryClient]);

	// ─── Computed ─────────────────────────────────────────────────────────────
	const totalNaoLidas = (notificacoes ?? []).filter((n) => !n.lida).length;
	const totalNaoRemovidas = (notificacoes ?? []).filter((n) => !n.removida).length;

	// ─── Mutations com optimistic update ──────────────────────────────────────

	const { mutateAsync: marcarComoLida } = useMutation({
		mutationFn: (uuid: string) => notificacoesService.marcarComoLida(uuid),
		onMutate: (uuid) => {
			queryClient.setQueryData<Notificacao[]>(notificacoesKeys.all, (prev) =>
				prev?.map((n) => (n.uuid === uuid ? { ...n, lida: true } : n)),
			);
		},
		onError: () => snackBar.error("Erro ao marcar notificação"),
	});

	const { mutateAsync: marcarTodasComoLidas } = useMutation({
		mutationFn: () => notificacoesService.marcarTodasComoLidas(),
		onMutate: () => {
			queryClient.setQueryData<Notificacao[]>(notificacoesKeys.all, (prev) =>
				prev?.map((n) => ({ ...n, lida: true })),
			);
		},
		onError: () => snackBar.error("Erro ao marcar notificações"),
	});

	const { mutateAsync: remover } = useMutation({
		mutationFn: (uuid: string) => notificacoesService.remover(uuid),
		onMutate: (uuid) => {
			queryClient.setQueryData<Notificacao[]>(notificacoesKeys.all, (prev) =>
				prev?.filter((n) => n.uuid !== uuid),
			);
		},
		onError: () => snackBar.error("Erro ao remover notificação"),
	});

	const { mutateAsync: removerAllMyUser } = useMutation({
		mutationFn: () => notificacoesService.removerAllMyUser(),
		onMutate: () => {
			queryClient.setQueryData<Notificacao[]>(notificacoesKeys.all, () => []);
		},
		onError: () => snackBar.error("Erro ao remover notificações"),
	});

	return {
		notificacoes,
		totalNaoLidas,
		totalNaoRemovidas,
		loading: isLoading,
		getNotificacoes: refetch,
		marcarComoLida,
		marcarTodasComoLidas,
		remover,
		removerAllMyUser,
	};
}
