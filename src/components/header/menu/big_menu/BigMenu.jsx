import React from "react";
import Button from "../../../button/Button";
import LanguageSvg from "../../../../assets/svg/language.svg";
import classes from "./BigMenu.module.scss";

function Menu() {
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.logo}> LOGO </div>
        <div className={classes.menu}>
          <Button label="Blog" />
          <Button label="Contacts" />
          <img src={LanguageSvg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Menu;
