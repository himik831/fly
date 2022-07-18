import classes from "./FlightInformation.module.scss";
import EpochDateToTime from "../../../../../utils/date_format/EpochDateToTime.tsx";
import EpochDateToDate from "../../../../../utils/date_format/EpochDateToDate.tsx";
import { MdOutlineAirplanemodeActive } from "react-icons/md";

export default function FlightInformation({ data }) {
  const styleDeparture = { transform: "rotate(45deg)" };
  const styleDestination = { transform: "rotate(135deg)" };

  const departureHour = EpochDateToTime(data.dTime);
  const destinationHour = EpochDateToTime(data.aTime);

  const departureDate = EpochDateToDate(data.dTime);
  const destinationDate = EpochDateToDate(data.aTime);

  return (
    <div className={classes.flight_information}>
      <div className={classes.departure}>
        <div className={classes.time}>{departureHour}</div>
        <div className={classes.country}>{data.cityFrom}</div>
        <div className={classes.date}>{departureDate}</div>
      </div>
      <div className={classes.flight_time}>
        <div className={classes.time}>
          <div className={classes.plane}>
            <MdOutlineAirplanemodeActive size={14} style={styleDeparture} />
          </div>
          <div className={classes.time_on_plane}>{data.fly_duration}</div>
          <div className={classes.plane}>
            <MdOutlineAirplanemodeActive size={14} style={styleDestination} />
          </div>
        </div>
        <div className={classes.time_line}>
          <div className={classes.circle} />
          <div className={classes.line} />
          <div className={classes.circle} />
        </div>
        <div className={classes.code_iata}>
          <div className={classes.code}>{data.flyFrom}</div>
          <div className={classes.code}>{data.flyTo}</div>
        </div>
      </div>
      <div className={classes.destination}>
        <div className={classes.time}>{destinationHour}</div>
        <div className={classes.country}>{data.cityTo}</div>
        <div className={classes.date}>{destinationDate}</div>
      </div>
    </div>
  );
}
