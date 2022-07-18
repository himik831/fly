import ReactDOMServer from "react-dom/server";
import Localization from "../components/localization/Localization.tsx";
import { DEFAULT } from "../constants/localization/default";
import { LOCALIZATION_ID } from "../constants/enum/enum.tsx";
import { useSelector } from "react-redux";

export default function FlySeatTypeByAPIChar(char) {
  const languageState = useSelector((state) => state.language.value);

  switch (char) {
    case "M":
      return ReactDOMServer.renderToString(
        <Localization
          language={languageState}
          id={LOCALIZATION_ID.ECONOM}
          defaultValue={DEFAULT.ECONOM}
        />
      ).toLocaleLowerCase();
    case "W":
      return ReactDOMServer.renderToString(
        <Localization
          language={languageState}
          id={LOCALIZATION_ID.CONFORT}
          defaultValue={DEFAULT.CONFORT}
        />
      ).toLocaleLowerCase();
    case "C":
      return ReactDOMServer.renderToString(
        <Localization
          language={languageState}
          id={LOCALIZATION_ID.BUSINESS}
          defaultValue={DEFAULT.BUSINESS}
        />
      ).toLocaleLowerCase();
    case "F":
      return ReactDOMServer.renderToString(
        <Localization
          language={languageState}
          id={LOCALIZATION_ID.FIRST_CLASS}
          defaultValue={DEFAULT.FIRST_CLASS}
        />
      ).toLocaleLowerCase();
  }
}
