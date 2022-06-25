import React from "react";
import classes from "./CheckBox.module.scss";
import Localization from "../localization/Localization.tsx";

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
          <label htmlFor="">
            <Localization
              language={"RO"}
              id={"ROUND_TRIP"}
              defaultValue={"Round trip"}
            />
          </label>
          <input
            type="radio"
            name="selection"
            className={classes.checkbox_round}
          />
          <label htmlFor="">
            <Localization
              language={"RO"}
              id={"ONE_WAY"}
              defaultValue={"One way"}
            />
          </label>
        </form>
      </div>
    </div>
  );
}
