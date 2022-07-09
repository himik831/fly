import classes from "./PassangerPopUp.module.scss";
import { IoMdClose } from "react-icons/io";
import { MdRefresh } from "react-icons/md";
import PassangerInfo from "./passanger_info/PassangerInfo.jsx";
import { useState } from "react";
import AirflyType from "./airfly_type/AirflyType";
import ReactDOMServer from "react-dom/server";
import { DEFAULT } from "../../../../../../../constants/localization/default";
import { useSelector } from "react-redux";
import { LOCALIZATION_ID } from "../../../../../../../constants/enum/enum.tsx";
import Localization from "../../../../../../localization/Localization.tsx";

export default function PassangerPopUp() {
  const languageState = useSelector((state) => state.language.value);
  const [adultNumber, setAdultNumber] = useState(0);
  const [childrenNumber, setChildrenNumber] = useState(0);
  const [infantNumber, setInfantNumber] = useState(0);

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

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.reset}>
            <div className={classes.icon}>
              <MdRefresh size={16} />
            </div>
            <div className={classes.text}>{refresh}</div>
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
          <PassangerInfo
            label={grownUps}
            description={moreThan12Years}
            number={adultNumber}
            onCounter={setAdultNumber}
          />
          <PassangerInfo
            label={children}
            description={years2Till12}
            number={childrenNumber}
            onCounter={setChildrenNumber}
          />
          <PassangerInfo
            label={babies}
            description={upTo2Years}
            number={infantNumber}
            onCounter={setInfantNumber}
          />
          <div className={classes.line_grey} />
          <div className={classes.seat_type}>{tipeOfSeat}</div>
          <AirflyType />
          <div className={classes.save}>{save}</div>
        </div>
      </div>
    </div>
  );
}
