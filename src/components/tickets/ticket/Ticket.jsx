import classes from "./Ticket.module.scss";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
export default function Ticket() {
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.companies}>
            <div className={classes.circle}>1</div>
          </div>
          <div className={classes.price}>$ 123</div>
        </div>
        <div className={classes.info}>
          <div className={classes.flight_information}>
            <div className={classes.departure}>
              <div className={classes.time}>11:25</div>
              <div className={classes.country}>Chisinau</div>
              <div className={classes.date}>MON, 12.07.22</div>
            </div>
            <div className={classes.flight_time}>
              <div className={classes.time}></div>
              <div className={classes.time_line}></div>
              <div className={classes.code_iata}></div>
            </div>
            <div className={classes.destination}>
              <div className={classes.time}>11:25</div>
              <div className={classes.country}>London</div>
              <div className={classes.date}>MON, 12.07.22</div>
            </div>
          </div>
          <div className={classes.other}>other</div>
          <div className={classes.details}>details</div>
        </div>
      </div>
    </div>
  );
}
