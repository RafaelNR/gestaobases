"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertFloat = exports.returnDiffInArrays = void 0;
exports.newArrayState = newArrayState;
exports.uniquesValues = uniquesValues;
exports.uniquesObjects = uniquesObjects;
exports.comparaArrays = comparaArrays;
exports.initialsName = initialsName;
exports.humanFileSize = humanFileSize;
exports.exclude = exclude;
exports.excludeArray = excludeArray;
function newArrayState(newObject, stateArray) {
    const elementsIndex = stateArray.findIndex((obj) => obj.id === newObject.id);
    if (elementsIndex >= 0)
        stateArray[elementsIndex] = newObject;
    return stateArray;
}
function uniquesValues(Values) {
    const newArray = [];
    Values.map((value) => {
        const duplicated = newArray.findIndex((redItem) => {
            return value.nome === redItem.nome;
        }) > -1;
        if (!duplicated) {
            return newArray.push(value);
        }
        return false;
    });
    return newArray;
}
function uniquesObjects(arrayObjects) {
    return arrayObjects.filter((elem, index, self) => index === self.indexOf(elem));
}
function comparaArrays(BigArray, littleArray, key) {
    if (BigArray.length === 0)
        return {
            newBigArray: [],
            newArray: [],
        };
    const newArray = [];
    const newBigArray = [];
    BigArray.map((value) => {
        const duplicated = littleArray.findIndex((redItem) => {
            return value[key] === redItem;
        }) > -1;
        if (!duplicated) {
            return newBigArray.push(value);
        }
        else {
            return newArray.push(value);
        }
    });
    return {
        newBigArray,
        newArray,
    };
}
function initialsName(FullName) {
    const arrayName = FullName.split(' ');
    if (arrayName.length >= 2) {
        const I1 = arrayName[0][0] ? arrayName[0][0] : '';
        const I2 = arrayName[1][0] ? arrayName[1][0] : '';
        const Iniciais = I1 + I2;
        return Iniciais.toUpperCase();
    }
    return FullName.substr(0, 2).toUpperCase();
}
const returnDiffInArrays = (Array1, Array2, key) => {
    function comparer(otherArray) {
        return function (current) {
            return (otherArray.filter(function (other) {
                return other[key] === current[key];
            }).length === 0);
        };
    }
    const onlyInA = Array1.filter(comparer(Array2));
    const onlyInB = Array2.filter(comparer(Array1));
    return onlyInA.concat(onlyInB);
};
exports.returnDiffInArrays = returnDiffInArrays;
function humanFileSize(bytes, si = false, dc = 1) {
    const thresh = si ? 1000 : 1024;
    if (Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }
    const units = si
        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    let u = -1;
    const r = 10 ** dc;
    do {
        bytes /= thresh;
        ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh &&
        u < units.length - 1);
    return bytes.toFixed(dc) + ' ' + units[u];
}
const convertFloat = (valor) => {
    if (!valor)
        return 0;
    if (typeof valor === 'number') {
        return Number(valor.toFixed(2));
    }
    let value = valor.toString();
    if (value.indexOf(',') > 0) {
        return Number(parseFloat(value.replace(/,/gi, '.')).toFixed(2));
    }
    else {
        return Number(parseFloat(value).toFixed(2));
    }
};
exports.convertFloat = convertFloat;
function exclude(dados, keys) {
    return Object.fromEntries(Object.entries(dados).filter(([key]) => !keys.includes(key)));
}
function excludeArray(dados, keys) {
    return dados.map((dado) => Object.fromEntries(Object.entries(dado).filter(([key]) => !keys.includes(key))));
}
//# sourceMappingURL=functions.js.map