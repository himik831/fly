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
import { Link } from "react-router-dom";
import { LOCALIZATION_ID } from "../../../../constants/enum/enum.tsx";

interface TicketDetails {
  departure: { airport: string; codeIata: string };
  destination: { airport: string; codeIata: string };
  ticketType: string;
  returnDate: string;
  passangers: {
    adultNumber: number;
    airfyType: string;
    babiesNumber: number;
    childrenNumber: number;
  };
}

export default function TripInformation(selectedDepartureAndDestination) {
  const languageState = useSelector((state) => state.language.value);

  const [destinationAndDeparture, setSestinationAndDeparture] = useState(
    selectedDepartureAndDestination
  );
  const [ticketDetails, setTicketDetails] = useState<TicketDetails>({
    departure: { airport: "", codeIata: "" },
    destination: { airport: "", codeIata: "" },
    ticketType: "",
    returnDate: "",
    passangers: {
      adultNumber: null,
      airfyType: "",
      babiesNumber: null,
      childrenNumber: null,
    },
  });

  const onSelectedDepartureDate = (departureDate) => {
    setTicketDetails((prev) => {
      return { ...prev, departureDate: departureDate };
    });
  };

  const onSelectedReturnDate = (returnDate) => {
    setTicketDetails((prev) => {
      return { ...prev, returnDate: returnDate };
    });
  };

  const onSelectedPassangersInfo = (passangers) => {
    setTicketDetails((prev) => {
      return {
        ...prev,
        passangers: {
          adultNumber: passangers.adultNumber,
          airfyType: passangers.airfyType,
          babiesNumber: passangers.babiesNumber,
          childrenNumber: passangers.childrenNumber,
        },
      };
    });
  };

  useEffect(() => {
    return (
      setSestinationAndDeparture(selectedDepartureAndDestination),
      setTicketDetails((prev) => {
        return {
          ...prev,
          departure:
            destinationAndDeparture.selectedDepartureAndDestination.departure,
          destination:
            destinationAndDeparture.selectedDepartureAndDestination.destination,
        };
      })
    );
  }, [selectedDepartureAndDestination]);

  const onSelectedTripType = (tripType) => {
    setTicketDetails((prev) => {
      return { ...prev, ticketType: tripType };
    });
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
        <Link to={"/tickets"} className="link" state={ticketDetails}>
          <div className={classes.search_button}>{searchFly}</div>
        </Link>
      </div>
    </div>
  );
}
