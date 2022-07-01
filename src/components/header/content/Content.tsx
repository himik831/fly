import React from "react";
import { useSelector } from "react-redux";
import classes from "./Content.module.scss";
import FromDestination from "./from/FromDestination.tsx";
import ToDestination from "./to/ToDestination.tsx";
import TripInformation from "./trip_information/TripInformation.tsx";
import Weather from "./weather/Weather.tsx";

export default function Content() {
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.fly_information}>
          <div className={classes.destination}>
            <div className={classes.from}>
              <FromDestination />
            </div>
            <div className={classes.where}>
              <ToDestination />
            </div>
          </div>
          <div className={classes.trip_information}>
            <TripInformation />
          </div>
        </div>
        <div className={classes.weather}>
          <Weather />
        </div>
      </div>
    </div>
  );
}
