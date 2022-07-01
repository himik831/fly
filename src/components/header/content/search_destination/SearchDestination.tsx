import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from "./SearchDestination.module.scss";

function useCallApi(value: string) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (value !== null) {
        console.log("API call");
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [value]);
}

export default function SearchDestination({
  label,
  example,
  type,
  onChange,
  onSearchType,
}) {
  const [inputValue, setInputValue] = useState(null);

  useCallApi(inputValue);

  const onChangeDestination = (event) => {
    onChange(event.target.value);
    setInputValue(event.target.value);
  };

  useEffect(() => {
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
              onChange={onChangeDestination}
            />
          </form>
        </div>
      </div>
    </div>
  );
}