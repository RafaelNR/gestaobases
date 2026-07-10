//** PROVIDER

//* Component
import Recuperar from "./Recuperar";
import NovaSenha from "./NovaSenha";
import { useQuery } from "@/Hooks/useQuery";
import { Container } from "@mui/material";

export default function Login() {
	const { querys } = useQuery();

	return (
		<Container sx={{ width: "100%", height: "100%" }}>
			{/* {querys.get("token") ? (
				<NovaSenha token={querys.get("token") as string} />
			) : (
				<Recuperar />
			)} */}
		</Container>
	);
}
