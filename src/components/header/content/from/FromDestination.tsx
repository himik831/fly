import React from "react";
import classes from "./FromDestination.module.scss";
import Localization from "../../../localization/Localization.tsx";
import { DEFAULT } from "../../../../constants/localization/default";
import { useSelector } from "react-redux";
import { LOCALIZATION_ID } from "../../../../constants/enum/enum.tsx";

export default function FromDestination() {
  const languageState = useSelector((state) => state.language.value);

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.label}>
          <Localization
            language={languageState}
            id={LOCALIZATION_ID.FROM}
            defaultValue={DEFAULT.FROM}
          />
        </div>
        <div className={classes.destination}>Chisinau, Moldova</div>
      </div>
    </div>
  );
}
