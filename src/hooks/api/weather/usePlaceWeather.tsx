import { useState, useEffect } from "react";
import HourMinDayMonthYear from "../../../utils/date_format/HourMinDayMonthYear.tsx";

export default function usePlaceWeather({ place }) {
  const host: string = "http://api.openweathermap.org/";
  const key: string = "eda6f00ce5cf7fa110832661a868e932";

  interface CurrentWeather {
    dateTime: Date;
    temp: number;
    weatherDescription: string;
  }

  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>({
    dateTime: null,
    temp: null,
    weatherDescription: null,
  });

  useEffect(() => {
    const getLonLatByPlace: string = `${host}geo/1.0/direct?q=${place}&limit=1&appid=${key}`;
    fetch(getLonLatByPlace)
      .then((response) => response.json())
      .then(
        (json) =>
          `${host}data/2.5/weather?lat=${json[0].lat}&lon=${json[0].lon}&appid=${key}&units=metric`
      )
      .then((url) => fetch(url))
      .then((response) => response.json())
      .then((json) => {
        setCurrentWeather({
          dateTime: HourMinDayMonthYear({ timeStamp: json.dt }),
          temp: Math.round(json.main.temp),
          weatherDescription: json.weather[0].description,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  return currentWeather;
}
