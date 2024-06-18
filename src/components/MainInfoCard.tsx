import { IconMapPin, IconSun } from "@tabler/icons-react";

type MainInfoCardProps = {
    temp: number
    location: string
};

export default function MainInfoCard({ temp, location }: MainInfoCardProps) {
    return <div className="flex gap-6">
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
    </div>;
}