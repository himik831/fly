import React from "react";
import MainImage from "../../assets/img/mainImg.jpg";
import BigMenu from "./menu/big_menu/BigMenu";
import classes from "./Header.module.scss";
import useWindowSize from "../../hooks/window_size/useWindowSize";
import SmallMenu from "./menu/small_menu/SmallMenu.tsx";
import Welcome from "./welcome/Welcome.tsx";
import Content from "./content/Content.tsx";
import { BIG_SCREEN_SIZE, SMALL_SCREEN_SIZE } from "../../constants/constants";

export default function Header() {
  const [, width] = useWindowSize();
  const image = { backgroundImage: `url(${MainImage})` };

  return (
    <>
      <div className={classes.image} style={image}>
        <div className={classes.content}>
          {width >= BIG_SCREEN_SIZE ? <BigMenu /> : <SmallMenu />}
          {width >= BIG_SCREEN_SIZE ? <Welcome /> : null}
          <Content />
        </div>
      </div>
    </>
  );
}
