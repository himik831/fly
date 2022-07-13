import React from "react";
import BigMenu from "./menu/big_menu/BigMenu";
import classes from "./Header.module.scss";
import useWindowSize from "../../hooks/window_size/useWindowSize";
import SmallMenu from "./menu/small_menu/SmallMenu.tsx";
import { BIG_SCREEN_SIZE} from "../../constants/constants";

export default function Header({ image, content ,welcome} ) {
  const [, width] = useWindowSize();

  return (
    <>
      <div className={classes.image} style={image}>
        <div className={classes.content}>
          {width >= BIG_SCREEN_SIZE ? <BigMenu /> : <SmallMenu />}
          {width >= BIG_SCREEN_SIZE ? welcome: null}
          {content}
        </div>
      </div>
    </>
  );
}
