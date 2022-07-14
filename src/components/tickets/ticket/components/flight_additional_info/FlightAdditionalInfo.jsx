import classes from "./FlightAdditionalInfo.module.scss";

export default function FlightAdditionalInfo({
  header,
  info,
  icon = null,
  price = false,
}) {
  return (
    <div className={classes.body}>
      <div className={classes.header}>
        <div className={classes.header_line} />
        <div className={classes.label}>{header}</div>
      </div>
      <div className={classes.information}>
        <div className={classes.info_line} />
        <div className={classes.hamburger}>
          {icon !== null ? <div className={classes.icon}>{icon}</div> : null}
          {price !== false ? (
            <div className={classes.price}>{info}</div>
          ) : (
            <div className={classes.label}>{info}</div>
          )}
        </div>
      </div>
    </div>
  );
}
