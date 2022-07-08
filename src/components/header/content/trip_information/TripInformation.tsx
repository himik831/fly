import React from "react";
import ReactDOMServer from "react-dom/server";
import classes from "./TripInformation.module.scss";
import CheckBox from "../../../checkbox/CheckBox.tsx";
import TripInforamtionDetails from "./trip_information_details/TripInforamtionDetails.jsx";
import Localization from "../../../localization/Localization.tsx";
import { BiCalendar } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { DEFAULT } from "../../../../constants/localization/default";
import { useSelector } from "react-redux";
import { LOCALIZATION_ID } from "../../../../constants/enum/enum.tsx";
export default function TripInformation() {
  const languageState = useSelector((state) => state.language.value);

  const departureDate = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.DEPARTURE_DATE}
      defaultValue={DEFAULT.DEPARTURE_DATE}
    />
  );

  const returnDate = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.RETURN_DATE}
      defaultValue={DEFAULT.RETURN_DATE}
    />
  );

  const passengers = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.PASSENGERS}
      defaultValue={DEFAULT.PASSENGERS}
    />
  );

  const searchFly = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.SEARCH_FLY}
      defaultValue={DEFAULT.SEARCH_FLY}
    />
  );

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <CheckBox />
        <div className={classes.trip_information}>
          <div className={classes.departure}>
            <TripInforamtionDetails
              label={departureDate}
              details={"15.05.2022"}
              icon={<BiCalendar size={20} />}
              passangers={false}
            />
          </div>
          <div className={classes.return}>
            <TripInforamtionDetails
              label={returnDate}
              details={"18.05.2022"}
              icon={<BiCalendar size={20} />}
              passangers={false}
            />
          </div>
          <div className={classes.passangers}>
            <TripInforamtionDetails
              label={passengers}
              details={`1 Adult, Econom`}
              icon={<IoIosArrowDown size={20} />}
              passangers={true}
            />
          </div>
        </div>
        <div className={classes.search_button}>{searchFly}</div>
      </div>
    </div>
  );
}
