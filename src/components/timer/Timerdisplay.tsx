import { formatTime } from "../../utils/time";
import { SESSION_LABELS } from "../../constants/session";
import type { Sessiontype } from "../../types/pomodoro";
import { motion, AnimatePresence } from "framer-motion";

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
    
    <AnimatePresence mode="wait">

      <motion.h2
        key={timeRemaining}
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -8,
        }}
        transition={{
          duration: 0.18,
        }}
        className="text-7xl font-bold tracking-tight"
      >
        {formatTime(timeRemaining)}
      </motion.h2>
    </AnimatePresence>

      <p className="mt-3 text-lg text-zinc-500">
        {SESSION_LABELS[session]}
      </p>
    </div>
  );
}
