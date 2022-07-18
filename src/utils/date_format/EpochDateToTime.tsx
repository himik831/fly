export default function EpochDateToTime(epoch) {
  var utcSeconds = epoch;
  var dateTime = new Date(0);
  dateTime.setSeconds(utcSeconds);
  dateTime.setMinutes(dateTime.getMinutes() + dateTime.getTimezoneOffset());
  var time = dateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return time;
}
