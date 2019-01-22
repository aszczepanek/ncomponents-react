import { isDate } from "../utils/typeHelpers";

const options = {
  timeForDefaultDate: {
    hours: 12,
    minutes: 0
  }
};

export const datePartUpdater = {
  options,
  setDate,
  setTime
};

function setDate(originalDate: Date | undefined, valueToSet: Date) {
  validateInput(originalDate, valueToSet);

  var year = valueToSet.getFullYear();
  var month = valueToSet.getMonth();
  var date = valueToSet.getDate();

  var result = originalDate
    ? new Date(originalDate)
    : createDefaultForDate(valueToSet);
  result.setFullYear(year);
  result.setMonth(month);
  result.setDate(date);

  return result;
}

function setTime(originalDate: Date | undefined, valueToSet: Date) {
  validateInput(originalDate, valueToSet);

  var hours = valueToSet.getHours();
  var minutes = valueToSet.getMinutes();
  var seconds = valueToSet.getSeconds();

  var result = originalDate
    ? new Date(originalDate)
    : createDefaultForTime(valueToSet);
  result.setHours(hours);
  result.setMinutes(minutes);
  result.setSeconds(seconds);
  result.setMilliseconds(0);

  return result;
}

function createDefaultForDate(valueToSet: Date) {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var date = now.getDate();

  if (
    year == valueToSet.getFullYear() &&
    month == valueToSet.getMonth() &&
    date == valueToSet.getDate()
  ) {
    return new Date();
  } else {
    return new Date(
      valueToSet.getFullYear(),
      valueToSet.getMonth(),
      valueToSet.getDate(),
      options.timeForDefaultDate.hours,
      options.timeForDefaultDate.minutes,
      0
    );
  }
}

function createDefaultForTime(valueToSet: Date) {
  return new Date();
}

function validateInput(originalDate: Date | undefined, valueToSet: Date) {
  assertNotNull(valueToSet, "valueToSet");
  assertIsNullOrValidDate(valueToSet, "valueToSet");
  assertIsNullOrValidDate(originalDate, "originalDate");
}

function assertNotNull(value: Date, paramName: string) {
  if (value === null || value === undefined) error(paramName + " is null");
}

function assertIsNullOrValidDate(value: Date | undefined, paramName: string) {
  if (value === null || value === undefined) return;
  if (!isDate(value)) error(paramName + " is not Date type");
  if (isNaN(<any>value)) error(paramName + " is invalid date object");
}

function error(msg: string) {
  throw "datePartUpdater: " + msg;
}
