import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from "./SearchDestination.module.scss";
import { IoMdClose } from "react-icons/io";
import Popup from "reactjs-popup";
import Results from "../search_destination/results/Results.tsx";
import { BarLoader } from "react-spinners";

export default function SearchDestination({
  cityAirports,
  example,
  label,
  value,
  loadingData,
  onChange,
  onSelectedValue,
}) {
  const [inputValue, setInputValue] = useState("");
  const contentStyle = {
    background: "#fff",
    padding: 0,
    width: 300,
  };
  useEffect(() => {
    setInputValue(value ? `${value.airport} ${value.codeIata}` : "");
  }, [value]);

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue]);

  console.log(cityAirports);
  return (
    <Popup
      trigger={
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
      }
      contentStyle={contentStyle}
      position="bottom left"
    >
      {inputValue.length < 3 ? null : loadingData === false ? (
        <BarLoader width={300} />
      ) : (
        <Results
          cityAirports={cityAirports}
          onSelectedValue={onSelectedValue}
        />
      )}
      {/* <Results cityAirports={cityAirports} onSelectedValue={onSelectedValue} /> */}
    </Popup>
  );
}
