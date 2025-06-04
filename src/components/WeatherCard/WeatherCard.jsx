import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const filteredOptions = weatherOptions.filter((option) => {
    return (
    option.day === weatherData.isDay &&
    option.condition === weatherData.condition
    );
  });

  let weatherOption;
  let isFallback = false;

  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
    isFallback = true;
  } else {
    weatherOption = filteredOptions[0];
  }

  const altText = isFallback
  ? `It is ${weatherData.isDay ? "daytime" : "nighttime"}`
  : `Card showing ${weatherData.isDay ? "day" : "night"}time ${weatherOption.condition} weather`;

  return <section className="weather-card">
    <p className="weather-card__temp">{weatherData.temp.F} &deg;F</p>
    <img
    src={weatherOption?.url}
    alt={altText}
    className="weather-card__image" />
  </section>;
}

export default WeatherCard;