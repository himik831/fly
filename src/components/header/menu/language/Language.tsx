import LanguageSvg from "../../../../assets/svg/language.svg";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Language.module.scss";
import { LanguageData } from "./LanguageData";

export default function Language() {
  const lang = useSelector((state) => state.language.value);
  const dispatch = useDispatch();

  return (
    <div className={classes.dropdown}>
      <button className={classes.dropbtn}>
        <img src={LanguageSvg} alt="" />
      </button>
      <div className={classes.dropdown_content}>
        {LanguageData.map((element, index) => {
          return (
            <a
              key={index}
              className={lang === element.type ? classes.selected : null}
              href="#"
              onClick={() => {
                dispatch(element.action);
              }}
            >
              <div className={classes.language}>
                <img src={element.icon} alt="" />
                <div className={classes.text}>{element.language}</div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
