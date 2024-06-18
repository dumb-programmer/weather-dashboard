import { IconCurrentLocation, IconSearch } from "@tabler/icons-react";
import { getTemperature } from "../api/api";
import { useState } from "react";

type CityProps = {
    onSuccess: (data: any) => void;
}

export default function CitySearch({ onSuccess }: CityProps) {
    const [city, setCity] = useState<string>("");

    return <form className="flex relative gap-3" onSubmit={async (e) => {
        e.preventDefault()
        try {
            const data = await getTemperature(city);
            onSuccess(data);
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
}