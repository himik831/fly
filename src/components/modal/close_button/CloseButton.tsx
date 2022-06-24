import { IoMdClose } from "react-icons/io";
import classes from "./CloseButton.module.scss";
import useWindowSize from "../../../hooks/window_size/useWindowSize";
import {
  SMALL_SCREEN_SIZE,
  MEDIUM_SCREEN_SIZE,
} from "../../../constants/constants";

function iconSize(width: number) {
  if (width <= SMALL_SCREEN_SIZE) {
    return 20;
  } else if (width >= SMALL_SCREEN_SIZE && width <= MEDIUM_SCREEN_SIZE) {
    return 22;
  }
  return 40;
}

export default function CloseButton() {
  const [, width] = useWindowSize();

  return (
    <div className={classes.body}>
      <div className={classes.text}>Close</div>
      <div className={classes.icon}>
        <IoMdClose size={iconSize(width)} />
      </div>
    </div>
  );
}
