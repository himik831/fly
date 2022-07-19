import classes from "./Search.module.scss";
import { BsFillPersonFill } from "react-icons/bs";
import { FaChild } from "react-icons/fa";
import { MdChildFriendly } from "react-icons/md";
import { MdOutlineAirplanemodeActive } from "react-icons/md";

export default function Search({ searchInfo }) {
  const stylePlane = { transform: "rotate(90deg)", margin: "0px 10px" };

  return (
    <div className={classes.body}>
      <div className={classes.free}>
        <div className={classes.search}>
          <div className={classes.information}>
            <div className={classes.location}>
              {searchInfo.state.departure.codeIata}
              <MdOutlineAirplanemodeActive style={stylePlane} />
              {searchInfo.state.destination.codeIata}
            </div>
            <div className={classes.date}>
              {searchInfo.state.departureDate}
              {searchInfo.state.returnDate === "" ? "" : " - "}
              {searchInfo.state.returnDate} | {` `}
              {searchInfo.state.passangers.adultNumber >= 1 ? (
                <span className={classes.icon}>
                  {searchInfo.state.passangers.adultNumber}
                  <BsFillPersonFill size={14} />
                  {` `}
                </span>
              ) : null}
              {searchInfo.state.passangers.childrenNumber > 0 ? (
                <div className={classes.icon}>
                  {searchInfo.state.passangers.adultNumber}
                  <FaChild size={12} />
                  {` `}
                </div>
              ) : null}
              {searchInfo.state.passangers.babiesNumber > 0 ? (
                <div className={classes.icon  }>
                  {searchInfo.state.passangers.babiesNumber}
                  <MdChildFriendly size={14} />
                  {` `}
                </div>
              ) : null}
            </div>
          </div>
          <div className={classes.button}>Edit</div>
        </div>
      </div>
    </div>
  );
}
