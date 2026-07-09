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
    <Card className="p-8">

      <div className="mb-8">

        <h2 className="text-2xl font-bold">
          Progress
        </h2>

        <p className="mt-1 text-zinc-400">
          Track your current productivity cycle.
        </p>

      </div>

      <div className="grid gap-5 sm:grid-cols-2">

        <div
          className="
          rounded-2xl
          border
          border-[#4A2C26]
          bg-[#221519]
          p-6
          text-center
          "
        >
          <p className="text-sm text-zinc-400">
            Completed Sessions
          </p>

          <h3 className="mt-3 text-4xl font-bold text-white">
            {completedPomodoros}
          </h3>

        </div>

        <div
          className="
          rounded-2xl
          border
          border-[#4A2C26]
          bg-[#221519]
          p-6
          text-center
          "
        >

          <p className="text-sm text-zinc-400">
            Current Cycle
          </p>

          <h3 className="mt-3 text-4xl font-bold text-white">
            {currentCycle}
            <span className="text-xl text-zinc-400">
              {" "}
              / {longBreakInterval}
            </span>
          </h3>

        </div>

      </div>

      <div className="mt-8">

        <div className="mb-3 flex items-center justify-between">

          <span className="text-sm text-zinc-400">
            Long Break Progress
          </span>

          <span className="text-sm text-zinc-400">
            {currentCycle}/{longBreakInterval}
          </span>

        </div>

        <div className="flex justify-center gap-3">

          {Array.from({
            length: longBreakInterval,
          }).map((_, index) => (

            <div
              key={index}
              className={`
                h-4
                w-4
                rounded-full
                transition-all
                duration-300

                ${
                  index < currentCycle
                    ? "scale-125 shadow:lg shadow-[#FF7324]/40"
                    : "bg-[#463238]"
                }
              `}
            />

          ))}

        </div>

      </div>

    </Card>
  );
}
