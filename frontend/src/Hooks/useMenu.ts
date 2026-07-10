import { useContext } from "react";
import { MenuContext } from "@/Contexts/MenuContext";

export default function useMenu() {
	return useContext(MenuContext);
}
