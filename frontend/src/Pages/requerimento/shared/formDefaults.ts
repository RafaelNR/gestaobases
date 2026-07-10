import type {
	RequerimentoFormValues,
	TipoRequerimento,
} from "@/Types/Requerimento";
import type { UserMe } from "@/Types/Auth";

export function buildRequerimentoDefaultValues(
	tipo: TipoRequerimento,
	user?: UserMe | null,
): RequerimentoFormValues {
	return {
		obs: undefined,
		ambulancia: undefined,
		setor: user?.Setor.nome ?? "",
		base: user?.Base.nome ?? "",
		tipo,
	};
}
