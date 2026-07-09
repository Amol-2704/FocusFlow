import Card from "../ui/Card";

interface StatCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
}

export default function StatCard({
    title,
    value,
    subtitle,
}: StatCardProps) {
    return (
        <Card className="p-6">
            <p className="text-sm text-zinc-400">
                {title}
            </p>

            <h3 className="mt-2 text-exl font-bold">
                {value}
            </h3>

            {subtitle && (
                <p className="mt-2 text-sm text-zinc-500">
                    {subtitle}
                </p>
            )}
        </Card>       
    );
}
