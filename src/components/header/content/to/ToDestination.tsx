import React from "react";
import classes from "./ToDestination.module.scss";

export default function ToDestination() {
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.label}>WHERE?</div>
        <div className={classes.destination}>Nice, France</div>
      </div>
    </div>
  );
}
