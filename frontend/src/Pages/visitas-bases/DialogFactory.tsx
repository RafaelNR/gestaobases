import useDialog from "@/Hooks/useDialog";
import DialogCreate from "./components/DailogCreated";
import DialogUpdate from "./components/DialogEdit";
import DialogView from "./components/DialogEdit";

export function DialogFactory() {
	const { modal } = useDialog();

	switch (modal) {
		case "created":
			return <DialogCreate />;
		case "updated":
			return <DialogUpdate />;
		case "view":
			return <DialogView />;

		default:
			return null;
	}
}
