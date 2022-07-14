import classes from "./Other.module.scss";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { BsHandbagFill } from "react-icons/bs";
export default function Other() {
  return (
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
  );
}
