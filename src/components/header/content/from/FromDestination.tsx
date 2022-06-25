import React from "react";
import classes from "./FromDestination.module.scss";
import Localization from "../../../localization/Localization.tsx";
import { DEFAULT } from "../../../../constants/localization/default";

export default function FromDestination() {
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.label}>
          <Localization
            language={"RO"}
            id={"FROM"}
            defaultValue={DEFAULT.FROM}
          />
        </div>
        <div className={classes.destination}>Chisinau, Moldova</div>
      </div>
    </div>
  );
}
