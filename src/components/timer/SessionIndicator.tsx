import Badge from "../ui/Badge";
import type { Sessiontype } from "../../types/pomodoro";

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
    <Badge>
      {SESSION_LABELS[session]}
    </Badge>
  );
}