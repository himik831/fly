import React from "react";
import Button from "../../../button/Button";
import Language from "../language/Language.tsx";
import classes from "./BigMenu.module.scss"

function contacts() {
  return console.log("Contacts clicked");
}

function blog() {
  return console.log("Blog clicked");
}

function Menu() {
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.logo}> LOGO </div>
        <div className={classes.menu}>
          <Button label="Blog" action={blog} />
          <Button label="Contacts" action={contacts} />
          <Language />
        </div>
      </div>
    </div>
  );
}

export default Menu;
