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
  const [focused, setFocused] = useState(false);
  const [labelCodeIata, setLabelCodeIata] = useState("");
  const [wasValueSelected, setWasValueSelected] = useState(false);
  const onFocus = () => {
    setFocused(true);
  };
  const contentStyle = {
    background: "#fff",
    padding: 0,
    marginTop: 25,
    marginLeft: -15,
    width: 300,
  };
  useEffect(() => {
    setInputValue(value ? `${value.airport} ${value.codeIata}` : "");
  }, [value]);

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue]);

  useEffect(() => {
    setLabelCodeIata(value ? value.codeIata : "");
  }, [value]);

  const Modal = () => (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.label}>{`${label} ${
          labelCodeIata ? `(${labelCodeIata})` : ""
        }`}</div>
        <div className={classes.destination}>
          <Popup
            onOpen={() => setFocused(true)}
            onClose={() => {
              setFocused(false);
              wasValueSelected ? setFocused(false) : setInputValue("");
            }}
            trigger={
              <form>
                <input
                  onFocus={onFocus}
                  style={
                    focused ? { color: "black" } : { caretColor: "transparent" }
                  }
                  type="text"
                  placeholder={example}
                  value={inputValue}
                  onChange={(event) => {
                    setInputValue(event.target.value);
                  }}
                />
              </form>
            }
            arrow={false}
            contentStyle={contentStyle}
            position="bottom left"
          >
            {inputValue.length < 3 ? null : loadingData === false ? (
              <BarLoader width={300} />
            ) : (
              <Results
                cityAirports={cityAirports}
                onSelectedValue={onSelectedValue}
                onSelected={setWasValueSelected}
              />
            )}
          </Popup>
          <div
            className={classes.clear}
            onClick={() => {
              setLabelCodeIata("");
              setInputValue("");
            }}
          >
            {inputValue ? <IoMdClose size={18} /> : null}
          </div>
        </div>
      </div>
    </div>
  );

  return Modal();
}
