export const weatherOptions = [
  {
    day: true,
    condition: "Clear",
    url: new URL("../assets/day/clear.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "Clouds",
    url: new URL("../assets/day/cloudy.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "Mist",
    url: new URL("../assets/day/foggy.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "Rain",
    url: new URL("../assets/day/rain.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "Snow",
    url: new URL("../assets/day/snow.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "Thunderstorm",
    url: new URL("../assets/day/storm.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "Clear",
    url: new URL("../assets/night/clear.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "Clouds",
    url: new URL("../assets/night/cloudy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "Mist",
    url: new URL("../assets/night/foggy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "Rain",
    url: new URL("../assets/night/rain.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "Snow",
    url: new URL("../assets/night/snow.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "Thunderstorm",
    url: new URL("../assets/night/storm.png", import.meta.url).href,
  },
];

export const defaultWeatherOptions = {
  day: {
    url: new URL("../assets/day/fallback.png", import.meta.url).href,
  },
  night: {
    url: new URL("../assets/night/fallback.png", import.meta.url).href,
  },
};

export const coordinates = {
  latitude: 36.881088,
  longitude: -89.586197,
};

export const APIkey = "00a595e8856f17b640b62a8e8a4505e7";
