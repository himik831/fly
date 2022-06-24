import classes from "./HeaderText.module.scss";
import { GiAirplaneDeparture } from "react-icons/gi";
import {
  SMALL_SCREEN_SIZE,
  MEDIUM_SCREEN_SIZE,
} from "../../../constants/constants";
import useWindowSize from "../../../hooks/window_size/useWindowSize";

function iconSize(width: number) {
  if (width <= SMALL_SCREEN_SIZE) {
    return 16;
  } else if (width >= SMALL_SCREEN_SIZE && width <= MEDIUM_SCREEN_SIZE) {
    return 18;
  }
  return 40;
}

export default function HeaderText() {
  const [, width] = useWindowSize();

  return (
    <div className={classes.body}>
      <div className={classes.text}>FROM</div>
      <div className={classes.icon}>
        <GiAirplaneDeparture size={iconSize(width)} />
      </div>
    </div>
  );
}
