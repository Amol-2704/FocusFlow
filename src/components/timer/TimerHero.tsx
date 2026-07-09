import Card from "../ui/Card";
import SessionIndicator from "./SessionIndicator";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import CircularProgress from "./CircularProgress";

import type { PomodoroState } from "../../types/pomodoro";
import { motion } from "framer-motion";

interface TimerHeroProps {
  session: "work" | "shortBreak" | "longBreak";
  timeRemaining: number;
  isRunning: boolean;
  settings: PomodoroState["settings"];

  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export default function TimerHero({
  session,
  timeRemaining,
  isRunning,
  settings,
  onStart,
  onPause,
  onReset,
}: TimerHeroProps) {
  const duration =
    session == "work"
      ? settings.workDuration * 60
      : session == "shortBreak"
      ? settings.shortBreakDuration * 60
      : settings.longBreakDuration * 60
    const progress = ((duration - timeRemaining) / duration) * 100;

    console.log(progress);

  return (
    <Card className="relative flex flex-col items-center px-10 py-14">

    <motion.div
      animate={{
        scale: [1, 1.08, 1],
        opacity: [0.2, 0.35, 0.2],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeOut",
      }}
      className="
          absolute
          top-0
          
          h-72
          w-72
          
          rounded-full
          
          bg-[#FF5521]
          
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