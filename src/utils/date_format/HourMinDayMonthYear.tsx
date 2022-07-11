import moment from "moment";
import {
  DAYS_OF_WEEK_EN,
  DAYS_OF_WEEK_RO,
  DAYS_OF_WEEK_RU,
} from "../.././constants/constants";
import { LANGUAGES } from "../../constants/enum/enum.tsx";

export default function HourMinDayMonthYear({ timeStamp, lang }) {
  let dateInt = new Date(timeStamp * 1000);
  let dateString = new Date(dateInt.toUTCString());

  var days;

  switch (lang) {
    case LANGUAGES.RO:
      days = DAYS_OF_WEEK_RO;
      break;
    case LANGUAGES.EN:
      days = DAYS_OF_WEEK_EN;
      break;
    case LANGUAGES.RU:
      days = DAYS_OF_WEEK_RU;
      break;
    default:
      days = DAYS_OF_WEEK_EN;
      break;
  }

  var day = days[dateString.getDay()];
  let hourMin = moment(dateString).format("HH : mm");
  let date = moment(dateString).format("DD, MM YYYY");
  return `${hourMin} - ${day} ${date}`;
}
