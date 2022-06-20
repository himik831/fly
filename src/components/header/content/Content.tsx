import React from "react";
import classes from "./Content.module.scss";
import FromDestination from "./from/FromDestination.tsx";
import ToDestination from "./to/ToDestination.tsx";
import TripInformation from "./trip_information/TripInformation.tsx";

export default function Content() {
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.fly_information}>
          <div className={classes.from}>
            <FromDestination />
          </div>
          <div className={classes.where}>
            <ToDestination />
          </div>
          <div className={classes.trip_information}>
            <TripInformation />
          </div>
        </div>
        <div className={classes.weather}>weather</div>
      </div>
    </div>
  );
}
