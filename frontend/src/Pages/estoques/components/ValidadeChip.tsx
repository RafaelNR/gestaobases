import type { EstoqueLote } from "@/Types/Estoque";
import ChipStatusValidade, {
	validadeOptions,
} from "@/Components/Chip/ChipStatusValidade";

export { validadeOptions };

export default function ValidadeChip({ lote }: { lote: EstoqueLote }) {
	return <ChipStatusValidade status={lote.status} sx={{ width: 150 }} />;
}
