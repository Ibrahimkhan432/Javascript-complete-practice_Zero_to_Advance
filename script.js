const input = document.getElementById("inp");
const button = document.getElementById("btn");
const cityName = document.getElementById("cityname");
const cityLocation = document.getElementById("citylocation");
const cityWeather = document.getElementById("cityWeather");

async function getData(cityName) {
  const response =
    await fetch(`http://api.weatherapi.com/v1/current.json?key=&q=${cityName}&aqi=no
`);
  return await response.json();
}

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
console.log(result);
});
