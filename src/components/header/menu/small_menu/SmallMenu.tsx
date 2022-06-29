import React, { useState } from "react";
import classes from "./SmallMenu.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import SidebarMenu from "../small_menu/sidebar/menu/SidebarMenu.tsx";

export default function SmallMenu() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.logo}>LOGO</div>
        <div className={classes.menu} onClick={showSidebar}>
          <AiOutlineMenu color="white" size={25} />
          {sidebar === true ? <SidebarMenu /> : false}
        </div>
      </div>
    </div>
  );
}
