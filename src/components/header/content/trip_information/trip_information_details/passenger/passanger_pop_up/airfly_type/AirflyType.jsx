import classes from "./AirflyType.module.scss";
import AirflyTypeData from "./AirflyTypeData.js";

export default function AirflyType() {
  return (
    <div className={classes.airfly_type}>
      {AirflyTypeData().map((el, index) => {
        return (
          <div
            className={classes.element}
            key={index}
            style={
              el.selected === true
                ? {
                    backgroundColor: "#82cdc2",
                    color: "white",
                    border: "0.5px solid #82cdc2",
                    fontWeight: "500",
                  }
                : null
            }
          >
            {el.type}
          </div>
        );
      })}
    </div>
  );
}
