import Button from "../ui/Button";

interface TimerControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export default function TimerControls({
  isRunning,
  onStart,
  onPause,
  onReset,
}: TimerControlsProps) {
  return (
    <div className="mt-8 flex justify-center gap-4">
      <Button
        onClick={onStart}
        disabled={isRunning}
      >
        Start
      </Button>

      <Button
        onClick={onPause}
        disabled={!isRunning}
        className="bg-zinc-700 hover:bg-zinc-600"
      >
        Pause
      </Button>

      <Button
        onClick={onReset}
        className="bg-red-600 hover:bg-red-500"
      >
        Reset
      </Button>
    </div>
  );
}