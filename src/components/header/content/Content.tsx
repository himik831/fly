import React from "react";
import classes from "./Content.module.scss";
import FromDestination from "./from/FromDestination.tsx";
import ToDestination from "./to/ToDestination.tsx";
import TripInformation from "./trip_information/TripInformation.tsx";
import Weather from "./weather/Weather.tsx";
import Modal from "../../modal/Modal.tsx";
import FromPopUp from "./from/from_pop_up/FromPopUp.tsx";
import useWindowSize from "../../../hooks/window_size/useWindowSize";
import { AIRPANE_ORIENTATION } from "../../../constants/enum/enum.tsx";

function from() {
  return (
    <div className={classes.from}>
      <FromDestination />
    </div>
  );
}

function to() {
  return (
    <div className={classes.where}>
      <ToDestination />
    </div>
  );
}

export default function Content() {
  const [, width] = useWindowSize();
  
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.fly_information}>
          <div className={classes.destination}>
            <Modal
              trigger={from()}
              popUpType={"DESTINATION_FROM_TO"}
              content={<FromPopUp />}
              screenSize={width}
              headerText={"FROM"}
              airplaneOrientation={AIRPANE_ORIENTATION.UP}
            />
            <Modal
              trigger={to()}
              popUpType={"DESTINATION_FROM_TO"}
              content={<FromPopUp />}
              screenSize={width}
              headerText={"WHERE?"}
              airplaneOrientation={AIRPANE_ORIENTATION.DOWN}
            />
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
