import React, { useEffect, useState } from "react";
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
export default function TripInformation(selectedDepartureAndReturnDateProp) {
  const languageState = useSelector((state) => state.language.value);

  const onSelectedDepartureDate = (departureDate) => {
    console.log("onSelectedDeparture: ", departureDate);
  };

  const onSelectedReturnDate = (returnDate) => {
    console.log("onSelectedReturn: ", returnDate);
  };

  const onSelectedPassangersInfo = (passangers) => {
    console.log("onSelectedPassangersInfo: ", passangers);
  };

  console.log(
    "selectedDepartureAndReturnDateProp",
    selectedDepartureAndReturnDateProp
  );

  const onSelectedTripType = (tripType) => {
    console.log("tripType: ", tripType);
  };

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

  const selectDepartureDate = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.SELECT_DEPARTURE_DATE}
      defaultValue={DEFAULT.SELECT_DEPARTURE_DATE}
    />
  );

  const selectReturnDate = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.SELECT_RETURN_DATE}
      defaultValue={DEFAULT.SELECT_RETURN_DATE}
    />
  );

  const example = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.EXAMPLE}
      defaultValue={DEFAULT.EXAMPLE}
    />
  );

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <CheckBox onTripType={onSelectedTripType} />
        <div className={classes.trip_information}>
          <div className={classes.departure}>
            <TripInforamtionDetails
              calendarLabel={selectDepartureDate}
              label={departureDate}
              details={example}
              icon={<BiCalendar size={20} />}
              passangers={false}
              onSelectedValue={onSelectedDepartureDate}
            />
          </div>
          <div className={classes.return}>
            <TripInforamtionDetails
              calendarLabel={selectReturnDate}
              label={returnDate}
              details={example}
              icon={<BiCalendar size={20} />}
              passangers={false}
              onSelectedValue={onSelectedReturnDate}
            />
          </div>
          <div className={classes.passangers}>
            <TripInforamtionDetails
              calendarLabel={""}
              label={passengers}
              details={example}
              icon={<IoIosArrowDown size={20} />}
              passangers={true}
              onSelectedValue={onSelectedPassangersInfo}
            />
          </div>
        </div>
        <div className={classes.search_button}>{searchFly}</div>
      </div>
    </div>
  );
}
