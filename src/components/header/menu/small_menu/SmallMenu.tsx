import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./SmallMenu.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import SidebarMenu from "../small_menu/sidebar/SidebarMenu.tsx";
import { sidebarOpen } from "../../../../redux/reducers/sidebarReducer";
import LOGO from "../../../../assets/svg/skyflyLogo.svg";

export default function SmallMenu() {
  const sidebarState = useSelector((state) => state.sidebarMenu.value);
  const dispatch = useDispatch();

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <Link to={"/"} className="link">
          <div className={classes.logo}>
            <img src={LOGO} alt="" />
          </div>
        </Link>
        <div
          className={classes.menu}
          onClick={() => {
            dispatch(sidebarOpen());
          }}
        >
          <AiOutlineMenu
            size={25}
            className={classes.reaactIcon}
            color={"white"}
          />
        </div>
        {sidebarState === true ? <SidebarMenu /> : false}
      </div>
    </div>
  );
}
