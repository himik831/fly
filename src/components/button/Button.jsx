import React from "react";
import "./Button.module.scss";

function Button({ label = "" }) {
  return <button>{label}</button>;
}

export default Button;
