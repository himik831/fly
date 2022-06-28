import React, { useState } from "react";
import classes from "../welcome/Welcome.module.scss";
import "reactjs-popup/dist/index.css";
import { DEFAULT } from "../../../constants/localization/default";
import Localization from "../../localization/Localization.tsx";
import { useSelector } from "react-redux";

export default function Welcome() {
  const language = useSelector((state) => state.language.value);

  return (
    <div className={classes.content}>
      <div className={`${classes.text1} ${classes.color}`}>
        <Localization
          language={language}
          id={"WELCOME_TEXT_1"}
          defaultValue={DEFAULT.WELCOME_TEXT_1}
        />
      </div>
      <div className={`${classes.text2} ${classes.color}`}>
        <Localization
          language={language}
          id={"WELCOME_TEXT_2"}
          defaultValue={DEFAULT.WELCOME_TEXT_2}
        />
      </div>
      <div className={`${classes.text3} ${classes.color}`}>
        <Localization
          language={language}
          id={"WELCOME_TEXT_3"}
          defaultValue={DEFAULT.WELCOME_TEXT_3}
        />
      </div>
    </div>
  );
}
