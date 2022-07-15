import classes from "./Ticket.module.scss";
import Other from "./components/other/Other";
import Header from "./components/header/Header";
import Details from "./components/details/Details";
import FlightAdditionalInfo from "./components/flight_additional_info/FlightAdditionalInfo";
import FlightInformation from "./components/flight_info/FlightInformation";
import FlightAdditionalInfoList from "./components/flight_additional_info_list/FlightAdditionalInfoList";
import useWindowSize from "../../../hooks/window_size/useWindowSize";
import Localization from "../../localization/Localization.tsx";
import ReactDOMServer from "react-dom/server";
import { useSelector } from "react-redux";
import { GiEscalator } from "react-icons/gi";
import { FaSuitcaseRolling } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { DEFAULT } from "../../../constants/localization/default";
import { LOCALIZATION_ID } from "../../../constants/enum/enum.tsx";
import { BIG_SCREEN_SIZE } from "../../../constants/constants";

export default function Ticket() {
  const languageState = useSelector((state) => state.language.value);
  const [, width] = useWindowSize();

  const stopover = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.STOPOVER}
      defaultValue={DEFAULT.STOPOVER}
    />
  );

  const companies = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.COMPANIES}
      defaultValue={DEFAULT.COMPANIES}
    />
  );

  const seats = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.SEATS}
      defaultValue={DEFAULT.SEATS}
    />
  );

  const passengers = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.PASSENGERS_SMALL}
      defaultValue={DEFAULT.PASSENGERS_SMALL}
    />
  );

  const baggage = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.BAGGAGE}
      defaultValue={DEFAULT.BAGGAGE}
    />
  );

  const type = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.TYPE}
      defaultValue={DEFAULT.TYPE}
    />
  );

  const price = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.PRICE}
      defaultValue={DEFAULT.PRICE}
    />
  );

  const available = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.AVAILABLE}
      defaultValue={DEFAULT.AVAILABLE}
    />
  );

  const included = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.INCLUDED}
      defaultValue={DEFAULT.INCLUDED}
    />
  );

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.flight_duration}>
          <Header />
          <div className={classes.info}>
            <FlightInformation />
            {BIG_SCREEN_SIZE >= width ? (
              <div>
                <div className={classes.line_delimiter} />
                <Other />
                <Details />
              </div>
            ) : null}
          </div>
        </div>
        {BIG_SCREEN_SIZE <= width ? (
          <div className={classes.flight_additional_info}>
            <FlightAdditionalInfo
              header={stopover}
              info={"nu"}
              icon={<GiEscalator />}
            />
            <FlightAdditionalInfoList
              header={companies}
              info={[
                { icon: <MdAirlineSeatReclineExtra />, name: "Airmoldova" },
                { icon: <MdAirlineSeatReclineExtra />, name: "Wisair" },
                { icon: <MdAirlineSeatReclineExtra />, name: "Tarom" },
              ]}
            />
            <FlightAdditionalInfo
              header={seats}
              info={available}
              icon={4}
            />
            <FlightAdditionalInfoList
              header={passengers}
              info={[
                { icon: <MdAirlineSeatReclineExtra />, name: "3" },
                { icon: <MdAirlineSeatReclineExtra />, name: "1" },
              ]}
              center={true}
            />
            <FlightAdditionalInfo
              header={baggage}
              info={included}
              icon={<FaSuitcaseRolling />}
            />
            <FlightAdditionalInfo
              header={type}
              info={"econom"}
              icon={<MdAirlineSeatReclineExtra />}
            />
            <FlightAdditionalInfo header={price} info={"$152"} price={true} />
            <FlightAdditionalInfo
              header={""}
              info={<Details />}
              lastInRange={true}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
