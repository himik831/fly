import classes from "./Search.module.scss";
import { MdOutlineAirplanemodeActive } from "react-icons/md";

export default function Search() {
  const stylePlane = { transform: "rotate(90deg)", margin: "0px 10px" };

  return (
    <div className={classes.body}>
      <div className={classes.free}>
        <div className={classes.search}>
          <div className={classes.information}>
            <div className={classes.location}>
              {"Chisinau"}
              <MdOutlineAirplanemodeActive style={stylePlane} />
              {"Rome"}
            </div>
            <div className={classes.date}>12.06.22 - 15.06.22 | 3 person</div>
          </div>
          <div className={classes.button}>Edit</div>
        </div>
      </div>
    </div>
  );
}
