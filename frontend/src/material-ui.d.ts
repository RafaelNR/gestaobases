import { ThemeOptions } from "@mui/material";

declare module "@mui/material/styles" {
	interface Theme extends ThemeOptions {
		background: {
			tab:
				| unknown
				| Background<string | number>
				| NonNullable<Background<string | number> | undefined>[]
				| (string | (string & object))[]
				| undefined;
			tabList: string;
			main: string;
			paper: string;
			cardHeader: string;
			cardBody: string;
			tab: string;
			appBar: string;
			drawer: string;
			elogio: string;
			sugestão: string;
			sugestao: string;
			solicitação: string;
			solicitacao: string;
			reclamação: string;
			reclamacao: string;
			denúncia: string;
			denuncia: string;
			recebida: string;
			analise: string;
			respondida: string;
			finalizada: string;
			cancelada: string;
			reaberta: string;
			pendente: string;
			atrasada: string;
		};
		border: {
			tabList: string;
		};
		text: {
			main: string;
		};
	}

	interface TypeBackground {
		tab:
			| unknown
			| Background<string | number>
			| NonNullable<Background<string | number> | undefined>[]
			| (string | (string & object))[]
			| undefined;
		tabList: string;
		main: string;
		paper: string;
		cardHeader: string;
		cardBody: string;
		tab: string;
		appBar: string;
		drawer: string;
		elogio: string;
		sugestão: string;
		sugestao: string;
		solicitação: string;
		solicitacao: string;
		reclamação: string;
		reclamacao: string;
		denúncia: string;
		denuncia: string;
		recebida: string;
		analise: string;
		respondida: string;
		finalizada: string;
		cancelada: string;
		reaberta: string;
		pendente: string;
		atrasada: string;
	}
}
