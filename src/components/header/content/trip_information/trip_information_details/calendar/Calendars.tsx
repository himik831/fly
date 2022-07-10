import React, { useEffect, useState } from "react";
import classes from "./Calendars.module.scss";
import Popup from "reactjs-popup";
import { useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import ReactDOMServer from "react-dom/server";
import Calendar from "react-calendar";
import { LOCALIZATION_ID } from "../../../../../../constants/enum/enum.tsx";
import { DEFAULT } from "../../.././../../../constants/localization/default";
import Localization from "../../../../../localization/Localization.tsx";
import "react-calendar/dist/Calendar.css";

export default function Calendars({ label, details, icon, calendarLabel }) {
  const languageState = useSelector((state) => state.language.value);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [calendar, setCalendar] = useState(null);
  const [flag, setFlag] = useState(false);
  const contentStyle = {
    padding: 0,
    width: 320,
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.20)",
  };

  useEffect(() => {
    setFlag(true);
    console.log(flag);
    console.log(calendar);
  }, [calendar]);

  const close = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.CLOSE}
      defaultValue={DEFAULT.CLOSE}
    />
  );

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.label}>{label}</div>
        <div className={classes.info} onClick={() => setOpenPopUp(true)}>
          <div className={classes.value}>{details}</div>
          <div className={classes.icon}>{icon}</div>
        </div>
        {flag !== true ? null : (
          <Popup
            onClose={() => setOpenPopUp(false)}
            open={openPopUp}
            arrow={false}
            contentStyle={contentStyle}
            overlayStyle={overlayStyle}
          >
            <div className={classes.container}>
              <div className={classes.header}>
                <div className={classes.info}>
                  <div className={classes.text}>{calendarLabel}</div>
                </div>
                <div className={classes.close}>
                  <div className={classes.text}>{close}</div>
                  <div className={classes.icon}>
                    <IoMdClose size={16} />
                  </div>
                </div>
              </div>
              <div className={classes.line} />
              <div className={classes.body}>
                <Calendar
                  locale={languageState}
                  onChange={setCalendar}
                  value={calendar}
                  className="calendar_pop_up"
                />
              </div>
            </div>
          </Popup>
        )}
        <div className={classes.line} />
      </div>
    </div>
  );
}
