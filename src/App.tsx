import { IconCurrentLocation, IconDroplet, IconGauge, IconMapPin, IconMist, IconPennant, IconSearch, IconSun, IconSunrise, IconSunset, IconSunset2 } from '@tabler/icons-react'
import './App.css'
import { getTemperature } from './api/api'
import { useState } from 'react'
import formatTime from './utils/formatTime';

function App() {
  const [city, setCity] = useState<string>("");
  const [data, setData] = useState({});

  const { temp, wind, sunrise, visibility, pressure, humidity, sunset, location, timezone } = data;

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col gap-4 shadow-md shadow-slate-500 p-10 bg-slate-900 text-slate-50 rounded-md">
        <form className="flex relative gap-3" onSubmit={async (e) => {
          e.preventDefault()
          try {
            const data = await getTemperature(city);
            setData(data);
          }
          catch (error) {
            console.error(error);
          }
        }}>
          <IconSearch className="absolute top-[8px] left-2" size={20} onChange={() => {

          }} />
          <input type="text" className="w-full bg-slate-800 p-1.5 pl-8 rounded-md" value={city} onChange={(e) => setCity(e.target.value)} />
          <button type="submit" className="bg-slate-800 p-2 rounded-md">
            <IconCurrentLocation size={20} />
          </button>
        </form>
        <div className="flex gap-6">
          <div className="bg-slate-800 p-8 rounded-md border flex flex-col gap-8">
            <IconSun size={50} strokeWidth={1} />
            <div>
              <h1 className="text-2xl font-bold">{temp} &deg; C</h1>
              <p className="text-sm">Clear Sky</p>
            </div>
            <div className="border-t-[1px] pt-4 text-xs">
              <p className="flex items-center gap-2 font-semibold"><IconMapPin size={18} strokeWidth={1.5} /> {location}</p>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-3">
            <div className="bg-slate-800 flex gap-4 rounded-md items-center p-6">
              <IconPennant />
              <div>
                <h2 className="text-xs">Wind Speed</h2>
                <p className="font-semibold">{wind} km/h</p>
              </div>
            </div>
            <div className="bg-slate-800 flex gap-4 rounded-md items-center p-6">
              <IconGauge />
              <div>
                <h2 className="text-xs">Pressure</h2>
                <p className="font-semibold">{pressure} hPA</p>
              </div>
            </div>
            <div className="bg-slate-800 flex gap-4 rounded-md items-center p-6">
              <IconSunrise />
              <div>
                <h2 className="text-xs">Sunrise</h2>
                <p className="font-semibold">{sunrise && formatTime(sunrise, timezone)}</p>
              </div>
            </div>
            <div className="bg-slate-800 flex gap-4 rounded-md items-center p-6">
              <IconDroplet />
              <div>
                <h2 className="text-xs">Humidity</h2>
                <p className="font-semibold">{humidity}%</p>
              </div>
            </div>
            <div className="bg-slate-800 flex gap-4 rounded-md items-center p-6">
              <IconMist />
              <div>
                <h2 className="text-xs">Visibility</h2>
                <p className="font-semibold">{visibility} km</p>
              </div>
            </div>
            <div className="bg-slate-800 flex gap-4 rounded-md items-center p-6">
              <IconSunset />
              <div>
                <h2 className="text-xs">Sunset</h2>
                <p className="font-semibold">{sunset && formatTime(sunset, timezone)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
