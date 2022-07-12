import ReactDOMServer from "react-dom/server";
import AirflyType from "./airfly_type/AirflyType";
import classes from "./PassangerPopUp.module.scss";
import PassangerInfo from "./passanger_info/PassangerInfo.jsx";
import AirflySeat from "../../../../../../../assets/img/airflySeat.jpg";
import Localization from "../../../../../../localization/Localization.tsx";
import useWindowSize from "../../../../../../../hooks/window_size/useWindowSize";
import { DEFAULT } from "../../../../../../../constants/localization/default";
import { FaChild } from "react-icons/fa";
import { useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { MdRefresh } from "react-icons/md";
import { useEffect, useState } from "react";
import { MdChildFriendly } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { SMALL_SCREEN_SIZE } from "../../../../../../../constants/constants";
import { LOCALIZATION_ID } from "../../../../../../../constants/enum/enum.tsx";

export default function PassangerPopUp({ onClose, onPassangersInfo }) {
  const languageState = useSelector((state) => state.language.value);
  const image = { backgroundImage: `url(${AirflySeat})` };
  const [, width] = useWindowSize();

  const [adultNumber, setAdultNumber] = useState(0);
  const [childrenNumber, setChildrenNumber] = useState(0);
  const [babiesNumber, setBabiesNumber] = useState(0);
  const [airfyType, setAirflyType] = useState(null);
  const [clearData, setClearData] = useState(false);

  useEffect(() => {
    if (clearData === true) setClearData(false);
  }, [clearData]);

  function saveData() {
    return {
      adultNumber: adultNumber,
      childrenNumber: childrenNumber,
      babiesNumber: babiesNumber,
      airfyType: airfyType,
    };
  }

  const grownUps = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.GROWN_UPS}
      defaultValue={DEFAULT.GROWN_UPS}
    />
  );

  const children = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.CHILDREN}
      defaultValue={DEFAULT.CHILDREN}
    />
  );

  const babies = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.BABIES}
      defaultValue={DEFAULT.BABIES}
    />
  );

  const tipeOfSeat = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.TYPE_OF_SEAT}
      defaultValue={DEFAULT.TYPE_OF_SEAT}
    />
  );

  const moreThan12Years = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.MORE_THAN_12_YEARS}
      defaultValue={DEFAULT.MORE_THAN_12_YEARS}
    />
  );

  const years2Till12 = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.YEARS_2_12}
      defaultValue={DEFAULT.YEARS_2_12}
    />
  );

  const upTo2Years = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.UP_TO_2_YEARS}
      defaultValue={DEFAULT.UP_TO_2_YEARS}
    />
  );

  const save = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.SAVE}
      defaultValue={DEFAULT.SAVE}
    />
  );

  const close = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.CLOSE}
      defaultValue={DEFAULT.CLOSE}
    />
  );

  const refresh = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.REFRESH}
      defaultValue={DEFAULT.REFRESH}
    />
  );

  const seatInformation = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.AIRCRAFT_SEAT_INFO}
      defaultValue={DEFAULT.AIRCRAFT_SEAT_INFO}
    />
  );

  return (
    <div className={classes.body}>
      {width > SMALL_SCREEN_SIZE ? (
        <div className={classes.current_date}>
          <div className={classes.img} style={image}>
            <div className={classes.layer}>
              <div className={classes.text}>{seatInformation}</div>
            </div>
          </div>
        </div>
      ) : null}
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.reset} onClick={() => setClearData(true)}>
            <div className={classes.icon}>
              <MdRefresh size={16} />
            </div>
            <div className={classes.text}>{refresh}</div>
          </div>
          <div className={classes.close} onClick={() => onClose(false)}>
            <div className={classes.text}>{close}</div>
            <div className={classes.icon}>
              <IoMdClose size={16} />
            </div>
          </div>
        </div>
        <div className={classes.line} />
        <div className={classes.body}>
          <PassangerInfo
            label={grownUps}
            description={moreThan12Years}
            number={adultNumber}
            onCounter={setAdultNumber}
            clearData={clearData}
            icon={<BsFillPersonFill />}
          />
          <PassangerInfo
            label={children}
            description={years2Till12}
            number={childrenNumber}
            onCounter={setChildrenNumber}
            clearData={clearData}
            icon={<FaChild size={12}/>}
          />
          <PassangerInfo
            label={babies}
            description={upTo2Years}
            number={babiesNumber}
            onCounter={setBabiesNumber}
            clearData={clearData}
            icon={<MdChildFriendly />}
          />
          <div className={classes.line_grey} />
          <div className={classes.seat_type}>{tipeOfSeat}</div>
          <AirflyType clearData={clearData} onAirflyType={setAirflyType} />
          <div
            className={classes.save}
            onClick={() => onPassangersInfo(saveData)}
          >
            {save}
          </div>
        </div>
      </div>
    </div>
  );
}
