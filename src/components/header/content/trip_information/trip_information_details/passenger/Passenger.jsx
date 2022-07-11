import React, { useState } from "react";
import classes from "./Passenger.module.scss";
import Popup from "reactjs-popup";
import PassangerPopUp from "./passanger_pop_up/PassangerPopUp";
import "react-calendar/dist/Calendar.css";
import useWindowSize from "../../../../../../hooks/window_size/useWindowSize";
import { SMALL_SCREEN_SIZE } from "../../../../../../constants/constants";

export default function Passenger({ label, details, icon }) {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [, width] = useWindowSize();

  const contentStyle = {
    padding: 0,
    border: "none",
    width: width > SMALL_SCREEN_SIZE ? 600 : 320,
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.20)",
  };

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.label}>{label}</div>
        <div className={classes.info} onClick={() => setOpenPopUp(true)}>
          <div className={classes.value}>{details}</div>
          <div className={classes.icon}>{icon}</div>
        </div>
        <Popup
          onClose={() => setOpenPopUp(false)}
          open={openPopUp}
          arrow={false}
          contentStyle={contentStyle}
          overlayStyle={overlayStyle}
        >
          <PassangerPopUp onClose={setOpenPopUp} />
        </Popup>
        <div className={classes.line} />
      </div>
    </div>
  );
}
