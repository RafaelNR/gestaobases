import assert from "node:assert/strict";

import {
	getActiveRequerimentoItems,
	getRequerimentoItemsSummary,
} from "./PDF.helpers.ts";
import type { RequerimentoItemEntry } from "@/Types/Requerimento";

function makeItem(
	id: string,
	quantidade: number,
	ativo: boolean,
): RequerimentoItemEntry {
	return {
		id,
		requerimento: "requerimento-id",
		quantidade,
		user: "user-id",
		ativo,
		created_at: "2026-07-08",
		updated_at: "2026-07-08",
	};
}

const items = [
	makeItem("1", 2, true),
	makeItem("2", 5, false),
	makeItem("3", 4, true),
];

assert.deepEqual(
	getActiveRequerimentoItems(items).map((item) => item.id),
	["1", "3"],
);

assert.deepEqual(getRequerimentoItemsSummary(items), {
	activeItemsCount: 2,
	totalQuantity: 6,
});

assert.deepEqual(getRequerimentoItemsSummary(undefined), {
	activeItemsCount: 0,
	totalQuantity: 0,
});
