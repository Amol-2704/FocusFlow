import Header from "./components/layout/Header";
import Card from "./components/ui/Card";
import TimerDisplay from "./components/timer/Timerdisplay";
import TimerControls from "./components/timer/TimerControls";

import { usePomodoro } from "./hooks/usePomodoro";
import ProgressCard from "./components/progress/ProgressCard";
import SettingsPanel from "./components/settings/SettingsPanel";

export default function App() {
  const {
    state,
    start,
    pause,
    reset,
    updateSettings,
  } = usePomodoro();

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <Card className="w-full max-w-xl p-10">
        <Header />

        <TimerDisplay
          timeRemaining={state.timeRemaining}
          session={state.session}
        />

        <TimerControls
          isRunning={state.isTimerRunning}
          onStart={start}
          onPause={pause}
          onReset={reset}
        />

        <ProgressCard
          completedPomodoros={state.completedPomodoros}
          longBreakInterval={state.settings.longBreakInterval}
        />

        <SettingsPanel
          settings={state.settings}
          onSave={updateSettings}
        />
      </Card>
    </main>
  );
}