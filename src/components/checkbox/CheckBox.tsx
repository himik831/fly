import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import classes from "./CheckBox.module.scss";
import Localization from "../localization/Localization.tsx";
import { useSelector } from "react-redux";
import { DEFAULT } from "../../constants/localization/default";
import { LOCALIZATION_ID,TRIP_TYPE } from "../../constants/enum/enum.tsx";

export default function CheckBox({ onTripType }) {
  const languageState = useSelector((state) => state.language.value);

  const [tripType, setTripType] = useState(TRIP_TYPE.ROUND_TRIP);

  useEffect(() => onTripType(tripType), [tripType]);

  const roundTrip = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.ROUND_TRIP}
      defaultValue={DEFAULT.ROUND_TRIP}
    />
  );
  const oneWay = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.ONE_WAY}
      defaultValue={DEFAULT.ONE_WAY}
    />
  );

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <form>
          <input
            id="roundTrip"
            type="radio"
            name="selection"
            defaultChecked={true}
            className={classes.checkbox_round}
            onClick={() => setTripType(TRIP_TYPE.ROUND_TRIP)}
          />
          <label htmlFor="roundTrip">{roundTrip}</label>
          <input
            id="oneWay"
            type="radio"
            name="selection"
            className={classes.checkbox_round}
            onClick={() => setTripType(TRIP_TYPE.ONE_WAY)}
          />
          <label htmlFor="oneWay">{oneWay}</label>
        </form>
      </div>
    </div>
  );
}
