import React from "react";
import classes from "./WeatherDayDetails.module.scss";

export default function WeatherDetails({ date, icon, temperature }) {
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.date}>{date}</div>
        <div className={classes.icon}>{icon}</div>
        <div className={classes.temperature}>{temperature}°C</div>
      </div>
    </div>
  );
}
