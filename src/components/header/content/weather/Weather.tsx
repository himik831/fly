import React from "react";
import classes from "./Weather.module.scss";
import { BsSun } from "react-icons/bs";
import { BsCloudSun } from "react-icons/bs";
import { BsCloudRain } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import useWindowSize from "../../../../hooks/WindowSize/useWindowSize";
import CountryWeather from "./country_weather/CountryWeather.tsx";
import WeatherDetails from "./weather_details/WeatherDetails.tsx";

export default function Weather() {
  const bigScreen = 1200;
  const [, width] = useWindowSize();

  return (
    <div className={classes.body}>
      <div className={classes.content}>
        <div className={classes.country_weather}>
          {width >= bigScreen ? (
            <CountryWeather
              temperature={33}
              place={"Canada"}
              date={"12 : 11 - Friday 9, 06 2022"}
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
