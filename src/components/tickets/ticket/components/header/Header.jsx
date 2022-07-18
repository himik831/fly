import classes from "./Header.module.scss";
import { BIG_SCREEN_SIZE } from "../../../../../constants/constants";
import useWindowSize from "../../../../../hooks/window_size/useWindowSize";
export default function Header({ airlines, price }) {
  const [, width] = useWindowSize();

  return (
    <div className={classes.header}>
      {BIG_SCREEN_SIZE >= width ? (
        <div className={classes.companies}>
          {airlines.map((element, index) => {
            return (
              <div className={classes.circle} key={index}>
                {element}
              </div>
            );
          })}
        </div>
      ) : null}
      {BIG_SCREEN_SIZE >= width ? (
        <div className={classes.price}>€ {price}</div>
      ) : null}
    </div>
  );
}
