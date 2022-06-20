import React from "react";
import classes from "./TripInformation.module.scss";
import CheckBox from "../../../checkbox/CheckBox.tsx";
import Calendar from "../../../calendar/Calendar.tsx";

export default function TripInformation() {
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <CheckBox />
        <Calendar />
      </div>
    </div>
  );
}
