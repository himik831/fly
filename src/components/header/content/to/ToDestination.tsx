import React from "react";
import classes from "./ToDestination.module.scss";
import Localization from "../../../localization/Localization.tsx";
import { DEFAULT } from "../../../../constants/localization/default";

export default function ToDestination() {
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.label}>
          <Localization
            language={"RO"}
            id={"WHERE"}
            defaultValue={DEFAULT.WHERE}
          />
        </div>
        <div className={classes.destination}>Nice, France</div>
      </div>
    </div>
  );
}
