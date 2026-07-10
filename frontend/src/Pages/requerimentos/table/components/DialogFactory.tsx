import useDialog from "@/Hooks/useDialog";
import DialogSend from "./DialogSend";
import DialogDelete from "./DialogDelete";
// import { DialogSendCME } from "./DialogSendCME";
// import { DialogReceive } from "./DialogReceive";

export function DialogFactory() {
	const { modal } = useDialog();

	switch (modal) {
		case "send-confirm":
			return <DialogSend />;
		case "delete-confirm":
			return <DialogDelete />;
		// case "send-cme":
		// return <DialogSendCME tipo={tipo as TipoRequerimento} />;
		// case "receive-confirm":
		// 	return <DialogReceive tipo={tipo as TipoRequerimento} />;

		default:
			return null;
	}
}
