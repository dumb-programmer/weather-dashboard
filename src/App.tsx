import { IconDroplet, IconGauge, IconMist, IconPennant, IconSunrise, IconSunset } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import formatTime from './utils/formatTime';
import CitySearch from './components/CitySearch';
import InfoCard from './components/InfoCard';
import MainInfoCard from './components/MainInfoCard';
import useMutation from './hooks/useMutation';
import { getTemperature } from './api/api';
import './App.css'

function App() {
  const [data, setData] = useState(() => JSON.parse(localStorage.getItem("data") || "{}"));
  const [city, setCity] = useState<string>("");
  const { handleSubmit, isLoading, isError } = useMutation(async () => {
    const data = await getTemperature(city);
    setData(data);
  });

  const { temp, wind, sunrise, visibility, pressure, humidity, sunset, location, timezone, weather, weather_description } = data;

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
  }, [data]);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col gap-4 shadow-md shadow-slate-500 p-10 bg-slate-900 text-slate-50 rounded-md">
        <CitySearch isLoading={isLoading} isError={isError} city={city} setCity={setCity} handleSubmit={handleSubmit} />
        <div className="flex gap-6">
          <MainInfoCard weather={weather} weather_description={weather_description} temp={temp} location={location} />
          <div className="flex-1 grid grid-cols-2 gap-3">
            <InfoCard Icon={<IconPennant />} title="Wind Speed" value={wind && `${wind} km/h` || "N/A"} />
            <InfoCard Icon={<IconGauge />} title="Pressure" value={pressure && `${pressure} hPA` || "N/A"} />
            <InfoCard Icon={<IconSunrise />} title="Sunrise" value={sunrise && sunrise && formatTime(sunrise, timezone) || "N/A"} />
            <InfoCard Icon={<IconDroplet />} title="Humidity" value={humidity && `${humidity}%` || "N/A"} />
            <InfoCard Icon={<IconMist />} title="Visibility" value={visibility && `${visibility / 1000} km` || "N/A"} />
            <InfoCard Icon={<IconSunset />} title="Sunset" value={sunset && sunset && formatTime(sunset, timezone) || "N/A"} />
          </div>
        </div>
      </div>
    </div >
  )
}

export default App
