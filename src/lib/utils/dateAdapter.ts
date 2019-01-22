import { dateUtils } from '../utils/dateUtils';
import { toInt, isDate } from '../utils/typeHelpers';

type ParseFn = (str: string) => Date | undefined;
type FormatFn = (date: Date | string) => any;

export interface DateAdapter {
  parse: ParseFn;
  format: FormatFn;
  formatName: string;
  formatPattern: string;
}

class DateAdapterFactory {
  adapters: { [key: string]: DateAdapter } = {};

  constructor() {
    this.initAdapters();
  }

  getForFormat(format: string): DateAdapter {
    if (!this.adapters[format]) {
      throw new Error('dateAdapterFactory: format not supported - ' + format);
    }

    return this.adapters[format];
  }

  private initAdapters() {
    this.createAdapter('ISO8601', dateUtils.parseISO);
    this.createAdapter('ISO8601_SECONDS', dateUtils.parseISO);
    this.createAdapter('yyyy-MM-dd', dateUtils.parseISO);
    this.createAdapter('yyyy-MM-ddTHH:mm', dateUtils.parseISO);
    this.createAdapter('yyyy-MM-ddTHH:mm:ss', dateUtils.parseISO);
    this.createAdapter('d.MM.yyyy', parserForDayMonthYearUsingRegex(/(\d{1,2})\.(\d\d)\.(\d{4})/));
    this.createAdapter('HH:mm', parserForHourMinuteUsingRegex(/(\d\d):?(\d\d)/));
    this.createAdapter('HH:mm:ss', parserForHourMinuteSecondUsingRegex(/(\d\d):?(\d\d):?(\d\d)/));
    this.createAdapter('Date', function parse(value) {
        return isDate(value) ? value : undefined;
    });
  }

  private createAdapter(formatName: string, parseFn: ParseFn) {
    const formatPattern = dateUtils.namedPatterns[formatName] || formatName;

    this.adapters[formatName] = {
      parse: parseFn,
      format: this.createFormatter(formatPattern),
      formatName: formatName,
      formatPattern: formatPattern
    };
  }

  private createFormatter(formatPattern: string): FormatFn {
    if (formatPattern == 'Date') {
      return function (date: Date | string) {
        return date
      };
    }
    else {
      return function (date) {
        return dateUtils.formatDate(date, formatPattern);
      };
    }
  }
}

function parserForDayMonthYearUsingRegex(regex: RegExp) {
  return function parseDayMonthYear(str: string) {
      var match;
      if (match = str.match(regex)) { // jshint ignore:line
          return new Date(toInt(match[3]), toInt(match[2]) - 1, toInt(match[1]));
      }
      return undefined;
  };
}

function parserForHourMinuteUsingRegex(regex: RegExp) {
  return function parseHourMinute(str: string) {
      var match;
      if (match = str.match(regex)) { // jshint ignore:line
          return new Date(1970, 0, 1, toInt(match[1]), toInt(match[2]));
      }
      return undefined;
  };
}

function parserForHourMinuteSecondUsingRegex(regex: RegExp) {
  return function parseHourMinuteSecond(str: string) {
      var match;
      if (match = str.match(regex)) { // jshint ignore:line
          return new Date(1970, 0, 1, toInt(match[1]), toInt(match[2]), toInt(match[3]));
      }
      return undefined;
  };
}

export const dateAdapterFactory = new DateAdapterFactory();