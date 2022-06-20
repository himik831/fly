import React from "react";
import classes from "./SmallMenu.module.scss";
import { AiOutlineMenu } from "react-icons/ai";

export default function SmallMenu() {
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.logo}>LOGO</div>
        <div className={classes.menu}>
          <AiOutlineMenu color="#ffffff" size={25} />
        </div>
      </div>
    </div>
  );
}
