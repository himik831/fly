import React, { useEffect, useState } from "react";
import classes from "./Calendars.module.scss";
import Popup from "reactjs-popup";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Calendars({ label, details, icon }) {
  const [calendar, setCalendar] = useState(null);
  let selectedDate;
  const contentStyle = {
    padding: 0,
    width: 300,
  };

  useEffect(() => {
    selectedDate = calendar;
    setCalendar(null);
  }, [calendar]);

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.label}>{label}</div>
        {calendar !== null ? (
          <div className={classes.info}>
            <div className={classes.value}>{details}</div>
            <div className={classes.icon}>{icon}</div>
          </div>
        ) : (
          <Popup
            arrow={false}
            trigger={
              <div className={classes.info}>
                <div className={classes.value}>{details}</div>
                <div className={classes.icon}>{icon}</div>
              </div>
            }
            contentStyle={contentStyle}
            position="center center"
          >
            <Calendar onChange={setCalendar} value={calendar} />
          </Popup>
        )}
        <div className={classes.line} />
      </div>
    </div>
  );
}
