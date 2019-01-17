import { isDate, isString } from '../utils/typeHelpers';

const regexInferChain = [
  {
    pattern: /^\d{4}-\d\d-\d\d$/,
    format: 'yyyy-MM-dd'
  },
  {
    pattern: /^\d{4}-\d\d-\d\dT\d\d:\d\d$/,
    format: 'yyyy-MM-ddTHH:mm'
  },
  {
    pattern: /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d$/,
    format: 'yyyy-MM-ddTHH:mm:ss'
  },
  {
    pattern: /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
    format: 'ISO8601'
  }
];

export function inferDateFormat(value: any): string | undefined {
  if (isDate(value))
    return 'Date';

  if (!isString(value))
    return undefined;

  for (var i = 0; i < regexInferChain.length; i++) {
    var formatCandidate = regexInferChain[i];
    if (formatCandidate.pattern.test(value))
      return formatCandidate.format;
  }

  return undefined;
}