import Header from "./components/layout/Header";
import TimerHero from "./components/timer/TimerHero";
import SettingsPanel from "./components/settings/SettingsPanel";
import Dashboard from "./components/dashboard/Dashboard";
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

          <TimerHero
            session={state.session}
            timeRemaining={state.timeRemaining}
            isRunning={state.isTimerRunning}
            onStart={start}
            onPause={pause}
            onReset={reset}
          />

        <Dashboard state={state} />

        <SettingsPanel
          settings={state.settings}
          onSave={updateSettings}
        />

      </div>
    </main>
  );
}