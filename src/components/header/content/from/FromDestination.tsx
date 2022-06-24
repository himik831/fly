import React, { useState } from "react";
import classes from "./FromDestination.module.scss";

export default function FromDestination() {
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.label}>FROM</div>
        <div className={classes.destination}>Chisinau, Moldova</div>
      </div>
    </div>
  );
}
