import React from "react";
import classes from "./CheckBox.module.scss";

export default function CheckBox() {
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <form>
          <input
            type="radio"
            name="selection"
            className={classes.checkbox_round}
          />
          <label htmlFor="">Round Trip</label>
          <input
            type="radio"
            name="selection"
            className={classes.checkbox_round}
          />
          <label htmlFor="">One way</label>
        </form>
      </div>
    </div>
  );
}
