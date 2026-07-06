import Card from "./Card";

interface StatCardProps {
  label: string;
  value: string | number;
}

export default function StatCard({
  label,
  value,
}: StatCardProps) {
  return (
    <Card className="p-6">
      <div className="space-y-2">

        <p className="text-sm text-[color:var(--foreground-secondary)]">
          {label}
        </p>

        <h3 className="text-3xl font-bold">
          {value}
        </h3>

      </div>
    </Card>
  );
}