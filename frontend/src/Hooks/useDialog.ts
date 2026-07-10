import { useContext } from "react";
import { DialogContext } from "@/Contexts/DialogContext";

export default function useDialog() {
	return useContext(DialogContext);
}
