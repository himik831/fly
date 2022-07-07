import classes from "./Results.module.scss";
import ReactDOMServer from "react-dom/server";
import { useSelector } from "react-redux";
import { GrLocation } from "react-icons/gr";
import { MdAirplanemodeActive } from "react-icons/md";
import Localization from "../../../../localization/Localization.tsx";
import { LOCALIZATION_ID } from "../../../../../constants/enum/enum.tsx";
import { DEFAULT } from "../../../../../constants/localization/default";
import { useState } from "react";

export default function Results({ cityAirports, onSelectedValue }) {
  const languageState = useSelector((state) => state.language.value);

  const [selectedValue, setSelectedValue] = useState("");

  const noResult = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.NO_RESULT}
      defaultValue={DEFAULT.NO_RESULT}
    />
  );

  const searchInAnotherWay = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.SEARCH_IN_ANOTHER_WAY}
      defaultValue={DEFAULT.SEARCH_IN_ANOTHER_WAY}
    />
  );

  const cityFrom = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.CITY_FROM}
      defaultValue={DEFAULT.CITY_FROM}
    />
  );

  const timezone = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.TIMEZONE}
      defaultValue={DEFAULT.TIMEZONE}
    />
  );

  return (
    <div className={classes.body}>
      {cityAirports.map((el, index) => {
        console.log("el.id", el.id);
        return el.id && selectedValue === "" ? (
          <div className={classes.content} key={index}>
            <div className={classes.location}>
              <div className={classes.icon}>
                <GrLocation size={20} />
              </div>
              <div className={classes.information}>
                <div className={classes.label}>
                  {el.id === "" ? noResult : el.city}
                </div>
                <div className={classes.description}>{`${
                  el.id === "" ? searchInAnotherWay : cityFrom
                } ${el.country}`}</div>
              </div>
            </div>
            {el.airports.map((value, index2) => (
              <div
                className={classes.airports}
                onClick={() => {
                  setSelectedValue(value.id);
                  onSelectedValue(value.name, value.id);
                }}
                key={index2}
              >
                <div className={classes.icon_free}>
                  <MdAirplanemodeActive
                    size={20}
                    className={classes.reactIcon}
                  />
                </div>
                <div className={classes.icon}>
                  <MdAirplanemodeActive size={20} />
                </div>
                <div className={classes.information}>
                  <div className={classes.label}>
                    {`${value.name} `}
                    <span>{`${value.id}`}</span>
                  </div>
                  <div className={classes.description}>
                    {timezone} {value.timezone}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null;
      })}
    </div>
  );
}
