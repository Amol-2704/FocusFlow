import Header from "./components/layout/Header";
import TimerHero from "./components/timer/TimerHero";
import SettingsPanel from "./components/settings/SettingsPanel";
import Dashboard from "./components/dashboard/Dashboard";
import { usePomodoro } from "./hooks/usePomodoro";
import { requestNotificationPermission } from "./utils/notifications";
import ProgressCard from "./components/dashboard/ProgressCard";
import { useEffect } from "react";


export default function App() {

  useEffect(() => {
  requestNotificationPermission();
}, []);

  const {
    state,
    start,
    pause,
    reset,
    updateSettings,
  } = usePomodoro();

  useEffect(() => {
    function handelKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement;

      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA"
      ) {
        return;
      }

      switch (event.code) {
        case "Space":
          event.preventDefault();

          if (state.isTimerRunning) {
            pause();
          } else {
            start();
          }
          break;
          
        case "KeyR":
          event.preventDefault();
          reset();
          break;
      }
    }

    window.addEventListener("keydown", handelKeyDown);

    return () => {
      window.removeEventListener("keydown", handelKeyDown);
    };
  }, [state.isTimerRunning, start, pause, reset]);


  return (
    <main className="min-h-screen px-4 sm:px-6 lg:py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">

        <Header />

          <TimerHero
            session={state.session}
            timeRemaining={state.timeRemaining}
            isRunning={state.isTimerRunning}
            settings={state.settings}
            onStart={start}
            onPause={pause}
            onReset={reset}
          />

        <Dashboard state={state} />
          <div className="mt-2">

        <SettingsPanel
          settings={state.settings}
          isRunning={state.isTimerRunning}
          onSave={updateSettings}
        />
      
      <div className="mt-8"></div>
        <ProgressCard
          completedPomodoros={state.completedPomodoros}
          longBreakInterval={state.settings.longBreakInterval}

        />
          </div>
      </div>
    </main>
  );
}