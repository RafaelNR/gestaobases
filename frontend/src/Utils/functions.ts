/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * * Recebe dados de um novo objeto um array de objetos, procura dentro Array de objetos se
 * * encontra objeto com id parecido com objeto, substitui ele;
 *
 * @param {object} newObject
 * @param {Array} stateArray
 */
export function newArrayState(newObject: any, stateArray: any) {
	const elementsIndex = stateArray.findIndex(
		(obj: any) => obj.id === newObject.id,
	);
	if (elementsIndex >= 0) stateArray[elementsIndex] = newObject;

	return stateArray;
}

/**
 * * Recebe um array de objetos e procura objetos duplicados se encontrar, não adicionar
 * * o objeto igual.
 * @param {Array} value
 */
export function uniquesValues(Values: any[]) {
	const newArray: any[] = [];

	Values.map((value) => {
		const duplicated =
			newArray.findIndex((redItem) => {
				return value.nome === redItem.nome;
			}) > -1;

		if (!duplicated) {
			return newArray.push(value);
		}

		return false;
	});

	return newArray;
}

export function uniquesObjects(arrayObjects: any[]) {
	return arrayObjects.filter(
		(elem, index, self) => index === self.indexOf(elem),
	);
}

/**
 * * Compara dois array e retorno um array novo com valores diferentes entre eles.
 * * Deve receber somente o item a ser comparado, id, nome....
 * @param {Array} BigArray
 * @param {Array} littleArray
 */

export function comparaArrays(BigArray: any[], littleArray: any[]) {
	if (BigArray.length === 0) return [];

	const newArray: any[] = [];
	const newBigArray: any[] = [];

	BigArray.map((value) => {
		const duplicated =
			littleArray.findIndex((redItem) => {
				return value.id === redItem;
			}) > -1;

		if (!duplicated) {
			return newBigArray.push(value);
		} else {
			return newArray.push(value);
		}
	});

	return {
		newBigArray,
		newArray,
	};
}

/**
 * * Recebe uma string e retorna as inicial.
 * @param {string} FullName
 */
export function initialsName(FullName: string) {
	const arrayName = FullName.split(" ");

	if (arrayName.length >= 2) {
		const I1 = arrayName[0][0] ? arrayName[0][0] : "";
		const I2 = arrayName[1][0] ? arrayName[1][0] : "";
		const Iniciais = I1 + I2;
		return Iniciais.toUpperCase();
	}

	return FullName.substr(0, 2).toUpperCase();
}

export const returnDiffInArrays = (Array1: any[], Array2: any[], key: any) => {
	function comparer(otherArray: any[]) {
		return function (current: any) {
			return (
				otherArray.filter(function (other) {
					return other[key] === current[key];
				}).length === 0
			);
		};
	}

	const onlyInA = Array1.filter(comparer(Array2));
	const onlyInB = Array2.filter(comparer(Array1));

	return onlyInA.concat(onlyInB);
};

/**
 * Formata bytes para visualização de humano.
 *
 * @param bytes Number of bytes.
 * @param si True to use metric (SI) units, aka powers of 1000. False to use
 *           binary (IEC), aka powers of 1024.
 * @param dc Number of decimal places to display.
 *
 * @return Formatted string.
 */
export function humanFileSize(bytes: any, si = true, dc = 1) {
	const thresh = si ? 1000 : 1024;

	if (Math.abs(bytes) < thresh) {
		return bytes + " B";
	}

	const units = si
		? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
		: ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
	let u = -1;
	const r = 10 ** dc;

	do {
		bytes /= thresh;
		++u;
	} while (
		Math.round(Math.abs(bytes) * r) / r >= thresh &&
		u < units.length - 1
	);

	return bytes.toFixed(dc) + " " + units[u];
}

export const convertFloat = (valor: string | number) => {
	if (!valor) return 0;

	if (typeof valor === "number") {
		return Number(valor.toFixed(2));
	}

	let value = valor.toString();
	if (value.indexOf(",") > 0) {
		return Number(parseFloat(value.replace(/,/gi, ".")).toFixed(2));
	} else {
		return Number(parseFloat(value).toFixed(2));
	}
};

//* Se dentro do filtros existe algum valor setado
export const temFiltrosAtivos = (filtros?: Record<string, any>) => {
	if (!filtros) return false;

	delete filtros.filtred;

	return Object.entries(filtros).some(([key, value]) => {
		// intervalo de datas
		if (key === "data_inicial" || key === "data_final") {
			return filtros.data_inicial && filtros.data_final;
		}

		// ignora vazios
		if (value === null || value === undefined) return false;
		if (typeof value === "string" && value.trim() === "") return false;

		return true;
	});
};

export const applyMaskTelefone = (value: string, mask: string): string => {
	const onlyNumbers = value.replace(/\D/g, "");
	let result = "";
	let valueIndex = 0;

	for (let i = 0; i < mask.length; i++) {
		const maskChar = mask[i];

		if (maskChar === "9") {
			if (onlyNumbers[valueIndex] !== undefined) {
				result += onlyNumbers[valueIndex];
				valueIndex++;
			} else {
				break;
			}
		} else {
			if (onlyNumbers[valueIndex] !== undefined) {
				result += maskChar;
			}
		}
	}

	return result;
};

export function getEnumValue<T extends Record<string, string>>(
	enumObj: T,
	key: keyof T,
): T[keyof T] {
	return enumObj[key];
}

export function getEnumKey<T extends Record<string, string>>(
	enumObj: T,
	value: string,
): keyof T | undefined {
	return (Object.keys(enumObj) as Array<keyof T>).find(
		(key) => enumObj[key] === value,
	);
}

export function limitText(text: string | undefined, max: number): string {
	if (!text) return "";
	if (text.length <= max) return text;

	const truncated = text.slice(0, max);
	return truncated.slice(0, truncated.lastIndexOf(" ")) + "...";
}
