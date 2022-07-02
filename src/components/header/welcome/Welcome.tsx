import React from "react";
import ReactDOMServer from "react-dom/server";
import classes from "../welcome/Welcome.module.scss";
import "reactjs-popup/dist/index.css";
import { DEFAULT } from "../../../constants/localization/default";
import Localization from "../../localization/Localization.tsx";
import { useSelector } from "react-redux";
import { LOCALIZATION_ID } from "../../../constants/enum/enum.tsx";

export default function Welcome() {
  const languageState = useSelector((state) => state.language.value);

  const wText1 = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.WELCOME_TEXT_1}
      defaultValue={DEFAULT.WELCOME_TEXT_1}
    />
  );

  const wText2 = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.WELCOME_TEXT_2}
      defaultValue={DEFAULT.WELCOME_TEXT_2}
    />
  );

  const wText3 = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.WELCOME_TEXT_3}
      defaultValue={DEFAULT.WELCOME_TEXT_3}
    />
  );

  return (
    <div className={classes.content}>
      <div className={`${classes.text1} ${classes.color}`}>{wText1}</div>
      <div className={`${classes.text2} ${classes.color}`}>{wText2}</div>
      <div className={`${classes.text3} ${classes.color}`}>{wText3}</div>
    </div>
  );
}
