import React from "react";
import { Link } from "react-router-dom";
import Language from "../language/Language.tsx";
import classes from "./BigMenu.module.scss";
import LOGO from "../../../../assets/svg/skyflyLogo.svg"

function Menu() {
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <Link to={"/"} className="link">
          <div className={classes.logo}>
            <img src={LOGO} alt="" />
          </div>
        </Link>
        <div className={classes.menu}>
          <div className={classes.blog}>Blog</div>
          <div className={classes.contacts}>Contacts</div>
          <div className={classes.language}>
            <Language />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
