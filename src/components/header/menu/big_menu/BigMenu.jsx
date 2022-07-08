import React from "react";
import Language from "../language/Language.tsx";
import classes from "./BigMenu.module.scss";

function Menu() {
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.logo}> LOGO </div>
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
