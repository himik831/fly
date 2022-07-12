import React from "react";
import Calendars from "./calendar/Calendars.tsx";
import Passenger from "./passenger/Passenger";

export default function TripInforamtionDetails({
  label = "No label",
  details = "No details",
  icon,
  passangers,
  calendarLabel,
  onSelectedValue,
}) {
  return passangers ? (
    <Passenger label={label} details={details} icon={icon} onSelectedValue={onSelectedValue}/>
  ) : (
    <Calendars
      label={label}
      details={details}
      icon={icon}
      calendarLabel={calendarLabel}
      onSelectedDate={onSelectedValue}
    />
  );
}
