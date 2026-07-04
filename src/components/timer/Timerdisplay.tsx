interface TimerDisplayProps {
  timeRemaining: number;
  session: "work" | "shortBreak" | "longBreak";
}

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${minutes.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}

const sessionLabels = {
  work: "Focus Session",
  shortBreak: "Short Break",
  longBreak: "Long Break",
};

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
        {sessionLabels[session]}
      </p>
    </div>
  );
}