import classes from "./Details.module.scss";
import ReactDOMServer from "react-dom/server";
import Localization from "../../../../localization/Localization.tsx";
import { useSelector } from "react-redux";
import { DEFAULT } from "../../../../../constants/localization/default";
import { LOCALIZATION_ID } from "../../../../../constants/enum/enum.tsx";

export default function Details() {
  const languageState = useSelector((state) => state.language.value);

  const detail = ReactDOMServer.renderToString(
    <Localization
      language={languageState}
      id={LOCALIZATION_ID.DETAILS}
      defaultValue={DEFAULT.DETAILS}
    />
  );

  return (
    <div className={classes.details}>
      <div className={classes.button}>{detail}</div>
    </div>
  );
}
