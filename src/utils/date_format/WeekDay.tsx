import {
  DAYS_OF_WEEK_EN,
  DAYS_OF_WEEK_RO,
  DAYS_OF_WEEK_RU,
} from "../.././constants/constants";
import { LANGUAGES } from "../../constants/enum/enum.tsx";

export default function WeekDay(language) {
  switch (language) {
    case LANGUAGES.RO:
      return `${DAYS_OF_WEEK_RO[new Date().getDay()].toUpperCase()}`;
    case LANGUAGES.EN:
      return `${DAYS_OF_WEEK_EN[new Date().getDay()].toUpperCase()}`;
    case LANGUAGES.RU:
      return `${DAYS_OF_WEEK_RU[new Date().getDay()].toUpperCase()}`;
  }
}
