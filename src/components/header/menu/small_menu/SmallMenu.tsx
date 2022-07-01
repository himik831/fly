import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./SmallMenu.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import SidebarMenu from "../small_menu/sidebar/SidebarMenu.tsx";
import { sidebarOpen } from "../../../../redux/reducers/sidebarReducer";

export default function SmallMenu() {
  const sidebarState = useSelector((state) => state.sidebarMenu.value);
  const dispatch = useDispatch();

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.logo}>LOGO</div>
        <div
          className={classes.menu}
          onClick={() => {
            dispatch(sidebarOpen());
          }}
        >
          <AiOutlineMenu color="white" size={25} />
        </div>
        {sidebarState === true ? <SidebarMenu /> : false}
      </div>
    </div>
  );
}
