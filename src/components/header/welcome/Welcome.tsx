import React, { useState } from "react";
import classes from "../welcome/Welcome.module.scss";
import "reactjs-popup/dist/index.css";

export default function Welcome() {
  return (
    <div className={classes.content}>
      <div className={`${classes.text1} ${classes.color}`}>WHERE</div>
      <div className={`${classes.text2} ${classes.color}`}>DO YOU WANT TO </div>
      <div className={`${classes.text3} ${classes.color}`}>EXPLORE </div>
    </div>
  );
}
