import React from "react";
import classes from "./CountryWeather.module.scss";

export default function CountryWeather({ temperature, place, date, icon }) {
  return (
    <div className={classes.content}>
      <div className={classes.temperature}>{temperature} °</div>
      <div className={classes.city_information}>
        <div className={classes.place}>{place}</div>
        <div className={classes.date}>{date}</div>
      </div>
      <div className={classes.icon}>{icon}</div>
    </div>
  );
}
