import StatCard from "./StatCard";
import type { PomodoroState } from "../../types/pomodoro";

interface DashboardProps {
  state: PomodoroState;
}

export default function Dashboard({
  state,
}: DashboardProps) {
  const focusMinutes =
    state.completedPomodoros *
    state.settings.workDuration;

  const currentCycle =
    (state.completedPomodoros %
      state.settings.longBreakInterval) + 1;

  const remaining =
    state.settings.longBreakInterval -
    (state.completedPomodoros %
      state.settings.longBreakInterval);

  const SESSION_LABELS = {
    work: "Foucs",
    shortBreak: "Short Break",
    longBreak: "Long Break",
  };      

  return (
    <section className="grid gap-6 md:grid-cols-2">

      <StatCard
        title="Completed Sessions"
        value={state.completedPomodoros}
      />

      <StatCard
        title="Current Session"
        value={SESSION_LABELS[state.session]}
      />

      <StatCard
        title="Focus Time Today"
        value={`${focusMinutes} min`}
      />

      <StatCard
        title="Next Long Break"
        value={`${remaining} session${remaining === 1 ? "" : "s"}`}
        subtitle={`Cycle ${currentCycle}/${state.settings.longBreakInterval}`}
      />

    </section>
  );
}