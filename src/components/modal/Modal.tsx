import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import classes from "./Modal.module.scss";
import { SMALL_SCREEN_SIZE, BIG_SCREEN_SIZE } from "../../constants/constants";
import CloseButton from "./close_button/CloseButton.tsx";
import HeaderText from "./header_text/HeaderText.tsx";

function popUpSize(type: string, screenSize: number) {
  const smallPopUp = {
    width: `300px`,
    height: `400px`,
  };
  const bigPopUp = {
    width: `400px`,
    height: `500px`,
  };
  const extraBigPopUp = {
    width: `1000px`,
    height: `1000px`,
  };

  const popUpType = {
    DESTINATION_FROM_TO:
      screenSize <= SMALL_SCREEN_SIZE
        ? smallPopUp
        : screenSize > SMALL_SCREEN_SIZE && screenSize <= BIG_SCREEN_SIZE
        ? bigPopUp
        : extraBigPopUp,
  };

  return popUpType[type];
}

export default function Modal({ trigger, popUpType, content, screenSize }) {
  return (
    <Popup
      trigger={trigger}
      modal
      nested
      contentStyle={popUpSize(popUpType, screenSize)}
    >
      {
        <div className={classes.body}>
          <div className={classes.header}>
            <div className={classes.action_left}>
              <HeaderText />
            </div>
            <div className={classes.action_right}>
              <CloseButton />
            </div>
          </div>
          <div className={classes.line} />
          <div className={classes.content}>{content}</div>
        </div>
      }
    </Popup>
  );
}
