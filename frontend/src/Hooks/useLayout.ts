import { useContext } from "react";
import { LayoutContext } from "@/Contexts/LayoutContext";

export default function useLayout() {
	return useContext(LayoutContext);
}
