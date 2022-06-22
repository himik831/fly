import moment from "moment";

export default function HourMinDayMonthYear({ timeStamp }) {
  let dateInt = new Date(timeStamp * 1000);
  let dateString = new Date(dateInt.toUTCString());
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var day = days[dateString.getDay()];
  let hourMin = moment(dateString).format("HH : mm");
  let date = moment(dateString).format("DD, MM YYYY");
  return `${hourMin} - ${day} ${date}`;
}
