import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// ─── Event emitter (nível de módulo, fora do React) ───────────────────────────
// Permite disparar snackbar de qualquer lugar: mutations, interceptors, loaders.

type SnackEvent = { type: "success" | "error"; message: string };
type Listener = (e: SnackEvent) => void;

const _listeners = new Set<Listener>();

function emit(e: SnackEvent) {
	_listeners.forEach((l) => l(e));
}

export function success(message: string) {
	emit({ type: "success", message });
}

export function error(message: string) {
	emit({ type: "error", message });
}

// ─── Hook (para componentes que lêem o estado de UI) ─────────────────────────
// CustomizedSnackbars usa este hook para renderizar o Snackbar MUI.
// Demais componentes usam para disparar mensagens (handleSnackBar, navigateSnackBar).

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useSnackBar() {
	const navigate = useNavigate();
	const [openSnackBar, setOpenSnackBar] = useState(false);
	const [message, setMessage] = useState<string | null>(null);
	const [severity, setSeverity] = useState<"success" | "error">("success");

	// Escuta eventos emitidos fora do React (mutations, interceptors)
	useEffect(() => {
		const listener: Listener = ({ type, message: msg }) => {
			setSeverity(type);
			setMessage(msg);
			setOpenSnackBar(true);
		};
		_listeners.add(listener);
		return () => {
			_listeners.delete(listener);
		};
	}, []);

	const handleSnackBar = useCallback(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		({ type, message: msg }: { type: "success" | "error"; message: any }) => {
			if (msg?.message) setMessage(msg.message);
			else setMessage(typeof msg === "string" ? msg : null);

			setSeverity(type);
			setOpenSnackBar(true);
			return;
		},
		[],
	);

	const handleClose = useCallback(() => {
		setOpenSnackBar(false);
		setMessage(null);
	}, []);

	const navigateSnackBar = useCallback(
		(
			path: string,
			{
				type,
				message: msg,
			}: { type: "success" | "error"; message: string; error?: string },
		) => {
			navigate(path, { replace: true, state: { type, message: msg } });
		},
		[navigate],
	);

	return {
		openSnackBar,
		setOpenSnackBar,
		severity,
		message,
		handleSnackBar,
		handleClose,
		success,
		error,
		navigateSnackBar,
	};
}

// Expõe success/error como métodos estáticos do hook
// → import snackBar from "@/Hooks/useSnackBar"; snackBar.error("msg");
// → const { handleSnackBar } = useSnackBar(); (dentro de componente)
const snackBar = Object.assign(useSnackBar, { success, error });
export default snackBar;
