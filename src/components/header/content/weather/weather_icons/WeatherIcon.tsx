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
import {
  BIG_SCREEN_SIZE,
  EXTRA_BIG_SCREEN_SIZE,
} from "../../../../../constants/constants";

import useWindowSize from "../../../../../hooks/window_size/useWindowSize";

function generateIcon(Component: any, width: number) {
  const smallIcon = 15,
    bigIcon = width >= EXTRA_BIG_SCREEN_SIZE ? 40 : 20;

  return <Component size={width >= BIG_SCREEN_SIZE ? bigIcon : smallIcon} />;
}

export default function WeatherIcon({ type }) {
  const [, width] = useWindowSize();
  const iconValue = {
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

  return generateIcon(iconValue[type] || FaThermometerEmpty, width);
}
