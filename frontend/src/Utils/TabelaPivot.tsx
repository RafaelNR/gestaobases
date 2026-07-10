import {
	RelatorioManifestacoes,
	RelatorioNotasChatBot,
} from "@/Types/Relatorios";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";

dayjs.locale("pt-br");

export function montarTabelaPivot<
	TTipo extends string,
	T extends RelatorioManifestacoes,
>(data: T[] | undefined, tipoSelecionado: TTipo) {
	if (!data) {
		return {
			meses: [],
			linhas: [],
		};
	}

	const filtrado = data.filter((item) => item.tipo === tipoSelecionado);

	const mesesNumericos = [...new Set(filtrado.map((i) => i.mes))].sort(
		(a, b) => a - b,
	);

	const mesesNomeados = mesesNumericos.map((mes) =>
		dayjs()
			.month(mes - 1)
			.format("MMMM"),
	);

	const valores = [...new Set(filtrado.map((i) => i.valor ?? "Não Informado"))];

	const linhas = valores.map((valor) => {
		const linha: Record<string, number | string> = {
			valor,
		};

		mesesNumericos.forEach((mes, index) => {
			const nomeMes = mesesNomeados[index];

			const encontrado = filtrado.find(
				(i) => (i.valor ?? "Não Informado") === valor && i.mes === mes,
			);

			linha[nomeMes] = encontrado?.total ?? 0;
		});

		const total = filtrado
			.filter((i) => (i.valor ?? "Não Informado") === valor)
			.reduce((acc, curr) => acc + (curr.total ?? 0), 0);

		linha["total"] = total;
		return linha;
	});

	return {
		meses: mesesNomeados,
		linhas,
		total: linhas.reduce((acc, curr) => acc + (curr.total as number), 0),
	};
}

type PivotResult = {
	meses: string[];
	linhas: Record<string, number>[];
	total: number;
};

export function consolidarTotaisPorMes(data: PivotResult) {
	const totaisPorMes: Record<string, number> = {};

	// inicializa meses com 0
	data.meses.forEach((mes) => {
		totaisPorMes[mes] = 0;
	});

	// soma valores das colunas
	data.linhas.forEach((linha) => {
		data.meses.forEach((mes) => {
			totaisPorMes[mes] += linha[mes] ?? 0;
		});
	});

	return totaisPorMes;
}

interface FormattedItem {
	unidade: string;
	total: number | null;
	meses: {
		mes: number;
		media: number | null;
	}[];
}

export function montarTabelaPivotNotaChatBot(
	dados: RelatorioNotasChatBot[],
	tipo: "atendimento" | "local" | "ocorrencias" | "media_geral",
) {
	const mapa = new Map<string, FormattedItem>();

	for (const item of dados) {
		const mediaBruta =
			tipo === "atendimento"
				? item.media_nota_atendimento
				: tipo === "local"
					? item.media_nota_local
					: tipo === "media_geral"
						? item.media_nota_atendimento && item.media_nota_local
							? (item.media_nota_atendimento + item.media_nota_local) / 2
							: null
						: item.ocorrencias;

		const media = mediaBruta !== null ? Number(mediaBruta) : null;

		if (!mapa.has(item.unidade)) {
			mapa.set(item.unidade, {
				unidade: item.unidade,
				meses: [],
				total: 0,
			});
		}

		mapa.get(item.unidade)!.meses.push({
			mes: item.mes,
			media,
		});
	}

	// ordenar meses
	for (const unidade of mapa.values()) {
		const valor = unidade.meses.reduce(
			(acc, mes) => {
				if (mes.media) {
					acc.media += mes.media || 0;
					acc.valor++;
				}

				return acc;
			},
			{ media: 0, valor: 0 },
		);

		if (tipo === "ocorrencias") {
			unidade.total = valor.media; // para ocorrências, a "média" é na verdade a soma total
		} else {
			unidade.total =
				valor.valor > 0 ? Number((valor.media / valor.valor).toFixed(2)) : null;
		}

		unidade.meses.sort((a, b) => a.mes - b.mes);
	}

	const data = Array.from(mapa.values());

	data.sort((a, b) => {
		if (a.total === null) return 1;
		if (b.total === null) return -1;
		return b.total - a.total;
	});

	return data;
}

export function mesesUnicos(dados: RelatorioNotasChatBot[]) {
	const mesesNumericos = [...new Set(dados.map((i) => i.mes))].sort(
		(a, b) => a - b,
	);

	const mesesNomeados = mesesNumericos.map((mes) =>
		dayjs()
			.month(mes - 1)
			.format("MMMM"),
	);
	return mesesNomeados;
}
