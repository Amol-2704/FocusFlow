import Header from "./components/layout/Header";
import Card from "./components/ui/Card";
import TimerDisplay from "./components/timer/Timerdisplay";
import TimerControls from "./components/timer/TimerControls";

export default function App() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <Card className="w-full max-w-xl p-10">
        <Header />

        <TimerDisplay />

        <TimerControls />
      </Card>
    </main>
  );
}