import React from "react";
import classes from "./ToDestination.module.scss";
import Localization from "../../../localization/Localization.tsx";
import { DEFAULT } from "../../../../constants/localization/default";
import { useSelector } from "react-redux";

export default function ToDestination() {
  const language = useSelector((state) => state.language.value);

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.label}>
          <Localization
            language={language}
            id={"WHERE"}
            defaultValue={DEFAULT.WHERE}
          />
        </div>
        <div className={classes.destination}>Nice, France</div>
      </div>
    </div>
  );
}
