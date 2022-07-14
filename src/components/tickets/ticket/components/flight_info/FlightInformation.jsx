import classes from "./FlightInformation.module.scss";
import { MdOutlineAirplanemodeActive } from "react-icons/md";

export default function FlightInformation() {
  const styleDeparture = { transform: "rotate(45deg)" };
  const styleDestination = { transform: "rotate(135deg)" };
  return (
    <div className={classes.flight_information}>
      <div className={classes.departure}>
        <div className={classes.time}>11:25</div>
        <div className={classes.country}>Chisinau</div>
        <div className={classes.date}>12.07.22</div>
      </div>
      <div className={classes.flight_time}>
        <div className={classes.time}>
          <div className={classes.plane}>
            <MdOutlineAirplanemodeActive size={14} style={styleDeparture} />
          </div>
          <div className={classes.time_on_plane}>1h 53m</div>
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
          <div className={classes.code}>KIV</div>
          <div className={classes.escale}>2 escale</div>
          <div className={classes.code}>LTN</div>
        </div>
      </div>
      <div className={classes.destination}>
        <div className={classes.time}>11:25</div>
        <div className={classes.country}>London</div>
        <div className={classes.date}>12.07.22</div>
      </div>
    </div>
  );
}
