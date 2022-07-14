import classes from "./Header.module.scss";
import { BIG_SCREEN_SIZE } from "../../../../../constants/constants";
import useWindowSize from "../../../../../hooks/window_size/useWindowSize";
export default function Header() {
  const [, width] = useWindowSize();

  return (
    <div className={classes.header}>
      {BIG_SCREEN_SIZE >= width ? (
        <div className={classes.companies}>
          <div className={classes.circle}>1</div>
        </div>
      ) : null}
      {BIG_SCREEN_SIZE >= width ? (
        <div className={classes.price}>$ 123</div>
      ) : null}
    </div>
  );
}
