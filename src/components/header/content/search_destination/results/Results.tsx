import classes from "./Results.module.scss";
import ReactDOMServer from "react-dom/server";
import { useSelector } from "react-redux";
import { GrLocation } from "react-icons/gr";
import { MdAirplanemodeActive } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import Localization from "../../../../localization/Localization.tsx";
import { LOCALIZATION_ID } from "../../../../../constants/enum/enum.tsx";
import { DEFAULT } from "../../../../../constants/localization/default";
import { useEffect } from "react";

export default function Results({ cityAirports }) {
  const languageState = useSelector((state) => state.language.value);

  let jop = [];

  if (cityAirports) {
    jop = cityAirports;
    console.log(jop);
  }

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

  function selectedvalue(airport, iata) {
    console.log(airport, iata);
  }

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        {jop.map((el, index) => {
          return (
            <div key={index}>
              <div className={classes.location}>
                <div className={classes.icon}>
                  <GrLocation size={20} />
                </div>
                <div className={classes.information}>
                  <div className={classes.label}>{el.city}</div>
                  <div
                    className={classes.description}
                  >{`${cityFrom} ${el.country}`}</div>
                </div>
              </div>
              {el.airports.map((value, index2) => (
                <div
                  className={classes.airports}
                  onClick={() => selectedvalue(value.name, value.id)}
                  key={index2}
                >
                  <div className={classes.icon_free}>
                    <MdAirplanemodeActive size={20} />
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
          );
        })}
      </div>
    </div>
  );
}
