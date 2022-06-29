import { useSelector } from "react-redux";
import classes from "./SidebarMenu.module.scss";
import { IoMdClose } from "react-icons/io";
import Localization from "../../../../../localization/Localization.tsx";
import { DEFAULT } from "../../../../../../constants/localization/default";
import { LOCALIZATION_ID } from "../../../../../../constants/enum/enum.tsx";
import { SidebarData } from "../data/SidebarData";

export default function SidebarMenu() {
  const language = useSelector((state) => state.language.value);

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar_menu}>
        {/* <div className={classes.header}>
          <div className={classes.text}>
            <Localization
              language={language}
              id={LOCALIZATION_ID.CLOSE}
              defaultValue={DEFAULT.CLOSE}
            />
          </div>
          <div className={classes.icon}>
            <IoMdClose size={18} />
          </div>
        </div>
        <div className={classes.line} />
        <div className={classes.body}>
          <div className={classes.center}>
            <div className={classes.top}>
              {SidebarData.filter((element) => element.level === 1).map(
                (menu) => {
                  return menu.values.map((value, index) => (
                    <ul key={index}>
                      <li>
                        <div className={classes.icon}>{value.icon}</div>
                        <div className={classes.text}>{value.title}</div>
                      </li>
                    </ul>
                  ));
                }
              )}
            </div>
            <div className={classes.footer}>
              {SidebarData.filter((element) => element.level === 2).map(
                (menu) => {
                  return menu.values.map((value, index) => (
                    <ul key={index}>
                      <li>
                        <div className={classes.icon}>{value.icon}</div>
                        <div className={classes.text}>{value.title}</div>
                      </li>
                    </ul>
                  ));
                }
              )}
            </div>
          </div>
          <div className={classes.line} />
          <div className={classes.bottom}>
            {SidebarData.filter((element) => element.level === 3).map(
              (menu) => {
                return menu.values.map((value, index) => (
                  <ul key={index}>
                    <li>
                      <div className={classes.icon}>{value.icon}</div>
                      <div className={classes.text}>{value.title}</div>
                    </li>
                  </ul>
                ));
              }
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
}
