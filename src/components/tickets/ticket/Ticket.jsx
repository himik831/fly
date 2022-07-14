import classes from "./Ticket.module.scss";
import { BIG_SCREEN_SIZE } from "../../../constants/constants";
import Other from "./components/other/Other";
import Header from "./components/header/Header";
import Details from "./components/details/Details";
import FlightAdditionalInfo from "./components/flight_additional_info/FlightAdditionalInfo";
import FlightInformation from "./components/flight_info/FlightInformation";
import FlightAdditionalInfoList from "./components/flight_additional_info_list/FlightAdditionalInfoList";
import useWindowSize from "../../../hooks/window_size/useWindowSize";
import { GiEscalator } from "react-icons/gi";
import { FaSuitcaseRolling } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
export default function Ticket() {
  const [, width] = useWindowSize();

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
              header={"Escala"}
              info={"nu"}
              icon={<GiEscalator />}
            />
            <FlightAdditionalInfoList
              header={"Companii"}
              info={[
                { icon: <MdAirlineSeatReclineExtra />, name: 'Airmoldova' },
                { icon: <MdAirlineSeatReclineExtra />, name: 'Wisair' },
                { icon: <MdAirlineSeatReclineExtra />, name: 'Tarom' },
              ]}
            />
            <FlightAdditionalInfo
              header={"Locuri"}
              info={"disponibile"}
              icon={4}
            />
            <FlightAdditionalInfo
              header={"Bagaj"}
              info={"inclus"}
              icon={<FaSuitcaseRolling />}
            />
            <FlightAdditionalInfo
              header={"Tip"}
              info={"econom"}
              icon={<MdAirlineSeatReclineExtra />}
            />
            <FlightAdditionalInfo header={"Pret"} info={"$152"} price={true} />
            <FlightAdditionalInfo header={""} info={<Details />} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
