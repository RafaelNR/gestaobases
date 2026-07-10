import type { Dayjs } from "dayjs";
import type { FiltroRequerimentos } from "@/Types/Requerimento";

type FilterValue = string | number | Dayjs | null | undefined;

export type RequerimentoFiltroFormValues = {
	[K in keyof FiltroRequerimentos]?: FilterValue;
};

function isDayjsValue(value: FilterValue): value is Dayjs {
	return Boolean(
		value &&
			typeof value === "object" &&
			"format" in value &&
			typeof value.format === "function",
	);
}

function normalizeFilterValue(value: FilterValue): string | number | undefined {
	if (value === undefined || value === null || value === "") return undefined;
	if (isDayjsValue(value)) return value.format("YYYY-MM-DD");

	return value;
}

export function cleanRequerimentoFiltro(
	filtro: RequerimentoFiltroFormValues,
): FiltroRequerimentos {
	return Object.fromEntries(
		Object.entries(filtro)
			.map(([key, value]) => [key, normalizeFilterValue(value)])
			.filter(([, value]) => value !== undefined),
	) as FiltroRequerimentos;
}

export function hasRequerimentoFiltro(filtro: FiltroRequerimentos): boolean {
	return Object.values(filtro).some((value) => value !== undefined && value !== "");
}
