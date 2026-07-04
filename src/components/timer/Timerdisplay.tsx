import { formatTime } from "../../utils/time";
import { SESSION_LABELS } from "../../constants/session";

interface TimerDisplayProps {
  timeRemaining: number;
  session: "work" | "shortBreak" | "longBreak";
}

export default function TimerDisplay({
  timeRemaining,
  session,
}: TimerDisplayProps) {
  return (
    <div className="py-8 text-center">
      <h2 className="text-7xl font-bold tracking-tight">
        {formatTime(timeRemaining)}
      </h2>

      <p className="mt-3 text-lg text-zinc-400">
        {SESSION_LABELS[session]}
      </p>
    </div>
  );
}