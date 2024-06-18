import { IconDroplet, IconGauge, IconMist, IconPennant, IconSunrise, IconSunset } from '@tabler/icons-react'
import { useState } from 'react'
import formatTime from './utils/formatTime';
import CitySearch from './components/CitySearch';
import InfoCard from './components/InfoCard';
import MainInfoCard from './components/MainInfoCard';
import './App.css'

function App() {
  const [data, setData] = useState({});

  const { temp, wind, sunrise, visibility, pressure, humidity, sunset, location, timezone } = data;

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col gap-4 shadow-md shadow-slate-500 p-10 bg-slate-900 text-slate-50 rounded-md">
        <CitySearch onSuccess={(data) => setData(data)} />
        <div className="flex gap-6">
          <MainInfoCard temp={temp} location={location} />
          <div className="flex-1 grid grid-cols-2 gap-3">
            <InfoCard Icon={<IconPennant />} title="Wind Speed" value={`${wind} km/h`} />
            <InfoCard Icon={<IconGauge />} title="Pressure" value={`${pressure} hPA`} />
            <InfoCard Icon={<IconSunrise />} title="Sunrise" value={sunrise && formatTime(sunrise, timezone)} />
            <InfoCard Icon={<IconDroplet />} title="Humidity" value={`${humidity}%`} />
            <InfoCard Icon={<IconMist />} title="Visibility" value={`${visibility} m`} />
            <InfoCard Icon={<IconSunset />} title="Sunset" value={sunset && formatTime(sunset, timezone)} />
          </div>
        </div>
      </div>
    </div >
  )
}

export default App
