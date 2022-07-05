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
import searchCityAirports from "../../../hooks/api/search_location/useSearchLocation.ts";

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

function example(language: string, destination: string) {
  return `${ReactDOMServer.renderToString(
    <Localization
      language={language}
      id={LOCALIZATION_ID.EXAMPLE}
      defaultValue={DEFAULT.EXAMPLE}
    />
  )}: ${destination}`;
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
  const [searchType, setSearchType] = useState(null);
  const [cityAirports, setCityAirports] = useState<Airports[]>([]);



  const onChangeDestination = (value) => {
    setLocation(value);
  };

  const onSearchType = (value) => {
    setSearchType(value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (location !== null && location !== "" && location.length >= 3) {
        searchCityAirports(location).then(setCityAirports);
      } else {
        setCityAirports([]);
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
                label={from(languageState)}
                example={example(languageState, "Moldova")}
                type={DESTINATION_SEARCH_TYPE.FROM}
                onChange={onChangeDestination}
                onSearchType={onSearchType}
              />
              {location !== "" &&
              searchType === DESTINATION_SEARCH_TYPE.FROM ? (
                <Results cityAirports={cityAirports} />
              ) : null}
            </div>
            <div className={classes.where}>
              <SearchDestination
                label={where(languageState)}
                example={example(languageState, "Paris")}
                type={DESTINATION_SEARCH_TYPE.WHERE}
                onChange={onChangeDestination}
                onSearchType={onSearchType}
              />
              {location !== "" &&
              searchType === DESTINATION_SEARCH_TYPE.WHERE ? (
                <Results cityAirports={cityAirports} />
              ) : null}
            </div>
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
