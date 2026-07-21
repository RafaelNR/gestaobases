import { useCallback } from "react";

//* COMPONENTS
import { CircularProgress, Paper } from "@mui/material";
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
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import MyFormProvider from "@/Components/Form/FormProvider";
import { UserMe } from "@/Types/Auth";
import { useUpdatePerfil } from "@/Hooks/useUsuarios";
import useSnackBar from "@/Hooks/useSnackBar";

export default function MyForm({ user }: { user: UserMe }) {
	const queryClient = useQueryClient();
	const { handleSnackBar } = useSnackBar();
	const { mutateAsync } = useUpdatePerfil();

	// const { data: usuario, isLoading } = useQuery({
	// 	queryKey: ["perfil"],
	// 	queryFn: () => getPerfil(uuid),
	// 	enabled: !!id,
	// });

	const methods = useForm<PerfilSchemaInput>({
		resolver: zodResolver(perfilSchema as any),
		values: {
			...user,
			password: "********",
		} as any,
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
			await mutateAsync(values);
		},
		//eslint-disable-next-line
		[],
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
		[],
	);

	return (
		<Paper>
			<MyFormProvider
				methods={methods}
				isSubmitting={isSubmitting}
				Form={<Form isSubmitting={isSubmitting} />}
				onSubmit={handleSubmit(onSubmitHandler, onError)}
			/>
		</Paper>
	);
}
