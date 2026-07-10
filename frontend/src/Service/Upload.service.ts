// import { Service } from "./Service";
// import { AxiosRequestConfig } from "axios";

// export class UploadService extends Service {
// 	constructor(path: string) {
// 		super(path);
// 	}

// 	// public async getAvaliadores<T>() {
// 	// 	const response = await this.service.api.get(this.path + `/pss/avaliadores`);
// 	// 	return this.service.successPromise<T>(response);
// 	// }

// 	public async getDownloadFile(
// 		url: string,
// 		config: AxiosRequestConfig<FormData> | undefined,
// 	) {
// 		const response = await this.service.api.get(url, {
// 			responseType: "blob",
// 			...config,
// 		});
// 		return response;
// 	}

// 	public async postLogDownload(filename: string) {
// 		const response = await this.service.api.post(
// 			this.path + "/uploads/arquivos/" + filename,
// 		);

// 		return this.service.success(response);
// 	}

// 	// public async uploadLaudoPCD<T>(
// 	// 	uuid: string,
// 	// 	formData: FormData,
// 	// 	config: AxiosRequestConfig<FormData> | undefined
// 	// ) {
// 	// 	const response = await this.service.api.post(
// 	// 		this.path + `/inscricoes/documentos/laudo/` + uuid,
// 	// 		formData,
// 	// 		config
// 	// 	);
// 	// 	return this.service.successPromise<T>(response);
// 	// }

// 	// public async uploadCertificadoTBI<T>(
// 	// 	uuid: string,
// 	// 	formData: FormData,
// 	// 	config: AxiosRequestConfig<FormData> | undefined
// 	// ) {
// 	// 	const response = await this.service.api.post(
// 	// 		this.path + `/inscricoes/documentos/tbi/` + uuid,
// 	// 		formData,
// 	// 		config
// 	// 	);
// 	// 	return this.service.successPromise<T>(response);
// 	// }

// 	// public async imagemPss<T>(
// 	// 	formData: FormData,
// 	// 	config: AxiosRequestConfig<FormData> | undefined
// 	// ) {
// 	// 	const response = await this.service.api.put(
// 	// 		this.path + `/upload/image/pss`,
// 	// 		formData,
// 	// 		config
// 	// 	);
// 	// 	return this.service.successPromise<T>(response);
// 	// }

// 	// public async imagemPerfil<T>(
// 	// 	formData: FormData,
// 	// 	config: AxiosRequestConfig<FormData> | undefined
// 	// ) {
// 	// 	const response = await this.service.api.put(
// 	// 		this.path + `/upload/image/perfil`,
// 	// 		formData,
// 	// 		config
// 	// 	);
// 	// 	return this.service.successPromise<T>(response);
// 	// }

// 	// public async identificacao<T>(
// 	// 	formData: FormData,
// 	// 	config: AxiosRequestConfig<FormData> | undefined
// 	// ) {
// 	// 	const response = await this.service.api.put(
// 	// 		this.path + `/usuarios/documentos/identificacao`,
// 	// 		formData,
// 	// 		config
// 	// 	);
// 	// 	return this.service.successPromise<T>(response);
// 	// }

// 	// public async escolaridade<T>(
// 	// 	formData: FormData,
// 	// 	config: AxiosRequestConfig<FormData> | undefined
// 	// ) {
// 	// 	const response = await this.service.api.put(
// 	// 		this.path + `/usuarios/documentos/escolaridade`,
// 	// 		formData,
// 	// 		config
// 	// 	);
// 	// 	return this.service.successPromise<T>(response);
// 	// }

// 	// public async laudoPCD<T>(
// 	// 	formData: FormData,
// 	// 	config: AxiosRequestConfig<FormData> | undefined
// 	// ) {
// 	// 	const response = await this.service.api.put(
// 	// 		this.path + `/usuarios/documentos/laudo`,
// 	// 		formData,
// 	// 		config
// 	// 	);
// 	// 	return this.service.successPromise<T>(response);
// 	// }
// }

// export const uploadService = new UploadService("");
