import Localization from "../../../../../../../localization/Localization.tsx";
import { useSelector } from "react-redux";
import { LOCALIZATION_ID } from "../../../../../../../../constants/enum/enum.tsx";
import { DEFAULT } from "../../../../../../../../constants/localization/default";

export default function AirflyTypeData() {
  const languageState = useSelector((state) => state.language.value);

  return [
    {
      type: (
        <Localization
          language={languageState}
          id={LOCALIZATION_ID.ECONOM}
          defaultValue={DEFAULT.ECONOM}
        />
      ),
      selected: true,
    },
    {
      type: (
        <Localization
          language={languageState}
          id={LOCALIZATION_ID.CONFORT}
          defaultValue={DEFAULT.CONFORT}
        />
      ),
      selected: false,
    },
    {
      type: (
        <Localization
          language={languageState}
          id={LOCALIZATION_ID.BUSINESS}
          defaultValue={DEFAULT.BUSINESS}
        />
      ),
      selected: false,
    },
    {
      type: (
        <Localization
          language={languageState}
          id={LOCALIZATION_ID.FIRST_CLASS}
          defaultValue={DEFAULT.FIRST_CLASS}
        />
      ),
      selected: false,
    },
  ];
}
