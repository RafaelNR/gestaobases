import { useState } from "react";
import { loginService } from "@/Service/Login.service";
import useLocalStore from "@/Hooks/useLocalStore";
import type { ILogin } from "@/Types/Login";

export default function useLogin() {
	const { setDataEncrypt } = useLocalStore();
	const [values] = useState<ILogin>({
		cpf: "",
		password: "",
		recaptcha: undefined,
		lembrar: true,
		showPassword: false,
	});
	const [alerta, setAlerta] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const loginSubmit = async (dados: ILogin): Promise<true | undefined> => {
		try {
			setLoading(true);

			const response = await loginService.login(dados);

			if (response) {
				setAlerta(null);
				setDataEncrypt("user", response.user);
				setSuccess(true);
				return true;
			}

			throw new Error("Erro em efetuar o login");
		} catch (error) {
			setAlerta(
				error instanceof Error
					? error.message
					: "Erro em realizar login, atualize a página se persistir.",
			);
		} finally {
			setLoading(false);
		}
	};

	return { values, alerta, setAlerta, loading, success, loginSubmit };
}
