import {
	createContext,
	useState,
	useContext,
	useCallback,
	ReactNode,
} from "react";
type IDialogContext = {
	open: boolean;
	selected: Record<string, any> | null | undefined;
	modal: string | null | undefined;
	id: number | string | null | undefined;
	handleClickOpenDialog: ({
		m,
		ID,
		s,
	}: {
		m: string | null | undefined;
		ID?: number | string | null | undefined;
		s?: Record<string, any> | null | undefined;
	}) => void;
	handleCloseDialog: () => void;
};

const DialogContext = createContext({} as IDialogContext);

const DialogProvider = ({ children }: { children: ReactNode }) => {
	const [open, setOpen] = useState<boolean>(false);
	const [modal, setModal] = useState<string | null | undefined>(null);
	const [id, setId] = useState<number | string | null | undefined>(null);
	const [selected, setSelected] = useState<
		Record<string, any> | null | undefined
	>(null);

	const handleClickOpenDialog = ({
		m = null,
		ID = null,
		s = null,
	}: {
		m: typeof modal;
		ID?: typeof id;
		s?: typeof selected;
	}) => {
		setOpen(true);
		setModal(m);
		setId(ID);
		setSelected(s);
	};

	const handleCloseDialog = useCallback(() => {
		setOpen(false);
		setModal(null);
		setSelected(null);
	}, []);

	return (
		<DialogContext.Provider
			value={{
				open,
				modal,
				id,
				selected,
				handleClickOpenDialog,
				handleCloseDialog,
			}}
		>
			{children}
		</DialogContext.Provider>
	);
};

export default function useDialog() {
	return useContext(DialogContext);
}

export { DialogContext, DialogProvider };
