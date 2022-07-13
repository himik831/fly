import classes from "./Ticket.module.scss";
import {
  MdOutlineAirplanemodeActive,
  MdAirlineSeatReclineExtra,
} from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { BsHandbagFill } from "react-icons/bs";
export default function Ticket() {
  const styleDeparture = { transform: "rotate(45deg)" };
  const styleDestination = { transform: "rotate(135deg)" };

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
              <div className={classes.date}>12.07.22</div>
            </div>
            <div className={classes.flight_time}>
              <div className={classes.time}>
                <div className={classes.plane}>
                  <MdOutlineAirplanemodeActive
                    size={14}
                    style={styleDeparture}
                  />
                </div>
                <div className={classes.time_on_plane}>1h 53m</div>
                <div className={classes.plane}>
                  <MdOutlineAirplanemodeActive
                    size={14}
                    style={styleDestination}
                  />
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
          <div className={classes.line_delimiter} />
          <div className={classes.other}>
            <div className={classes.bagage}>
              <div className={classes.icon}>
                <BsHandbagFill size={10} />
              </div>
              <div className={classes.text}>inclus</div>
            </div>
            <div className={classes.person}>
              <div className={classes.icon}>
                <BsFillPersonFill />
              </div>
              <div className={classes.text}>1 person</div>
            </div>
            <div className={classes.type}>
              <div className={classes.icon}>
                <MdAirlineSeatReclineExtra />
              </div>
              <div className={classes.text}>econom</div>
            </div>
          </div>
          <div className={classes.details}>
            <div className={classes.button}>Detalii</div>
          </div>
        </div>
      </div>
    </div>
  );
}
