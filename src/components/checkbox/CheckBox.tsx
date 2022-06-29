import React from "react";
import classes from "./CheckBox.module.scss";
import Localization from "../localization/Localization.tsx";
import { useSelector } from "react-redux";
import { DEFAULT } from "../../constants/localization/default";
import { LOCALIZATION_ID } from "../../constants/enum/enum.tsx";

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
              id={LOCALIZATION_ID.ROUND_TRIP}
              defaultValue={DEFAULT.ROUND_TRIP}
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
              id={LOCALIZATION_ID.ONE_WAY}
              defaultValue={DEFAULT.ONE_WAY}
            />
          </label>
        </form>
      </div>
    </div>
  );
}
