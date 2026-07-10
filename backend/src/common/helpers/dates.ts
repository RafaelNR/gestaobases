import dayjs, { Dayjs } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import 'dayjs/locale/pt-br.js'; // para português
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.locale('pt-br');

export function DateNow(format?: string): string {
  return format ? dayjs().format(format) : dayjs().format();
}

export function DateFormatUTC(
  date: string | Date,
  format = 'YYYY-MM-DD'
): string {
  return dayjs(date).format(format);
}

export function DateFormat(date: string | Date, format = 'YYYY-MM-DD'): string {
  return dayjs(date).format(format);
}

export function DateFormatRelative(date: string | Date): string {
  const Data = dayjs(date);
  return Data.fromNow();
}

export function DateFormatInput(date: string): string {
  return dayjs(date).format('YYYY-MM-DD');
}

export function DateTimeFormatInput(date: string): string {
  return dayjs(date).format('YYYY-MM-DDTHH:mm');
}

export function AddDaysDate(date: string, days: number): string {
  return dayjs(date).add(days, 'days').format('YYYY-MM-DD');
}

/**
 * Verifica se a data é anterior a hoje, se for retorna true;
 */
export function CompareDateBeforeToday(date: string): boolean {
  if (date) {
    const now = dayjs();
    const currDate = dayjs(date);
    return currDate.isBefore(now, 'days');
  }

  return true;
}

/**
 * Verifica se a data é hoje
 */
export function CompareDateisNow(date: string): boolean {
  if (date) {
    const now = dayjs(new Date()).endOf('days').valueOf();
    const Data = dayjs(date).endOf('days').valueOf();
    if (now === Data) return true;

    return false;
  }

  return false;
}

/**
 * Verifica se a data é amanha, se sim  retorna true;
 */
export function CompareDateTomorrow(date: string): boolean {
  if (date) {
    const tomorrow = dayjs().add(1, 'days').endOf('day');
    const currDate = dayjs(date).endOf('day');

    if (tomorrow.format('DD/MM/YYYY') === currDate.format('DD/MM/YYYY')) {
      return true;
    }
    return false;
  }

  return false;
}

/**
 * Verifica se a data é maior q hoje
 */
export function CompareDateNow(date: string): boolean {
  if (date) {
    const now = dayjs(new Date()).endOf('days').valueOf();
    const Data = dayjs(date).endOf('days').valueOf();
    if (now > Data) return true;

    return false;
  }

  return false;
}
export function nameMonth(mes: string): string {
  const name = dayjs(mes).locale('pt-br').format('MMMM');
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export function diffStartAndEndDateMonths(start: Dayjs, end: Dayjs) {
  const diff = end.diff(start, 'months');

  const months: { mes: Number; ano: Number }[] = [];
  for (let index = 0; index <= diff; index++) {
    const c = dayjs(start).add(index, 'month');
    months.push({
      mes: parseInt(dayjs(c).format('M')),
      ano: parseInt(dayjs(c).format('YYYY')),
    });
  }

  return months;
}

export function convertSecondsToDays(seconds: number): string {
  return dayjs.duration(seconds, 'seconds').asDays().toFixed(2);
}
