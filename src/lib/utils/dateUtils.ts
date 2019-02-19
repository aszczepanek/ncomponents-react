import { toInt, isString, isNumber, isDate } from '../utils/typeHelpers';

const R_ISO8601_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
// 1        2       3         4          5          6          7          8  9     10      11

const DATETIME_FORMATS: { [key: string]: any } = {
  "DAY": [
    "niedziela",
    "poniedzia\u0142ek",
    "wtorek",
    "\u015broda",
    "czwartek",
    "pi\u0105tek",
    "sobota"
  ],
  "FIRSTDAYOFWEEK": 1,
  "MONTH": [
    "stycznia",
    "lutego",
    "marca",
    "kwietnia",
    "maja",
    "czerwca",
    "lipca",
    "sierpnia",
    "wrze\u015bnia",
    "pa\u017adziernika",
    "listopada",
    "grudnia"
  ],
  "SHORTDAY": [
    "nd",
    "pn",
    "wt",
    "\u015br",
    "czw",
    "pt",
    "so"
  ],
  "SHORTMONTH": [
    "sty",
    "lut",
    "mar",
    "kwi",
    "maj",
    "cze",
    "lip",
    "sie",
    "wrz",
    "pa\u017a",
    "lis",
    "gru"
  ],
  "STANDALONEMONTH": [
    "stycze\u0144",
    "luty",
    "marzec",
    "kwiecie\u0144",
    "maj",
    "czerwiec",
    "lipiec",
    "sierpie\u0144",
    "wrzesie\u0144",
    "pa\u017adziernik",
    "listopad",
    "grudzie\u0144"
  ],
  "WEEKENDRANGE": [
    5,
    6
  ]
};

const DATE_FORMATS_GETTERS: { [key: string]: (date: Date, formats: any, dateTimeZoneOffset: number) => any } = {
  yyyy: dateGetter('FullYear', 4, 0, false, true),
  yy: dateGetter('FullYear', 2, 0, true, true),
  y: dateGetter('FullYear', 1, 0, false, true),
  MMMM: dateStrGetter('Month'),
  MMM: dateStrGetter('Month', true),
  MM: dateGetter('Month', 2, 1),
  M: dateGetter('Month', 1, 1),
  LLLL: dateStrGetter('Month', false, true),
  dd: dateGetter('Date', 2),
  d: dateGetter('Date', 1),
  HH: dateGetter('Hours', 2),
  H: dateGetter('Hours', 1),
  hh: dateGetter('Hours', 2, -12),
  h: dateGetter('Hours', 1, -12),
  mm: dateGetter('Minutes', 2),
  m: dateGetter('Minutes', 1),
  ss: dateGetter('Seconds', 2),
  s: dateGetter('Seconds', 1),
  // while ISO 8601 requires fractions to be prefixed with `.` or `,`
  // we can be just safely rely on using `sss` since we currently don't support single or two digit fractions
  sss: dateGetter('Milliseconds', 3),
  EEEE: dateStrGetter('Day'),
  EEE: dateStrGetter('Day', true),
  Z: timeZoneGetter,
  ww: weekGetter(2),
  w: weekGetter(1)
};

const DATE_FORMATS_SPLIT = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/;
const NUMBER_STRING = /^\-?\d+$/;

const namedPatterns: { [key: string]: string | undefined } = {
  ISO8601: 'yyyy-MM-ddTHH:mm:ss.sssZ',
  ISO8601_SECONDS: 'yyyy-MM-ddTHH:mm:ssZ',
  "dateTime": "d.MM.yyyy HH:mm",
  "fullDate": "EEEE, d MMMM y",
  "longDate": "d MMMM y",
  "medium": "d MMM y HH:mm:ss",
  "mediumDate": "d.MM.yyyy",
  "mediumTime": "HH:mm:ss",
  "short": "dd.MM.y HH:mm",
  "shortDate": "dd.MM.y",
  "shortTime": "HH:mm"
};

export const dateUtils = {
  namedPatterns,
  parseISO,
  formatDate
}

function parseISO(string: string) {
  let match;
  if (match = string.match(R_ISO8601_STR)) {
    let date = new Date(0),
      tzHour = 0,
      tzMin = 0,
      dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear,
      timeSetter = match[8] ? date.setUTCHours : date.setHours;

    if (match[9]) {
      tzHour = toInt(match[9] + match[10]);
      tzMin = toInt(match[9] + match[11]);
    }
    dateSetter.call(date, toInt(match[1]), toInt(match[2]) - 1, toInt(match[3]));
    const h = toInt(match[4] || 0) - tzHour;
    const m = toInt(match[5] || 0) - tzMin;
    const s = toInt(match[6] || 0);
    const ms = Math.round(parseFloat('0.' + (match[7] || 0)) * 1000);
    timeSetter.call(date, h, m, s, ms);
    return date;
  }
  return undefined;
}

function formatDate(date: any, format: string) {
  var text = '',
    parts = [],
    fn, match;

  format = format || 'mediumDate';
  format = namedPatterns[format] || format;
  if (isString(date)) {
    date = NUMBER_STRING.test(date) ? toInt(date) : parseISO(date);
  }

  if (isNumber(date)) {
    date = new Date(date);
  }

  if (!isDate(date) || !isFinite(date.getTime())) {
    return date;
  }

  let remainingFormat: string | undefined = format;

  while (remainingFormat) {
    match = DATE_FORMATS_SPLIT.exec(remainingFormat);
    if (match) {
      parts = concat(parts, match, 1);
      remainingFormat = parts.pop();
    } else {
      parts.push(remainingFormat);
      remainingFormat = undefined;
    }
  }

  var dateTimezoneOffset = date.getTimezoneOffset();

  parts.forEach(function (value) {
    fn = DATE_FORMATS_GETTERS[value];
    text += fn ? fn(date, DATETIME_FORMATS, dateTimezoneOffset)
      : value === "''" ? "'" : value.replace(/(^'|'$)/g, '').replace(/''/g, "'");
  });

  return text;
};

function concat(array1: any[], array2: any[], index: number) {
  return array1.concat([].slice.call(array2, index));
}

function padNumber(num: number | string, digits: number, trim?: boolean, negWrap?: boolean) {
  var neg = '';
  if (num < 0 || (negWrap && num <= 0)) {
    if (negWrap) {
      num = -num + 1;
    } else {
      num = -num;
      neg = '-';
    }
  }
  num = '' + num;
  while (num.length < digits) num = '0' + num;
  if (trim) {
    num = num.substr(num.length - digits);
  }
  return neg + num;
}


function dateGetter(name: string, size: number, offset?: number, trim?: boolean, negWrap?: boolean) {
  offset = offset || 0;
  return function (date: any) {
    var value = date['get' + name]();
    if (offset) {
      if (offset > 0 || value > -offset) {
        value += offset;
      }
    }
    if (value === 0 && offset == -12) value = 12;
    return padNumber(value, size, trim, negWrap);
  };
}

function dateStrGetter(name: string, shortForm?: boolean, standAlone?: boolean) {
  return function (date: any, formats: any) {
    var value = date['get' + name]();
    var propPrefix = (standAlone ? 'STANDALONE' : '') + (shortForm ? 'SHORT' : '');
    var get = uppercase(propPrefix + name);

    return formats[get][value];
  };
}


function timeZoneGetter(date: Date, formats: any, offset: number) {
  var zone = -1 * offset;
  var paddedZone = (zone >= 0) ? "+" : "";

  paddedZone += padNumber(Math[zone > 0 ? 'floor' : 'ceil'](zone / 60), 2) +
    padNumber(Math.abs(zone % 60), 2);

  return paddedZone;
}

function weekGetter(size: number) {
  return function (date: Date) {
    var firstThurs = getFirstThursdayOfYear(date.getFullYear()),
      thisThurs = getThursdayThisWeek(date);

    var diff = +thisThurs - +firstThurs,
      result = 1 + Math.round(diff / 6.048e8); // 6.048e8 ms per week

    return padNumber(result, size);
  };
}

function getFirstThursdayOfYear(year: number) {
  // 0 = index of January
  var dayOfWeekOnFirst = (new Date(year, 0, 1)).getDay();
  // 4 = index of Thursday (+1 to account for 1st = 5)
  // 11 = index of *next* Thursday (+1 account for 1st = 12)
  return new Date(year, 0, ((dayOfWeekOnFirst <= 4) ? 5 : 12) - dayOfWeekOnFirst);
}

function getThursdayThisWeek(datetime: Date) {
  return new Date(datetime.getFullYear(), datetime.getMonth(),
    // 4 = index of Thursday
    datetime.getDate() + (4 - datetime.getDay()));
}

function uppercase(string: string) {
  return isString(string) ? string.toUpperCase() : string;
}
