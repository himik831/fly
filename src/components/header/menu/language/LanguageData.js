import { LANGUAGES } from "../../../../constants/enum/enum.tsx";
import { languageEN, languageRO } from "../../../../redux/rootReducer";
import ROFlagSvg from "../../../../assets/svg/ro.svg";
import ENFlagSvg from "../../../../assets/svg/gb.svg";

export const LanguageData = [
  {
    language: "Română",
    type: LANGUAGES.RO,
    action: languageRO(),
    icon: ROFlagSvg,
  },
  {
    language: "English",
    type: LANGUAGES.EN,
    action: languageEN(),
    icon: ENFlagSvg,
  },
];
