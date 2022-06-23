import React from "react";
import classes from "./Weather.module.scss";
import useWindowSize from "../../../../hooks/window_size/useWindowSize";
import CountryWeather from "./country_weather/CountryWeather.tsx";
import WeatherIcon from "./weather_icons/WeatherIcon.tsx";
import usePlaceWeather from "../../../../hooks/weather/usePlaceWeather.tsx";
import WeatherSwipeToSlide from "./weather_swipe_to_slide/WeatherSwipeToSlide.tsx";

function slidesToShow(width: number) {
  const smallScreen = 767;
  const bigScreen = 1200;
  const extraBigScreen = 2500;
  if (width <= smallScreen) {
    return 5;
  } else if (width < extraBigScreen && width >= smallScreen) {
    return 7;
  }
  return 9;
}

export default function Weather() {
  const bigScreen = 1200;
  const [, width] = useWindowSize();
  const place: string = "Chisinau";
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
          {width >= bigScreen ? (
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
