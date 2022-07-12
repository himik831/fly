import React, { useState } from "react";
import classes from "./Passenger.module.scss";
import Popup from "reactjs-popup";
import PassangerPopUp from "./passanger_pop_up/PassangerPopUp";
import "react-calendar/dist/Calendar.css";
import ReactDOMServer from "react-dom/server";
import Localization from "../../../../../localization/Localization.tsx";
import useWindowSize from "../../../../../../hooks/window_size/useWindowSize";
import { LOCALIZATION_ID } from "../../../../../../constants/enum/enum.tsx";
import { SMALL_SCREEN_SIZE } from "../../../../../../constants/constants";
import { FaChild } from "react-icons/fa";
import { MdChildFriendly } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { DEFAULT } from "../../../../../../constants/localization/default";

export default function Passenger({ label, details, icon, onSelectedValue }) {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [passangersInfo, setPassangersInfo] = useState(null);
  const exampleStyle = { color: "#777777", fontWeight: 100, fontSize: "14px" };
  const [, width] = useWindowSize();
  const languageState = useSelector((state) => state.language.value);

  const contentStyle = {
    padding: 0,
    border: "none",
    width: width > SMALL_SCREEN_SIZE ? 600 : 320,
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.20)",
  };

  useEffect(() => {
    if (passangersInfo !== null) {
      setOpenPopUp(false);
      onSelectedValue(passangersInfo);
    }
  }, [passangersInfo]);

  function airflyType(airflyType) {
    switch (airflyType) {
      case LOCALIZATION_ID.ECONOM:
        return ReactDOMServer.renderToString(
          <Localization
            language={languageState}
            id={LOCALIZATION_ID.ECONOM}
            defaultValue={DEFAULT.ECONOM}
          />
        );
      case LOCALIZATION_ID.CONFORT:
        return ReactDOMServer.renderToString(
          <Localization
            language={languageState}
            id={LOCALIZATION_ID.CONFORT}
            defaultValue={DEFAULT.CONFORT}
          />
        );
      case LOCALIZATION_ID.BUSINESS:
        return ReactDOMServer.renderToString(
          <Localization
            language={languageState}
            id={LOCALIZATION_ID.BUSINESS}
            defaultValue={DEFAULT.BUSINESS}
          />
        );
      case LOCALIZATION_ID.FIRST_CLASS:
        return ReactDOMServer.renderToString(
          <Localization
            language={languageState}
            id={LOCALIZATION_ID.FIRST_CLASS}
            defaultValue={DEFAULT.FIRST_CLASS}
          />
        );
    }
  }

  function generatePassangerDetaile(passangersInfo) {
    return (
      <div className={classes.det}>
        {passangersInfo.adultNumber >= 1 ? (
          <div className={classes.bsFillPersonFill}>
            {passangersInfo.adultNumber}
            <BsFillPersonFill size={14} />
            {`,`}
          </div>
        ) : null}
        {passangersInfo.childrenNumber > 0 ? (
          <div className={classes.faChild}>
            {passangersInfo.adultNumber}
            <FaChild size={12} />
            {`,`}
          </div>
        ) : null}
        {passangersInfo.babiesNumber > 0 ? (
          <div className={classes.mdChildFriendly}>
            {passangersInfo.babiesNumber}
            <MdChildFriendly size={14} />
            {`,`}
          </div>
        ) : null}
        <div className={classes.type}>
          {airflyType(passangersInfo.airfyType)}
        </div>
      </div>
    );
  }

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.label}>{label}</div>
        <div className={classes.info} onClick={() => setOpenPopUp(true)}>
          {passangersInfo === null ? (
            <div className={classes.value} style={exampleStyle}>
              {details}
            </div>
          ) : (
            <div className={classes.value}>
              {generatePassangerDetaile(passangersInfo)}
            </div>
          )}
          <div className={classes.icon}>{icon}</div>
        </div>
        <Popup
          onClose={() => setOpenPopUp(false)}
          open={openPopUp}
          arrow={false}
          contentStyle={contentStyle}
          overlayStyle={overlayStyle}
        >
          <PassangerPopUp
            onClose={setOpenPopUp}
            onPassangersInfo={setPassangersInfo}
          />
        </Popup>
        <div className={classes.line} />
      </div>
    </div>
  );
}
