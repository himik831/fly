import React, { useEffect, useState } from "react";
import classes from "./Passenger.module.scss";
import Popup from "reactjs-popup";
import PassangerPopUp from "./passanger_pop_up/PassangerPopUp";
import "react-calendar/dist/Calendar.css";

export default function Passenger({ label, details, icon }) {
  const [passenger, setPassenger] = useState(null);
  //   let selectedDate;
  const contentStyle = {
    padding: 0,
    width: 300,
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.20)",
  };

  useEffect(() => {
    // selectedDate = calendar;
    setPassenger(null);
  }, [passenger]);

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.label}>{label}</div>
        {passenger !== null ? (
          <div className={classes.info}>
            <div className={classes.value}>{details}</div>
            <div className={classes.icon}>{icon}</div>
          </div>
        ) : (
          <Popup
            className={classes.popUp}
            arrow={false}
            trigger={
              <div className={classes.info}>
                <div className={classes.value}>{details}</div>
                <div className={classes.icon}>{icon}</div>
              </div>
            }
            contentStyle={contentStyle}
            overlayStyle={overlayStyle}
            position="center center"
          >
            <PassangerPopUp />
          </Popup>
        )}
        <div className={classes.line} />
      </div>
    </div>
  );
}
