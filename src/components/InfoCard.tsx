type InfoCardProps = {
    Icon: React.ReactNode;
    title: string;
    value: string;
}

export default function InfoCard({ Icon, title, value }: InfoCardProps) {
    return <div className="bg-slate-800 flex gap-4 rounded-md items-center p-6">
        {Icon}
        <div>
            <h2 className="text-xs">{title}</h2>
            <p className="font-semibold">{value}</p>
        </div>
    </div>;
}