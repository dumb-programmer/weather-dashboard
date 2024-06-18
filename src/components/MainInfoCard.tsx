import { IconCloud, IconCloudFog, IconCloudRain, IconCloudStorm, IconDroplets, IconH1, IconHaze, IconMapPin, IconMist, IconSnowflake, IconSun, IconTornado, IconWind } from "@tabler/icons-react";

type MainInfoCardProps = {
    weather: string;
    weather_description: string;
    temp: number;
    location: string;
};

const getIcon = (weather: string) => {
    switch (weather) {
        case "thunderstorm":
            return <IconCloudStorm />
        case "drizzle":
            return <IconDroplets />
        case "rain":
            return <IconCloudRain />
        case "snow":
            return <IconSnowflake />
        case "haze":
            return <IconHaze />
        case "mist":
            return <IconMist />
        case "dust":
        case "squall":
        case "sand":
            return <IconWind />
        case "fog":
        case "ash":
            return <IconCloudFog />
        case "tornado":
            return <IconTornado />
        case "clear":
            return <IconSun />
        case "clouds":
            return <IconCloud />

    }
}

export default function MainInfoCard({ weather, weather_description, temp, location }: MainInfoCardProps) {
    return <div className="bg-slate-800 p-8 rounded-md border flex flex-col gap-8">
        {getIcon(weather)}
        <div>
            <h1 className="text-2xl font-bold">{temp} &deg; C</h1>
            <p className="text-sm">{weather_description}</p>
        </div>
        <div className="border-t-[1px] pt-4 text-xs">
            <p className="flex items-center gap-2 font-semibold"><IconMapPin size={18} strokeWidth={1.5} /> {location}</p>
        </div>
    </div>;
}