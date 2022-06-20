import React from "react";
import classes from "./TripInformationDetails.module.scss";

export default function TripInforamtionDetails({
  label = "No label",
  details = "No details",
  icon,
}) {
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.label}>{label}</div>
        <div className={classes.destination}>
          <div className={classes.date}>{details}</div>
          <div className={classes.icon}>{icon}</div>
        </div>
        <div className={classes.line} />
      </div>
    </div>
  );
}
