import Header from "./components/layout/Header";
import TimerDisplay from "./components/timer/Timerdisplay";
import TimerControls from "./components/timer/TimerControls";
import SessionIndicator from "./components/timer/SessionIndicator";
import ProgressCard from "./components/progress/ProgressCard";
import SettingsPanel from "./components/settings/SettingsPanel";

import Card from "./components/ui/Card";

import { usePomodoro } from "./hooks/usePomodoro";

export default function App() {
  const {
    state,
    start,
    pause,
    reset,
    updateSettings,
  } = usePomodoro();

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">

        <Header />

        <Card className="flex flex-col items-center gap-6 p-10">

          <SessionIndicator
            session={state.session}
          />

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

        </Card>

        <ProgressCard
          completedPomodoros={state.completedPomodoros}
          longBreakInterval={state.settings.longBreakInterval}
        />

        <SettingsPanel
          settings={state.settings}
          onSave={updateSettings}
        />

      </div>
    </main>
  );
}