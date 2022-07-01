import classes from "./Results.module.scss";
import { GrLocation } from "react-icons/gr";
import { MdAirplanemodeActive } from "react-icons/md";

export default function Results() {
  return (
    <div className={classes.body}>
      <div className={classes.location}>
        <div className={classes.icon}>
          <GrLocation size={20} />
        </div>
        <div className={classes.information}>
          <div className={classes.label}>Paris</div>
          <div className={classes.description}>Oraș din Franța</div>
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
          <div className={classes.description}>15 km până la destinație</div>
        </div>
      </div>
    </div>
  );
}
