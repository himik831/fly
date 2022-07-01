import React from "react";
import ReactDOMServer from "react-dom/server";
import classes from "./ToDestination.module.scss";
import Localization from "../../../localization/Localization.tsx";
import { DEFAULT } from "../../../../constants/localization/default";
import { useSelector } from "react-redux";
import { LOCALIZATION_ID } from "../../../../constants/enum/enum.tsx";

export default function ToDestination() {
  const languageState = useSelector((state) => state.language.value);
  const example = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.EXAMPLE}
      defaultValue={DEFAULT.EXAMPLE}
    />
  );

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.label}>
          <Localization
            language={languageState}
            id={LOCALIZATION_ID.WHERE}
            defaultValue={DEFAULT.WHERE}
          />
        </div>
        <div className={classes.destination}>Paris</div>
      </div>
    </div>
  );
}
