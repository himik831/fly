import React from "react";
import classes from "./CheckBox.module.scss";
import Localization from "../localization/Localization.tsx";
import { useSelector } from "react-redux";

export default function CheckBox() {
  const language = useSelector((state) => state.language.value);

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
              language={language}
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
              language={language}
              id={"ONE_WAY"}
              defaultValue={"One way"}
            />
          </label>
        </form>
      </div>
    </div>
  );
}
