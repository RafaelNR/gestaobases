"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get AddDaysDate () {
        return AddDaysDate;
    },
    get CompareDateBeforeToday () {
        return CompareDateBeforeToday;
    },
    get CompareDateNow () {
        return CompareDateNow;
    },
    get CompareDateTomorrow () {
        return CompareDateTomorrow;
    },
    get CompareDateisNow () {
        return CompareDateisNow;
    },
    get DateFormat () {
        return DateFormat;
    },
    get DateFormatInput () {
        return DateFormatInput;
    },
    get DateFormatRelative () {
        return DateFormatRelative;
    },
    get DateFormatUTC () {
        return DateFormatUTC;
    },
    get DateNow () {
        return DateNow;
    },
    get DateTimeFormatInput () {
        return DateTimeFormatInput;
    },
    get convertSecondsToDays () {
        return convertSecondsToDays;
    },
    get diffStartAndEndDateMonths () {
        return diffStartAndEndDateMonths;
    },
    get nameMonth () {
        return nameMonth;
    }
});
const _dayjs = /*#__PURE__*/ _interop_require_default(require("dayjs"));
const _relativeTime = /*#__PURE__*/ _interop_require_default(require("dayjs/plugin/relativeTime.js"));
require("dayjs/locale/pt-br.js");
const _duration = /*#__PURE__*/ _interop_require_default(require("dayjs/plugin/duration"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
_dayjs.default.extend(_duration.default);
_dayjs.default.extend(_relativeTime.default);
_dayjs.default.locale('pt-br');
function DateNow(format) {
    return format ? (0, _dayjs.default)().format(format) : (0, _dayjs.default)().format();
}
function DateFormatUTC(date, format = 'YYYY-MM-DD') {
    return (0, _dayjs.default)(date).format(format);
}
function DateFormat(date, format = 'YYYY-MM-DD') {
    return (0, _dayjs.default)(date).format(format);
}
function DateFormatRelative(date) {
    const Data = (0, _dayjs.default)(date);
    return Data.fromNow();
}
function DateFormatInput(date) {
    return (0, _dayjs.default)(date).format('YYYY-MM-DD');
}
function DateTimeFormatInput(date) {
    return (0, _dayjs.default)(date).format('YYYY-MM-DDTHH:mm');
}
function AddDaysDate(date, days) {
    return (0, _dayjs.default)(date).add(days, 'days').format('YYYY-MM-DD');
}
function CompareDateBeforeToday(date) {
    if (date) {
        const now = (0, _dayjs.default)();
        const currDate = (0, _dayjs.default)(date);
        return currDate.isBefore(now, 'days');
    }
    return true;
}
function CompareDateisNow(date) {
    if (date) {
        const now = (0, _dayjs.default)(new Date()).endOf('days').valueOf();
        const Data = (0, _dayjs.default)(date).endOf('days').valueOf();
        if (now === Data) return true;
        return false;
    }
    return false;
}
function CompareDateTomorrow(date) {
    if (date) {
        const tomorrow = (0, _dayjs.default)().add(1, 'days').endOf('day');
        const currDate = (0, _dayjs.default)(date).endOf('day');
        if (tomorrow.format('DD/MM/YYYY') === currDate.format('DD/MM/YYYY')) {
            return true;
        }
        return false;
    }
    return false;
}
function CompareDateNow(date) {
    if (date) {
        const now = (0, _dayjs.default)(new Date()).endOf('days').valueOf();
        const Data = (0, _dayjs.default)(date).endOf('days').valueOf();
        if (now > Data) return true;
        return false;
    }
    return false;
}
function nameMonth(mes) {
    const name = (0, _dayjs.default)(mes).locale('pt-br').format('MMMM');
    return name.charAt(0).toUpperCase() + name.slice(1);
}
function diffStartAndEndDateMonths(start, end) {
    const diff = end.diff(start, 'months');
    const months = [];
    for(let index = 0; index <= diff; index++){
        const c = (0, _dayjs.default)(start).add(index, 'month');
        months.push({
            mes: parseInt((0, _dayjs.default)(c).format('M')),
            ano: parseInt((0, _dayjs.default)(c).format('YYYY'))
        });
    }
    return months;
}
function convertSecondsToDays(seconds) {
    return _dayjs.default.duration(seconds, 'seconds').asDays().toFixed(2);
}

//# sourceMappingURL=dates.js.map