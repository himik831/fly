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
import FlySeatTypeByAPIChar from "../../../utils/FlySeatTypeByAPIChar";
import { useSelector } from "react-redux";
import { GiEscalator } from "react-icons/gi";
import { FaSuitcaseRolling } from "react-icons/fa";
import { MdAirplanemodeActive } from "react-icons/md";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { DEFAULT } from "../../../constants/localization/default";
import { LOCALIZATION_ID } from "../../../constants/enum/enum.tsx";
import { BIG_SCREEN_SIZE } from "../../../constants/constants";
import { BsFillPersonFill } from "react-icons/bs";
import { FaChild } from "react-icons/fa";
import { MdChildFriendly } from "react-icons/md";

export default function Ticket({ ticketData, passangers }) {
  const languageState = useSelector((state) => state.language.value);
  const [, width] = useWindowSize();

  const stopover = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.STOPOVER}
      defaultValue={DEFAULT.STOPOVER}
    />
  );

  const planeNumber = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.PLANE_NUMBER}
      defaultValue={DEFAULT.PLANE_NUMBER}
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

  const no = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.NO}
      defaultValue={DEFAULT.NO}
    />
  );

  const passangersType = [
    {
      icon: passangers.adults >= 1 ? <BsFillPersonFill size={14} /> : null,
      name: passangers.adults >= 1 ? passangers.adults : null,
    },
    {
      icon: passangers.children >= 1 ? <FaChild size={14} /> : null,
      name: passangers.children >= 1 ? passangers.children : null,
    },
    {
      icon: passangers.infants >= 1 ? <MdChildFriendly size={14} /> : null,
      name: passangers.infants >= 1 ? passangers.infants : null,
    },
  ];

  console.log("passangers", passangers.passengers);
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.flight_duration}>
          <Header airlines={ticketData.airlines} price={ticketData.price} />
          <div className={classes.info}>
            <FlightInformation data={ticketData} />
            {BIG_SCREEN_SIZE >= width ? (
              <div>
                <div className={classes.line_delimiter} />
                <Other
                  seatType={FlySeatTypeByAPIChar(
                    ticketData.route[0].fare_category
                  )}
                  passangersNr={passangers.passengers}
                />
                <Details />
              </div>
            ) : null}
          </div>
        </div>
        {BIG_SCREEN_SIZE <= width ? (
          <div className={classes.flight_additional_info}>
            <FlightAdditionalInfo
              header={stopover}
              info={
                ticketData.route.length === 1
                  ? no
                  : ticketData.route.length === 2
                  ? "1"
                  : "2"
              }
              icon={<GiEscalator />}
            />
            <FlightAdditionalInfoList
              header={planeNumber}
              info={ticketData.route.map((e) => {
                return {
                  icon: <MdAirplanemodeActive />,
                  name: `${e.airline} ${e.flight_no}`,
                };
              })}
            />
            <FlightAdditionalInfo
              header={seats}
              info={available}
              icon={ticketData.availability.seats}
            />
            <FlightAdditionalInfoList
              header={passengers}
              info={passangersType}
              center={true}
            />
            <FlightAdditionalInfo
              header={baggage}
              info={included}
              icon={<FaSuitcaseRolling />}
            />
            <FlightAdditionalInfo
              header={type}
              info={FlySeatTypeByAPIChar(ticketData.route[0].fare_category)}
              icon={<MdAirlineSeatReclineExtra />}
            />
            <FlightAdditionalInfo
              header={price}
              info={`€${ticketData.price}`}
              price={true}
            />
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
