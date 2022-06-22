import React from "react";
import classes from "./Weather.module.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import useWindowSize from "../../../../hooks/window_size/useWindowSize";
import CountryWeather from "./country_weather/CountryWeather.tsx";
import WeatherDetails from "./weather_day_details/WeatherDayDetails.tsx";
import WeatherIcon from "./weather_icons/WeatherIcon.tsx";
import usePlaceWeather from "../../../../hooks/weather/usePlaceWeather.tsx";

export default function Weather() {
  const bigScreen = 1200;
  const [, width] = useWindowSize();
  const place: string = "Chisinau";

  const weather = usePlaceWeather({ place: place });

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
            <WeatherDetails
              date={"14.05"}
              icon={<WeatherIcon type={"few clouds"} />}
              temperature={"32"}
            />
            <WeatherDetails
              date={"15.05"}
              icon={<WeatherIcon type={'mist'} />}
              temperature={"28"}
            />
            <WeatherDetails
              date={"16.05"}
              icon={<WeatherIcon type={"snow"} />}
              temperature={"25"}
            />
            <WeatherDetails
              date={"17.05"}
              icon={<WeatherIcon type={"rain"} />}
              temperature={"33"}
            />
          </div>
          <div className={classes.next}>
            <MdOutlineKeyboardArrowRight size={width >= bigScreen ? 25 : 18} />
          </div>
        </div>
      </div>
    </div>
  );
}
