import { languageEN, languageRO } from "../../../../redux/rootReducer";
import LanguageSvg from "../../../../assets/svg/language.svg";
import ROFlagSvg from "../../../../assets/svg/ro.svg";
import ENFlagSvg from "../../../../assets/svg/gb.svg";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Language.module.scss";
import { LANGUAGES } from "../../../../constants/enum/enum.tsx";

export default function Language() {
  const lang = useSelector((state) => state.language.value);
  const dispatch = useDispatch();

  return (
    <div className={classes.dropdown}>
      <button className={classes.dropbtn}>
        <img src={LanguageSvg} alt="" />
      </button>
      <div className={classes.dropdown_content}>
        <a
          className={lang === LANGUAGES.EN ? classes.selected : null}
          href="#"
          onClick={() => {
            dispatch(languageEN());
          }}
        >
          <img src={ENFlagSvg} alt="" />
          English
        </a>
        <a
          className={lang === LANGUAGES.RO ? classes.selected : null}
          href="#"
          onClick={() => {
            dispatch(languageRO());
          }}
        >
          <img src={ROFlagSvg} alt="" />
          Română
        </a>
      </div>
    </div>
  );
}
