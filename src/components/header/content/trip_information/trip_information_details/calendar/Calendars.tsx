import React, { useEffect, useState } from "react";
import classes from "./Calendars.module.scss";
import Popup from "reactjs-popup";
import { useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import ReactDOMServer from "react-dom/server";
import Calendar from "react-calendar";
import WeekDay from "../../../../../../utils/date_format/WeekDay.tsx";
import CalendarImg from "../../../../../../assets/img/calendarImg.jpg";
import { SMALL_SCREEN_SIZE } from "../../../../../../constants/constants";
import { LOCALIZATION_ID } from "../../../../../../constants/enum/enum.tsx";
import { DEFAULT } from "../../.././../../../constants/localization/default";
import Localization from "../../../../../localization/Localization.tsx";
import useWindowSize from "../../../../../../hooks/window_size/useWindowSize";
import YearMonthDay from "../../../../../../utils/date_format/YearMonthDay.tsx";
import "react-calendar/dist/Calendar.css";

export default function Calendars({
  label,
  details,
  icon,
  calendarLabel,
  onSelectedDate,
}) {
  const languageState = useSelector((state) => state.language.value);
  const image = { backgroundImage: `url(${CalendarImg})` };
  const exampleStyle = { color: "#777777", fontWeight: 100, fontSize: "14px" };
  const [openPopUp, setOpenPopUp] = useState(false);
  const [calendar, setCalendar] = useState(null);
  const [currentWeekDay, setCurrentWeekDay] = useState(WeekDay(languageState));
  const [selectedDate, setSelectedDate] = useState("");
  const [, width] = useWindowSize();

  const contentStyle = {
    padding: 0,
    width: width > SMALL_SCREEN_SIZE ? 700 : 320,
    border: "none",
  };

  useEffect(() => setCurrentWeekDay(WeekDay(languageState)), [openPopUp]);

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.20)",
  };

  useEffect(() => onSelectedDate(selectedDate), [selectedDate]);

  useEffect(() => {
    setOpenPopUp(false);
    if (calendar !== null) {
      setSelectedDate(YearMonthDay(calendar));
      console.log('popop: ', YearMonthDay(calendar))
    }
  }, [calendar]);

  const close = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.CLOSE}
      defaultValue={DEFAULT.CLOSE}
    />
  );

  const today = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.TODAY}
      defaultValue={DEFAULT.TODAY}
    />
  );

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.label}>{label}</div>
        <div className={classes.info} onClick={() => setOpenPopUp(true)}>
          {calendar === null ? (
            <div className={classes.value} style={exampleStyle}>
              {details}
            </div>
          ) : (
            <div className={classes.value}>{selectedDate}</div>
          )}
          <div className={classes.icon}>{icon}</div>
        </div>

        <Popup
          onClose={() => setOpenPopUp(false)}
          open={openPopUp}
          arrow={false}
          contentStyle={contentStyle}
          overlayStyle={overlayStyle}
        >
          <div className={classes.calendarPopUp}>
            {width > SMALL_SCREEN_SIZE ? (
              <div className={classes.current_date}>
                <div className={classes.img} style={image}>
                  <div className={classes.layer}>
                    <div className={classes.text_container}>
                      <div className={classes.today}>
                        <span>{today}</span>
                      </div>
                      <div className={classes.date}>{new Date().getDate()}</div>
                      <div className={classes.free} />
                      <div className={classes.weekday}>{currentWeekDay}</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            <div className={classes.container}>
              <div className={classes.header}>
                <div className={classes.info}>
                  <div className={classes.text}>{calendarLabel}</div>
                </div>
                <div
                  className={classes.close}
                  onClick={() => setOpenPopUp(false)}
                >
                  <div className={classes.text}>{close}</div>
                  <div className={classes.icon}>
                    <IoMdClose size={16} />
                  </div>
                </div>
              </div>
              <div className={classes.line} />
              <div className={classes.body}>
                <Calendar
                  minDate={new Date()}
                  next2Label={null}
                  prev2Label={null}
                  locale={languageState}
                  onChange={setCalendar}
                  value={calendar}
                  className="calendar_pop_up"
                />
              </div>
            </div>
          </div>
        </Popup>

        <div className={classes.line} />
      </div>
    </div>
  );
}
