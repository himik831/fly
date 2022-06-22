import React from "react";
import classes from "./Weather.module.scss";
import { BsSun } from "react-icons/bs";
import { BsCloudSun } from "react-icons/bs";
import { BsCloudRain } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import useWindowSize from "../../../../hooks/window_size/useWindowSize";
import CountryWeather from "./country_weather/CountryWeather.tsx";
import WeatherDetails from "./weather_details/WeatherDetails.tsx";
import usePlaceWeather from "../../../../hooks/weather/usePlaceWeather.tsx";

export default function Weather() {
  const bigScreen = 1200;
  const [, width] = useWindowSize();

  const weather = usePlaceWeather();
  console.log(weather)
  
  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.country_weather}>
          {width >= bigScreen ? (
            <CountryWeather
              // temperature={weather.temp}
              // place={weather}
              // date={weather.dateTime}
              temperature={'22'}
              place={'Chis'}
              date={'20.20.20'}
              icon={<BsCloudSun size={20} />}
            />
          ) : null}
        </div>
        <div className={classes.weather}>
          <div className={classes.weather_details}>
            <WeatherDetails
              date={"14.05"}
              icon={<BsCloudRain size={width >= bigScreen ? 20 : 15} />}
              temperature={"32"}
            />
            <WeatherDetails
              date={"15.05"}
              icon={<BsSun size={width >= bigScreen ? 20 : 15} />}
              temperature={"28"}
            />
            <WeatherDetails
              date={"16.05"}
              icon={<BsCloudSun size={width >= bigScreen ? 20 : 15} />}
              temperature={"25"}
            />
            <WeatherDetails
              date={"17.05"}
              icon={<BsSun size={width >= bigScreen ? 20 : 15} />}
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
