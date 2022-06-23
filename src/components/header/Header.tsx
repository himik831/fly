import React from "react";
import MainImage from "../../assets/img/mainImg.jpg";
import BigMenu from "./menu/big_menu/BigMenu";
import classes from "./Header.module.scss";
import useWindowSize from "../../hooks/window_size/useWindowSize";
import SmallMenu from "./menu/small_menu/SmallMenu.tsx";
import Welcome from "./welcome/Welcome.tsx";
import Content from "./content/Content.tsx";

export default function Header() {
  const smallScreen: number = 767;
  const bigScreen: number = 1200;

  const [, width] = useWindowSize();
  const image = { backgroundImage: `url(${MainImage})` };

  return (
    <>
      <div className={classes.image} style={image}>
        <div className={classes.content}>
          {width >= smallScreen ? <BigMenu /> : <SmallMenu />}
          {width >= bigScreen ? <Welcome /> : null}
          <Content />
        </div>
      </div>
    </>
  );
}
