import { useCallback } from "react";

//* COMPONENTS
import { CircularProgress } from "@mui/material";
import Form from "./Form";

//* SCHEMAS
import { perfilSchema } from "@/Schemas/Usuarios.schemas";

//* SCHEMAS
import { PerfilSchemaInput } from "@/Types/Usuarios";

//* HOOKS
import { zodResolver } from "@hookform/resolvers/zod";
import {
	FormProvider,
	SubmitErrorHandler,
	SubmitHandler,
	useForm,
} from "react-hook-form";

//* CONTEXT
import useSnackBar from "@/Contexts/SnackBarContext";
import usePerfil from "@/Hooks/usePerfil";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import MyFormProvider from "@/Components/Form/FormProvider";

export default function MyForm({ uuid }: { uuid: string }) {
	const queryClient = useQueryClient();
	const { handleSnackBar } = useSnackBar();
	const { getPerfil, updatePerfil } = usePerfil();

	const { data: usuario, isLoading } = useQuery({
		queryKey: ["perfil"],
		queryFn: () => getPerfil(uuid),
		enabled: !!uuid,
	});

	const methods = useForm<PerfilSchemaInput>({
		resolver: zodResolver(perfilSchema as any),
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		values: usuario,
		resetOptions: {
			keepDirtyValues: true,
			keepErrors: true,
		},
	});

	const {
		handleSubmit,
		formState: { isSubmitting },
	} = methods;

	const onSubmitHandler: SubmitHandler<PerfilSchemaInput> = useCallback(
		async (values) => {
			await updatePerfilFn(values);
		},
		//eslint-disable-next-line
		[]
	);

	const onError: SubmitErrorHandler<PerfilSchemaInput> = useCallback(
		async (error) => {
			console.log(error);
			handleSnackBar({
				type: "error",
				message: "Algum valor do formulário está incorreto.",
			});
		},
		//eslint-disable-next-line
		[]
	);

	const { mutateAsync: updatePerfilFn } = useMutation({
		mutationFn: updatePerfil,
		onSuccess(data) {
			if (data) {
				queryClient.setQueryData([`perfil`], () => {
					return data;
				});
			}
		},
	});

	return (
		<MyFormProvider
			methods={methods}
			isSubmitting={isSubmitting}
			Form={<Form isSubmitting={isSubmitting} />}
			onSubmit={handleSubmit(onSubmitHandler, onError)}
		/>
	);
}
