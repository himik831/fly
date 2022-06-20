import React from "react";
import "./Button.module.scss";

function Button({
  label = "",
  backgroundColor = null,
  isFullWidth = false,
  bold = null,
}) {
  const buttonStyle = {
    backgroundColor:
      backgroundColor === null ? backgroundColor : `${backgroundColor}`,
    width: isFullWidth === false ? isFullWidth : "100%",
    margin: isFullWidth === false ? isFullWidth : "0px",
    padding: isFullWidth === false ? isFullWidth : "10px",
    fontWeight: bold === null ? bold : `${bold}`,
  };

  return <button style={buttonStyle}>{label}</button>;
}

export default Button;
