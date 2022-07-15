import React from "react";
import classes from "./Weather.module.scss";
import useWindowSize from "../../../../hooks/window_size/useWindowSize";
import CountryWeather from "./country_weather/CountryWeather.tsx";
import WeatherIcon from "./weather_icons/WeatherIcon.tsx";
import usePlaceWeather from "../../../../hooks/api/weather/usePlaceWeather.tsx";
import WeatherSwipeToSlide from "./weather_swipe_to_slide/WeatherSwipeToSlide.tsx";
import {
  EXTRA_BIG_SCREEN_SIZE,
  BIG_SCREEN_SIZE,
  SMALL_SCREEN_SIZE,
} from "../../../../constants/constants";

function slidesToShow(width: number) {
  if (width <= SMALL_SCREEN_SIZE) {
    return 5;
  } else if (width < EXTRA_BIG_SCREEN_SIZE && width >= SMALL_SCREEN_SIZE) {
    return 7;
  }
  return 9;
}

export default function Weather() {
  const [, width] = useWindowSize();
  const place: string = "Chișinău";
  let weather = usePlaceWeather({ place: place });

  const weatherDaysObj = {
    slidesToShow: slidesToShow(width),
    slidesToScroll: 3,
    days: [
      {
        date: "10.05",
        temperature: "20",
        weather_description: weather.weatherDescription,
      },
      {
        date: "11.05",
        temperature: "21",
        weather_description: weather.weatherDescription,
      },
      {
        date: "12.05",
        temperature: "22",
        weather_description: weather.weatherDescription,
      },
      {
        date: "13.05",
        temperature: "23",
        weather_description: weather.weatherDescription,
      },
      {
        date: "14.05",
        temperature: "24",
        weather_description: weather.weatherDescription,
      },
      {
        date: "15.05",
        temperature: "25",
        weather_description: weather.weatherDescription,
      },
      {
        date: "16.05",
        temperature: "26",
        weather_description: weather.weatherDescription,
      },
      {
        date: "17.05",
        temperature: "27",
        weather_description: weather.weatherDescription,
      },
    ],
  };

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.country_weather}>
          {width >= BIG_SCREEN_SIZE ? (
            <CountryWeather
              temperature={weather.temp}
              place={place}
              date={weather.dateTime}
              icon={<WeatherIcon type={weather.weatherDescription} />}
            />
          ) : null}
        </div>
        <div className={classes.weather}>
          <div className={classes.weather_details}>
            <WeatherSwipeToSlide details={weatherDaysObj} />
          </div>
        </div>
      </div>
    </div>
  );
}
