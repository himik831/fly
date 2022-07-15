import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ReactDOMServer from "react-dom/server";
import classes from "./Content.module.scss";
import SearchDestination from "./search_destination/SearchDestination.tsx";
import TripInformation from "./trip_information/TripInformation.tsx";
import Weather from "./weather/Weather.tsx";
import Localization from "../../localization/Localization.tsx";
import { LOCALIZATION_ID } from "../../../constants/enum/enum.tsx";
import { DEFAULT } from "../../../constants/localization/default";
import Results from "./search_destination/results/Results.tsx";
import { useState } from "react";
import { DESTINATION_SEARCH_TYPE } from "../../../constants/enum/enum.tsx";
import searchCityAirports from "../../../hooks/api/search_location/searchCityAirports.ts";

function from(language: string) {
  return ReactDOMServer.renderToString(
    <Localization
      language={language}
      id={LOCALIZATION_ID.FROM}
      defaultValue={DEFAULT.FROM}
    />
  );
}

function where(language: string) {
  return ReactDOMServer.renderToString(
    <Localization
      language={language}
      id={LOCALIZATION_ID.WHERE}
      defaultValue={DEFAULT.WHERE}
    />
  );
}

interface Airports {
  id: string;
  city: string;
  country: string;
  airports: [{ codeIata: string; name: string; timezone: string }];
}

export default function Content() {
  const languageState = useSelector((state) => state.language.value);
  const [location, setLocation] = useState("");
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedDeparture, setSelectedDeparture] = useState(null);
  const [
    selectedDepartureAndDestinationDate,
    setSelectedDepartureAndDestinationDate,
  ] = useState({ departure: "", destination: "" });
  const [cityAirports, setCityAirports] = useState<Airports[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    setSelectedDepartureAndDestinationDate({
      departure: selectedDeparture,
      destination: selectedDestination,
    });
  }, [selectedDeparture, selectedDestination]);

  const example = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.EXAMPLE}
      defaultValue={DEFAULT.EXAMPLE}
    />
  );

  const onSelectedDestination = (airport) => {
    setSelectedDestination({ airport: airport.name, codeIata: airport.id });
  };

  const onSelectedDeparture = (airport) => {
    setSelectedDeparture({ airport: airport.name, codeIata: airport.id });
  };

  const onChange = (value) => {
    setLocation(value);
  };

  useEffect(() => {
    setLoadingData(true);
  }, [cityAirports]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (location.length < 3) {
        setLoadingData(false);
      }
      if (location !== null && location !== "" && location.length >= 3) {
        searchCityAirports(location).then(setCityAirports);
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.fly_information}>
          <div className={classes.destination}>
            <div className={classes.from}>
              <SearchDestination
                cityAirports={cityAirports}
                label={from(languageState)}
                value={selectedDeparture}
                loadingData={loadingData}
                example={example}
                onChange={onChange}
                onSelectedValue={onSelectedDeparture}
              />
            </div>
            <div className={classes.where}>
              <SearchDestination
                value={selectedDestination}
                cityAirports={cityAirports}
                label={where(languageState)}
                loadingData={loadingData}
                example={example}
                onChange={onChange}
                onSelectedValue={onSelectedDestination}
              />
            </div>
          </div>
          <div className={classes.trip_information}>
            <TripInformation
              selectedDepartureAndDestination={
                selectedDepartureAndDestinationDate
              }
            />
          </div>
        </div>
        <div className={classes.weather}>
          <Weather />
        </div>
      </div>
    </div>
  );
}
