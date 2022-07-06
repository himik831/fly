import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from "./SearchDestination.module.scss";
import { IoMdClose } from "react-icons/io";

export default function SearchDestination({
  label,
  example,
  type,
  value,
  onChange,
  onSearchType,
}) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(value ? `${value.airport} ${value.codeIata}` : "");
  }, [value]);

  useEffect(() => {
    onChange(inputValue);
    onSearchType(type);
  }, [inputValue]);

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.label}>{label}</div>
        <div className={classes.destination}>
          <form>
            <input
              type="text"
              placeholder={example}
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
            />
          </form>
          <div className={classes.clear} onClick={() => setInputValue("")}>
            {inputValue ? <IoMdClose size={18} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
