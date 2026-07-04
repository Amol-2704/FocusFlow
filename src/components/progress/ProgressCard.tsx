import Card from "../ui/Card";

interface ProgressCardProps {
  completedPomodoros: number;
  longBreakInterval: number;
}

export default function ProgressCard({
  completedPomodoros,
  longBreakInterval,
}: ProgressCardProps) {
  const currentCycle =
    completedPomodoros % longBreakInterval;

  return (
    <Card className="mt-6">
      <h2 className="mb-4 text-lg font-semibold">
        Progress
      </h2>

      <div className="mb-5 flex gap-2">
        {Array.from({
          length: longBreakInterval,
        }).map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full transition-colors ${
              index < currentCycle
                ? "bg-indigo-500"
                : "bg-zinc-700"
            }`}
          />
        ))}
      </div>

      <p className="text-zinc-300">
        Completed Pomodoros:
        <span className="ml-2 font-semibold text-white">
          {completedPomodoros}
        </span>
      </p>

      <p className="mt-2 text-zinc-300">
        Cycle:
        <span className="ml-2 font-semibold text-white">
          {currentCycle} / {longBreakInterval}
        </span>
      </p>
    </Card>
  );
}