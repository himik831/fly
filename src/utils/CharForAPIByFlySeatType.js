import { AIRFLY_PLACE_TYPE } from "../constants/enum/enum.tsx";

export default function CharForAPIByFlySeatType(type) {
  switch (type) {
    case AIRFLY_PLACE_TYPE.ECONOM:
      return "M";
    case AIRFLY_PLACE_TYPE.CONFORT:
      return "W";
    case AIRFLY_PLACE_TYPE.BUSINESS:
      return "C";
    case AIRFLY_PLACE_TYPE.FIRST_CLASS:
      return "F";
  }
}
