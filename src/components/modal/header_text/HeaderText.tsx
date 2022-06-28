import classes from "./HeaderText.module.scss";
import { GiAirplaneDeparture, GiAirplaneArrival } from "react-icons/gi";
import {
  SMALL_SCREEN_SIZE,
  EXTRA_BIG_SCREEN_SIZE,
} from "../../../constants/constants";
import useWindowSize from "../../../hooks/window_size/useWindowSize";
import { AIRPANE_ORIENTATION } from "../../../constants/enum/enum.tsx";

function iconSize(width: number) {
  if (width <= SMALL_SCREEN_SIZE) {
    return 16;
  } else if (width >= SMALL_SCREEN_SIZE && width <= EXTRA_BIG_SCREEN_SIZE) {
    return 18;
  }
  return 25;
}

export default function HeaderText(
  headeText: string,
  airplaneOrientation: string
) {
  const [, width] = useWindowSize();
  console.log(airplaneOrientation);

  return (
    <div className={classes.body}>
      <div className={classes.text}>{headeText["headerText"]}</div>
      <div className={classes.icon}>
        {airplaneOrientation === AIRPANE_ORIENTATION.UP ? (
          <GiAirplaneDeparture size={iconSize(width)} />
        ) : (
          <GiAirplaneArrival size={iconSize(width)} />
        )}
      </div>
    </div>
  );
}
