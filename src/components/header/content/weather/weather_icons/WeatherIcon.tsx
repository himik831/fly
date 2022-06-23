import {
  BsSun,
  BsCloudSun,
  BsClouds,
  BsCloudRain,
  BsCloudLightningRain,
  BsCloudSnow,
} from "react-icons/bs";
import { AiOutlineCloud } from "react-icons/ai";
import { RiMistFill } from "react-icons/ri";
import { FaThermometerEmpty } from "react-icons/fa";

import useWindowSize from "../../../../../hooks/window_size/useWindowSize";

function generateIcon(Component, width) {
  const bigScreen = 1200;
  const extraBigScreen = 2500;
  const smallIcon = 15,
    bigIcon = width >= extraBigScreen ? 40 : 20;

  return <Component size={width >= bigScreen ? bigIcon : smallIcon} />;
}

export default function WeatherIcon({ type }) {
  const [, width] = useWindowSize();
  const aloha = {
    "clear sky": BsSun,
    "few clouds": BsCloudSun,
    "scattered clouds": AiOutlineCloud,
    "overcast clouds": AiOutlineCloud,
    "broken clouds": BsClouds,
    "shower rain": BsCloudRain,
    rain: BsCloudRain,
    thunderstorm: BsCloudLightningRain,
    snow: BsCloudSnow,
    mist: RiMistFill,
  };

  return generateIcon(aloha[type] || FaThermometerEmpty, width);
}
