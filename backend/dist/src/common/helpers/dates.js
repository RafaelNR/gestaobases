"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateNow = DateNow;
exports.DateFormatUTC = DateFormatUTC;
exports.DateFormat = DateFormat;
exports.DateFormatRelative = DateFormatRelative;
exports.DateFormatInput = DateFormatInput;
exports.DateTimeFormatInput = DateTimeFormatInput;
exports.AddDaysDate = AddDaysDate;
exports.CompareDateBeforeToday = CompareDateBeforeToday;
exports.CompareDateisNow = CompareDateisNow;
exports.CompareDateTomorrow = CompareDateTomorrow;
exports.CompareDateNow = CompareDateNow;
exports.nameMonth = nameMonth;
exports.diffStartAndEndDateMonths = diffStartAndEndDateMonths;
exports.convertSecondsToDays = convertSecondsToDays;
const dayjs_1 = __importDefault(require("dayjs"));
const relativeTime_js_1 = __importDefault(require("dayjs/plugin/relativeTime.js"));
require("dayjs/locale/pt-br.js");
const duration_1 = __importDefault(require("dayjs/plugin/duration"));
dayjs_1.default.extend(duration_1.default);
dayjs_1.default.extend(relativeTime_js_1.default);
dayjs_1.default.locale('pt-br');
function DateNow(format) {
    return format ? (0, dayjs_1.default)().format(format) : (0, dayjs_1.default)().format();
}
function DateFormatUTC(date, format = 'YYYY-MM-DD') {
    return (0, dayjs_1.default)(date).format(format);
}
function DateFormat(date, format = 'YYYY-MM-DD') {
    return (0, dayjs_1.default)(date).format(format);
}
function DateFormatRelative(date) {
    const Data = (0, dayjs_1.default)(date);
    return Data.fromNow();
}
function DateFormatInput(date) {
    return (0, dayjs_1.default)(date).format('YYYY-MM-DD');
}
function DateTimeFormatInput(date) {
    return (0, dayjs_1.default)(date).format('YYYY-MM-DDTHH:mm');
}
function AddDaysDate(date, days) {
    return (0, dayjs_1.default)(date).add(days, 'days').format('YYYY-MM-DD');
}
function CompareDateBeforeToday(date) {
    if (date) {
        const now = (0, dayjs_1.default)();
        const currDate = (0, dayjs_1.default)(date);
        return currDate.isBefore(now, 'days');
    }
    return true;
}
function CompareDateisNow(date) {
    if (date) {
        const now = (0, dayjs_1.default)(new Date()).endOf('days').valueOf();
        const Data = (0, dayjs_1.default)(date).endOf('days').valueOf();
        if (now === Data)
            return true;
        return false;
    }
    return false;
}
function CompareDateTomorrow(date) {
    if (date) {
        const tomorrow = (0, dayjs_1.default)().add(1, 'days').endOf('day');
        const currDate = (0, dayjs_1.default)(date).endOf('day');
        if (tomorrow.format('DD/MM/YYYY') === currDate.format('DD/MM/YYYY')) {
            return true;
        }
        return false;
    }
    return false;
}
function CompareDateNow(date) {
    if (date) {
        const now = (0, dayjs_1.default)(new Date()).endOf('days').valueOf();
        const Data = (0, dayjs_1.default)(date).endOf('days').valueOf();
        if (now > Data)
            return true;
        return false;
    }
    return false;
}
function nameMonth(mes) {
    const name = (0, dayjs_1.default)(mes).locale('pt-br').format('MMMM');
    return name.charAt(0).toUpperCase() + name.slice(1);
}
function diffStartAndEndDateMonths(start, end) {
    const diff = end.diff(start, 'months');
    const months = [];
    for (let index = 0; index <= diff; index++) {
        const c = (0, dayjs_1.default)(start).add(index, 'month');
        months.push({
            mes: parseInt((0, dayjs_1.default)(c).format('M')),
            ano: parseInt((0, dayjs_1.default)(c).format('YYYY')),
        });
    }
    return months;
}
function convertSecondsToDays(seconds) {
    return dayjs_1.default.duration(seconds, 'seconds').asDays().toFixed(2);
}
//# sourceMappingURL=dates.js.map