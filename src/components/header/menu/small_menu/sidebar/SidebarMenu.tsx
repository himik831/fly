import classes from "./SidebarMenu.module.scss";
import Localization from "../../../../localization/Localization.tsx";
import { IoMdClose } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { LOCALIZATION_ID } from "../../../../../constants/enum/enum.tsx";
import { DEFAULT } from "../../../../../constants/localization/default";
import { sidebarClose } from "../../../../../redux/reducers/sidebarReducer";
import SidebarData from "./SidebarData";

export default function SidebarMenu() {
  const languageState = useSelector((state) => state.language.value);
  const dispatch = useDispatch();

  function topMenu() {
    return SidebarData()
      .filter((element) => element.level === 1)
      .map((menu) => {
        return menu.values.map((value, index) => (
          <ul key={index}>
            <li onClick={() => console.log(value.path)}>
              <div className={classes.icon}>{value.icon}</div>
              <div className={classes.text}>{value.title}</div>
            </li>
          </ul>
        ));
      });
  }

  function bottomMenu() {
    return SidebarData()
      .filter((element) => element.level === 2)
      .map((menu) => {
        return menu.values.map((value, index) => (
          <ul key={index}>
            <li onClick={() => console.log(value.path)}>
              <div className={classes.icon}>{value.icon}</div>
              <div className={classes.text}>{value.title}</div>
            </li>
          </ul>
        ));
      });
  }

  function footerMenu() {
    return SidebarData()
      .filter((element) => element.level === 3)
      .map((menu) => {
        return menu.values.map((value, index) => (
          <ul key={index}>
            <li onClick={() => console.log(value.path)}>
              <div className={classes.icon}>{value.icon}</div>
              <div className={classes.text}>{value.title}</div>
            </li>
          </ul>
        ));
      });
  }

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar_menu}>
        <div
          className={classes.header}
          onClick={() => {
            dispatch(sidebarClose());
          }}
        >
          <div className={classes.text}>
            <Localization
              language={languageState}
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
          <div className={classes.top}>{topMenu()}</div>
          <div className={classes.bottom}>{bottomMenu()}</div>
        </div>
        <div className={classes.line} />
        <div className={classes.footer}>{footerMenu()}</div>
      </div>
    </div>
  );
}
