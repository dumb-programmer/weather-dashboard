import { IconCurrentLocation, IconLoader2, IconSearch } from "@tabler/icons-react";
import React from "react";

type CityProps = {
    isError: boolean;
    isLoading: boolean;
    city: string;
    setCity: React.Dispatch<string>;
    handleSubmit: () => void;
}

export default function CitySearch({ isLoading, isError, city, setCity, handleSubmit }: CityProps) {
    return <form className="flex relative gap-3" onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
    }}>
        <IconSearch className="absolute top-[8px] left-2" size={20} onChange={() => {

        }} />
        <div className="flex flex-1 flex-col gap-1">
            <input type="text" className={`w-full bg-slate-800 p-1.5 pl-8 rounded-md border ${isError ? "border-red-400" : "border-transparent"}`} value={city} onChange={(e) => setCity(e.target.value)} />
            <span className={`text-red-400 text-xs ${isError ? "visible" : "opacity-0"}`}>Invalid city</span>
        </div>
        <button type="submit" className="bg-slate-800 p-2 h-[40px] rounded-md" disabled={isLoading}>
            {
                isLoading ? <IconLoader2 className="animate-spin" size={20} /> : <IconCurrentLocation size={20} />
            }
        </button>
    </form>
}