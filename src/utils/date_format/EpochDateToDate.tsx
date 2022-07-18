import DayMonthYear from './DayMonthYear.tsx'

export default function EpochDateToDate(epoch) {
  var utcSeconds = epoch;
  var dateTime = new Date(0);
  dateTime.setSeconds(utcSeconds);

  var date = DayMonthYear(dateTime)

  return date;
}
