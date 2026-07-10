import { useCallback } from "react";
import encryptStore from "../Lib/encryptStore";

export default function useLocalStore() {
	const getData = useCallback((item: string) => {
		if (item) {
			const value = localStorage.getItem(item);
			return value;
		}
		return "";
	}, []);

	const getDataJson = useCallback((item: string) => {
		if (item) {
			const value = localStorage.getItem(item);
			return value ? JSON.parse(value) : "";
		}
		return "";
	}, []);

	const setDataJson = useCallback((item: string, Dados: string[]) => {
		if (Dados) localStorage.setItem(item, JSON.stringify(Dados));
	}, []);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const setData = useCallback((item: string, Dados: string) => {
		if (Dados) localStorage.setItem(item, Dados);
	}, []);

	const getDataEncrypt = useCallback((item: string) => {
		try {
			return encryptStore.getItem(item);
		} catch (error) {
			console.log(error);
		}
	}, []);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const setDataEncrypt = useCallback((item: string, Dados: any) => {
		if (Dados) encryptStore.setItem(item, Dados);
	}, []);

	const removeData = useCallback((item: string) => {
		localStorage.removeItem(item);
	}, []);

	return {
		getData,
		getDataJson,
		getDataEncrypt,
		setData,
		setDataJson,
		setDataEncrypt,
		removeData,
	};
}
