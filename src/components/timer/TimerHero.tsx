import Card from "../ui/Card";
import SessionIndicator from "./SessionIndicator";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import CircularProgress from "./CircularProgress";


interface TimerHeroProps {
  session: "work" | "shortBreak" | "longBreak";
  timeRemaining: number;
  isRunning: boolean;

  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export default function TimerHero({
  session,
  timeRemaining,
  isRunning,
  onStart,
  onPause,
  onReset,
}: TimerHeroProps) {
  const duration = 
    session === "work"
      ? 25 * 60
      : session === "shortBreak"
      ? 6 * 60
      : 15 * 60;

    const progress = ((duration - timeRemaining) / duration) * 100;

  return (
    <Card className="relative flex flex-col items-center px-10 py-14">

    <div
        className="
        absolute
        top-0

        h-72
        w-72

        rounded-full

        bg-[#FF5521]/20

        blur-[110px]
        "
    />

    <div className="relative z-10 flex flex-col items-center">

        <SessionIndicator
            session={session}
        />

        <CircularProgress progress={progress}>

          <TimerDisplay
              session={session}
              timeRemaining={timeRemaining}
          />

        </CircularProgress>

        <p
            className="
            mt-4
            max-w-sm
            text-center
            text-zinc-400
            "
        >
            Stay focused.
            One session at a time.
        </p>

        <div className="mt-8">

            <TimerControls
                isRunning={isRunning}
                onStart={onStart}
                onPause={onPause}
                onReset={onReset}
            />

        </div>

    </div>

</Card>
  );
}