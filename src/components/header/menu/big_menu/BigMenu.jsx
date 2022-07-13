import React from "react";
import { Link } from "react-router-dom";
import Language from "../language/Language.tsx";
import classes from "./BigMenu.module.scss";

function Menu() {
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <Link to={"/"} className="link">
          <div className={classes.logo}>LOGO</div>
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
