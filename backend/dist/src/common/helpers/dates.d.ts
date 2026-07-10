import { Dayjs } from 'dayjs';
import 'dayjs/locale/pt-br.js';
export declare function DateNow(format?: string): string;
export declare function DateFormatUTC(date: string | Date, format?: string): string;
export declare function DateFormat(date: string | Date, format?: string): string;
export declare function DateFormatRelative(date: string | Date): string;
export declare function DateFormatInput(date: string): string;
export declare function DateTimeFormatInput(date: string): string;
export declare function AddDaysDate(date: string, days: number): string;
export declare function CompareDateBeforeToday(date: string): boolean;
export declare function CompareDateisNow(date: string): boolean;
export declare function CompareDateTomorrow(date: string): boolean;
export declare function CompareDateNow(date: string): boolean;
export declare function nameMonth(mes: string): string;
export declare function diffStartAndEndDateMonths(start: Dayjs, end: Dayjs): {
    mes: Number;
    ano: Number;
}[];
export declare function convertSecondsToDays(seconds: number): string;
