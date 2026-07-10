//* Component
import Container from "./components/Box";
import Form from "./components/Form";
import Email from "./components/Email";

//** CONTEXTS
import useRegistro from "@/Hooks/useRegistro";

export default function Cards() {
	const { success } = useRegistro();

	return <Container>{!success ? <Form /> : <Email />}</Container>;
}
