import { useState, useEffect } from "react";

export default function TodayTemperature() {
  const [temperature, setTemperature] = useState();

  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=43.59&longitude=7.11&hourly=temperature_2m")
      .then((response) => response.json())
      .then((data) => {
        setTemperature(data.hourly.temperature_2m[37]);
      });
  }, []);

  return (
    <div>
      <h2>Température de l’air aujourd’hui à 13h : {temperature ? temperature : null}°C</h2>
    </div>
  );
}