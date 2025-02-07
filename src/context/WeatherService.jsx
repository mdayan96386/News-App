export const fetchWeather = async (city) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=d2213b2b1c8f47bab3070212241211&q=${city}&aqi=yes`
  );
  const data = await response.json();
  return data;
};
