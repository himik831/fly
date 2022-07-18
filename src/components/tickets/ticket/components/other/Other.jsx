import classes from "./Other.module.scss";
import ReactDOMServer from "react-dom/server";
import Localization from "../../../../localization/Localization.tsx";
import { useSelector } from "react-redux";
import { DEFAULT } from "../../../../../constants/localization/default";
import { LOCALIZATION_ID } from "../../../../../constants/enum/enum.tsx";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { BsHandbagFill } from "react-icons/bs";

export default function Other({ seatType, passangersNr }) {
  const languageState = useSelector((state) => state.language.value);
  const included = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.INCLUDED}
      defaultValue={DEFAULT.INCLUDED}
    />
  );

  return (
    <div className={classes.other}>
      <div className={classes.bagage}>
        <div className={classes.icon}>
          <BsHandbagFill size={10} />
        </div>
        <div className={classes.text}>{included}</div>
      </div>
      <div className={classes.person}>
        <div className={classes.icon}>
          <BsFillPersonFill />
        </div>
        <div className={classes.text}>{passangersNr}</div>
      </div>
      <div className={classes.type}>
        <div className={classes.icon}>
          <MdAirlineSeatReclineExtra />
        </div>
        <div className={classes.text}>{seatType}</div>
      </div>
    </div>
  );
}
