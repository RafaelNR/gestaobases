export default async function arquivoExiste(url: string) {
	try {
		const response = await fetch(url, { method: "HEAD" });
		return response.ok;
	} catch (error) {
		return false;
	}
}

export async function openFileIsExiste(url: string) {
	try {
		const isExiste = await arquivoExiste(url);

		if (!isExiste) {
			return false;
		}

		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;

		return true;
	} catch (error) {
		return false;
	}
}
