import Badge from "../ui/Badge";
import type { Sessiontype } from "../../types/pomodoro";
import { AnimatePresence, motion } from "framer-motion";

interface SessionIndicatorProps {
  session: Sessiontype;
}

const SESSION_LABELS: Record<Sessiontype, string> = {
  work: "🔥 Focus Session",
  shortBreak: "☕ Short Break",
  longBreak: "🌴 Long Break",
};

export default function SessionIndicator({
  session,
}: SessionIndicatorProps) {
  return (

  <AnimatePresence mode="wait">
    
    <motion.div
      key={session}
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 10,
      }}
      transition={{
        duration: 0.25,
      }}
    >
    
      <Badge>
        {SESSION_LABELS[session]}
      </Badge>
    
    </motion.div>
    
  </AnimatePresence>
  );
}