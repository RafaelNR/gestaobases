// import { Service } from "./Service";
// import {
// 	filtroRelatorioManifestacoesSchemaInput,
// 	FiltroRelatorioNotasUnidadesSchemaInput,
// 	FiltroRelatorioTempoRespostaSchemaInput,
// } from "@/Types/Relatorios";

// export class RelatoriosService extends Service {
// 	constructor(path: string) {
// 		super(path);
// 	}

// 	public async getRelatorioManifestacoes<T>(
// 		filtros: filtroRelatorioManifestacoesSchemaInput,
// 	) {
// 		let query = filtros.ano ? `ano=${filtros.ano}` : "";
// 		query = filtros.mes ? query + `&mes=${filtros.mes}` : query;

// 		query = filtros.setor ? query + `&setor=${filtros.setor}` : query;

// 		query = filtros.userUUID ? query + `&userUUID=${filtros.userUUID}` : query;

// 		if (filtros.setor) {
// 			const response = await this.service.api.get(
// 				this.path + `/manifestacoes/setor?${query}`,
// 			);
// 			return this.service.success<T>(response);
// 		}

// 		if (filtros.userUUID) {
// 			const response = await this.service.api.get(
// 				this.path + `/manifestacoes/usuario?${query}`,
// 			);
// 			return this.service.success<T>(response);
// 		}

// 		const response = await this.service.api.get(
// 			this.path + `/manifestacoes?${query}`,
// 		);
// 		return this.service.success<T>(response);
// 	}

// 	public async getRelatorioTempoRespostaDetalhado<T>(
// 		filtros: FiltroRelatorioTempoRespostaSchemaInput,
// 	) {
// 		let query = filtros.ano ? `ano=${filtros.ano}` : "";
// 		query = filtros.mes ? query + `&mes=${filtros.mes}` : query;
// 		query = filtros.setor ? query + `&setor=${filtros.setor}` : query;

// 		const response = await this.service.api.get(
// 			this.path + `/tempo-resposta/detalhado?${query}`,
// 		);
// 		return this.service.success<T>(response);
// 	}

// 	public async getRelatorioTempoResposta<T>(
// 		filtros: FiltroRelatorioTempoRespostaSchemaInput,
// 	) {
// 		let query = filtros.ano ? `ano=${filtros.ano}` : "";
// 		query = filtros.mes ? query + `&mes=${filtros.mes}` : query;
// 		query = filtros.setor ? query + `&setor=${filtros.setor}` : query;

// 		const response = await this.service.api.get(
// 			this.path + `/tempo-resposta?${query}`,
// 		);
// 		return this.service.success<T>(response);
// 	}

// 	public async getRelatorioNotasChatBot<T>(
// 		filtros: FiltroRelatorioNotasUnidadesSchemaInput,
// 	) {
// 		let query = filtros.ano ? `ano=${filtros.ano}` : "";
// 		query = filtros.mes ? query + `&mes=${filtros.mes}` : query;

// 		query = filtros.d_id ? query + `&d_id=${filtros.d_id}` : query;

// 		query = filtros.unidade ? query + `&unidade=${filtros.unidade}` : query;

// 		const response = await this.service.api.get(
// 			this.path + `/notas_chatbot?${query}`,
// 		);
// 		return this.service.success<T>(response);
// 	}
// }

// export const relatoriosService = new RelatoriosService("/relatorios");
