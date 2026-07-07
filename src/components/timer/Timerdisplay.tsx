import { formatTime } from "../../utils/time";
import { SESSION_LABELS } from "../../constants/session";
import type { Sessiontype } from "../../types/pomodoro";

interface TimerDisplayProps {
  timeRemaining: number;
  session: Sessiontype;
}

export default function TimerDisplay({
  timeRemaining,
  session,
}: TimerDisplayProps) {
  return (
    <div className="py-8 text-center">
      <h2 className="text-6xl font-mono font-light tracking-tight">
        {formatTime(timeRemaining)}
      </h2>

      <p className="mt-3 text-lg text-zinc-500">
        {SESSION_LABELS[session]}
      </p>
    </div>
  );
}
