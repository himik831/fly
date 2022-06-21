import React from "react";
import classes from "./TripInformation.module.scss";
import CheckBox from "../../../checkbox/CheckBox.tsx";
import TripInforamtionDetails from "./trip_information_details/TripInforamtionDetails.tsx";
import Button from "../../../button/Button.jsx";
import { BiCalendar } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

export default function TripInformation() {
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <CheckBox />
        <div className={classes.trip_information}>
          <div className={classes.departure}>
            <TripInforamtionDetails
              label={"DEPARTURE DATE *"}
              details={"15.05.2022"}
              icon={<BiCalendar size={20} />}
            />
          </div>
          <div className={classes.return}>
            <TripInforamtionDetails
              label={"RETURN DATE *"}
              details={"18.05.2022"}
              icon={<BiCalendar size={20} />}
            />
          </div>
          <div className={classes.passangers}>
            <TripInforamtionDetails
              label={"PASSENGERS *"}
              details={"1 Adult, Econom"}
              icon={<IoIosArrowDown size={20} />}
            />
          </div>
        </div>
        <Button
          label="Search flights"
          backgroundColor={"#82cdc2"}
          isFullWidth={true}
          bold={500}
        />
      </div>
    </div>
  );
}
