import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./SmallMenu.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import SidebarMenu from "../small_menu/sidebar/SidebarMenu.tsx";
import { sidebarOpen } from "../../../../redux/reducers/sidebarReducer";

export default function SmallMenu() {
  const sidebarState = useSelector((state) => state.sidebarMenu.value);
  const dispatch = useDispatch();

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <Link to={"/"} className="link">
          <div className={classes.logo}>LOGO</div>
        </Link>
        <div
          className={classes.menu}
          onClick={() => {
            dispatch(sidebarOpen());
          }}
        >
          <AiOutlineMenu size={25} className={classes.reaactIcon} />
        </div>
        {sidebarState === true ? <SidebarMenu /> : false}
      </div>
    </div>
  );
}
