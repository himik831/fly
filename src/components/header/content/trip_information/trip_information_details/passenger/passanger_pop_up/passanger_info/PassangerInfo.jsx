import classes from "./PassangerInfo.module.scss";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import ReactDOMServer from "react-dom/server";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Localization from "../../../../../../../localization/Localization.tsx";
import { LOCALIZATION_ID } from "../../../../../../../../constants/enum/enum.tsx";
import { DEFAULT } from "../../../../../../../../constants/localization/default";

export default function PassangerInfo({
  label,
  description,
  number,
  onCounter,
}) {
  const languageState = useSelector((state) => state.language.value);
  const grownUps = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.GROWN_UPS}
      defaultValue={DEFAULT.GROWN_UPS}
    />
  );
  const [count, setCount] = useState(label === grownUps ? 1 : 0);
  const styleGreyButton = { color: "#d3d3d3" };
  const styleGreenButton = { color: "#82cdc2" };

  useEffect(() => onCounter(count), [count]);

  let increment = () => {
    setCount(count + 1);
  };

  let decrement = () => {
    if (label === grownUps && count !== 1) setCount(count - 1);
    else if (label !== grownUps && count > 0) setCount(count - 1);
  };

  return (
    <div className={classes.passenger_info}>
      <div className={classes.info}>
        <div className={classes.label}>{label}</div>
        <div className={classes.description}>{description}</div>
      </div>
      <div className={classes.counter}>
        <div
          className={classes.minus}
          style={
            count === 0
              ? styleGreyButton
              : label === grownUps && count === 1
              ? styleGreyButton
              : styleGreenButton
          }
          onClick={decrement}
        >
          <AiFillMinusCircle size={20} />
        </div>
        <div className={classes.text}>{number}</div>
        <div
          className={classes.plus}
          style={styleGreenButton}
          onClick={increment}
        >
          <AiFillPlusCircle size={20} />
        </div>
      </div>
    </div>
  );
}
