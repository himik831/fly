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
        <TripInforamtionDetails
          label={"DEPARTURE DATE *"}
          details={"15.05.2022"}
          icon={<BiCalendar size={22} />}
        />
        <TripInforamtionDetails
          label={"RETURN DATE *"}
          details={"18.05.2022"}
          icon={<BiCalendar size={22} />}
        />
        <TripInforamtionDetails
          label={"PASSENGERS *"}
          details={"1 Adult, Econom"}
          icon={<IoIosArrowDown size={22} />}
        />
        <Button label="Search flights" backgroundColor={'#82cdc2'} isFullWidth={true} bold={500}/>
      </div>
    </div>
  );
}
