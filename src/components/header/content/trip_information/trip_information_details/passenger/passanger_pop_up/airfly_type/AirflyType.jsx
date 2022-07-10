import { useEffect, useState } from "react";
import classes from "./AirflyType.module.scss";
import AirflyTypeData from "./AirflyTypeData.js";
import { AIRFLY_PLACE_TYPE } from "../../../../../../../../constants/enum/enum.tsx";

export default function AirflyType({ clearData }) {
  const [type, setType] = useState(AIRFLY_PLACE_TYPE.ECONOM);

  useEffect(() => setType(AIRFLY_PLACE_TYPE.ECONOM), [clearData]);

  return (
    <div className={classes.airfly_type}>
      {AirflyTypeData().map((el, index) => {
        return (
          <div
            onClick={() => {
              return setType(el.type.props.id);
            }}
            className={classes.element}
            key={index}
            style={
              el.type.props.id === type
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
