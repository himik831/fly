import { BsSun } from "react-icons/bs";
import { BsCloudSun } from "react-icons/bs";
import { AiOutlineCloud } from "react-icons/ai";
import { BsClouds } from "react-icons/bs";
import { BsCloudRain } from "react-icons/bs";
import { BsCloudLightningRain } from "react-icons/bs";
import { BsCloudSnow } from "react-icons/bs";
import { RiMistFill } from "react-icons/ri";
import { FaThermometerEmpty } from "react-icons/fa";

import useWindowSize from "../../../../../hooks/window_size/useWindowSize";

export default function WeatherIcon({ type }) {
  const [, width] = useWindowSize();

  const bigScreen = 1200;
  const extraBigScreen = 2500;
  const smallIcon = 15, bigIcon = width >= extraBigScreen ? 40 : 20;

  switch (type) {
    case "clear sky":
      return <BsSun size={bigIcon} />;
    case "few clouds":
      return <BsCloudSun size={width >= bigScreen ? bigIcon : smallIcon} />;
    case "scattered clouds":
      return <AiOutlineCloud size={width >= bigScreen ? bigIcon : smallIcon} />;
    case "broken clouds":
      return <BsClouds size={width >= bigScreen ? bigIcon : smallIcon} />;
    case "shower rain":
      return <BsCloudRain size={width >= bigScreen ? bigIcon : smallIcon} />;
    case "rain":
      return <BsCloudRain size={width >= bigScreen ? bigIcon : smallIcon} />;
    case "thunderstorm":
      return <BsCloudLightningRain size={width >= bigScreen ? bigIcon : smallIcon} />;
    case "snow":
      return <BsCloudSnow size={width >= bigScreen ? bigIcon : smallIcon} />;
    case "mist":
      return <RiMistFill size={width >= bigScreen ? bigIcon : smallIcon} />;
    default:
      return <FaThermometerEmpty size={bigIcon} />;
  }
}
