import Slider from "react-slick";
import WeatherDayDetails from "../weather_day_details/WeatherDayDetails.tsx";
import WeatherIcon from "../weather_icons/WeatherIcon.tsx";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import classes from "./WeatherSwipeToSlide.module.scss";

export default function WeatherSwipeToSlide({ details }) {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div onClick={onClick}>
        <MdOutlineKeyboardArrowRight
          className={`${className} ${classes.button}`}
        />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: details.slidesToShow,
    slidesToScroll: details.slidesToScroll,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <div className={classes.body}>
      <Slider {...settings} className={classes.slider}>
        {details.days.map((element) => {
          return (
            <WeatherDayDetails
              date={element.date}
              icon={<WeatherIcon type={element.weather_description} />}
              temperature={element.temperature}
            />
          );
        })}
      </Slider>
    </div>
  );
}
