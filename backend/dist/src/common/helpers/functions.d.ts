export declare function newArrayState(newObject: any, stateArray: any): any;
export declare function uniquesValues(Values: any[]): any[];
export declare function uniquesObjects(arrayObjects: any[]): any[];
export declare function comparaArrays<T>(BigArray: T[], littleArray: T[], key: string): {
    newBigArray: T[];
    newArray: T[];
};
export declare function initialsName(FullName: string): string;
export declare const returnDiffInArrays: (Array1: any[], Array2: any[], key: any) => any[];
export declare function humanFileSize(bytes: any, si?: boolean, dc?: number): string;
export declare const convertFloat: (valor: string | number) => number;
export declare function exclude<T, Key extends keyof T>(dados: T, keys: Key[]): Omit<T, Key>;
export declare function excludeArray<T, Key extends keyof T>(dados: T[], keys: Key[]): Omit<T[], Key>;
