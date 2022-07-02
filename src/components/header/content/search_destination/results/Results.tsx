import classes from "./Results.module.scss";
import ReactDOMServer from "react-dom/server";
import { useSelector } from "react-redux";
import { GrLocation } from "react-icons/gr";
import { MdAirplanemodeActive } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import Localization from "../../../../localization/Localization.tsx";
import { LOCALIZATION_ID } from "../../../../../constants/enum/enum.tsx";
import { DEFAULT } from "../../../../../constants/localization/default";

export default function Results() {
  const languageState = useSelector((state) => state.language.value);

  const cityFrom = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.CITY_FROM}
      defaultValue={DEFAULT.CITY_FROM}
    />
  );

  const centerOfCity = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.CENTER_OF_CITY}
      defaultValue={DEFAULT.CENTER_OF_CITY}
    />
  );

  const airport = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.AIRPORT}
      defaultValue={DEFAULT.AIRPORT}
    />
  );

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.location}>
          <div className={classes.icon}>
            <GrLocation size={20} />
          </div>
          <div className={classes.information}>
            <div className={classes.label}>Paris</div>
            <div className={classes.description}>{`${cityFrom} Franța`}</div>
          </div>
        </div>
        <div className={classes.airports}>
          <div className={classes.icon_free}>
            <MdAirplanemodeActive size={20} />
          </div>
          <div className={classes.icon}>
            <MdAirplanemodeActive size={20} />
          </div>
          <div className={classes.information}>
            <div className={classes.label}>
              Montreal Saint-Hubert Longueuil <span>YHU</span>
            </div>
            <div className={classes.description}>
              <span>{`${centerOfCity} Paris`} </span>
              <BsArrowRightShort />
              <span>{`${airport} 15km`} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
