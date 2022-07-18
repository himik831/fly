import classes from "./FlightAdditionalInfoList.module.scss";

export default function FlightAdditionalInfo({ header, info, center = false }) {

  return (
    <div className={classes.body}>
      <div className={classes.header}>
        <div className={classes.header_line} />
        <div className={classes.label}>{header}</div>
      </div>
      <div className={classes.information}>
        <div className={classes.info_line} />
        <div
          className={classes.content}
          style={center ? { alignItems: "center" } : null}
        >
          {info.map((e, index) => {
            return (
              <div className={classes.hamburger} key={index}>
                <div className={classes.icon}>{e.icon}</div>
                <div className={classes.label}>{e.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
