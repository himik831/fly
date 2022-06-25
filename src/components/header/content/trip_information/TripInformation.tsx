import React from "react";
import classes from "./TripInformation.module.scss";
import CheckBox from "../../../checkbox/CheckBox.tsx";
import TripInforamtionDetails from "./trip_information_details/TripInforamtionDetails.tsx";
import Localization from "../../../localization/Localization.tsx";
import Button from "../../../button/Button.jsx";
import { BiCalendar } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { DEFAULT } from "../../../../constants/localization/default";

export default function TripInformation() {

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <CheckBox />
        <div className={classes.trip_information}>
          <div className={classes.departure}>
            <TripInforamtionDetails
              label={
                <Localization
                  language={"RO"}
                  id={"DEPARTURE_DATE"}
                  defaultValue={DEFAULT.DEPARTURE_DATE}
                />
              }
              details={"15.05.2022"}
              icon={<BiCalendar size={20} />}
            />
          </div>
          <div className={classes.return}>
            <TripInforamtionDetails
              label={
                <Localization
                  language={"RO"}
                  id={"RETURN_DATE"}
                  defaultValue={DEFAULT.RETURN_DATE}
                />
              }
              details={"18.05.2022"}
              icon={<BiCalendar size={20} />}
            />
          </div>
          <div className={classes.passangers}>
            <TripInforamtionDetails
              label={
                <Localization
                  language={"RO"}
                  id={"PASSENGERS"}
                  defaultValue={DEFAULT.PASSENGERS}
                />
              }
              details={`1 Adult, Econom`}
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
