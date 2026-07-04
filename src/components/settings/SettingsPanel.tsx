import { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import type { PomodoroSettings } from "../../types/pomodoro";

interface SettingsPanelProps {
  settings: PomodoroSettings;
  onSave: (settings: PomodoroSettings) => void;
}

export default function SettingsPanel({
  settings,
  onSave,
}: SettingsPanelProps) {
  const [values, setValues] = useState(settings);

  function handleChange(
    key: keyof PomodoroSettings,
    value: number
  ) {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  return (
    <Card className="mt-6">
      <h2 className="mb-4 text-lg font-semibold">
        Settings
      </h2>

      <div className="space-y-4">

        <label className="block">
          <span>Work Duration</span>

          <input
            type="number"
            value={values.workDuration}
            onChange={(e) =>
              handleChange(
                "workDuration",
                Number(e.target.value)
              )
            }
            className="mt-1 w-full rounded-lg bg-zinc-800 p-2"
          />
        </label>

        <label className="block">
          <span>Short Break</span>

          <input
            type="number"
            value={values.shortBreakDuration}
            onChange={(e) =>
              handleChange(
                "shortBreakDuration",
                Number(e.target.value)
              )
            }
            className="mt-1 w-full rounded-lg bg-zinc-800 p-2"
          />
        </label>

        <label className="block">
          <span>Long Break</span>

          <input
            type="number"
            value={values.longBreakDuration}
            onChange={(e) =>
              handleChange(
                "longBreakDuration",
                Number(e.target.value)
              )
            }
            className="mt-1 w-full rounded-lg bg-zinc-800 p-2"
          />
        </label>

        <label className="block">
          <span>Long Break Interval</span>

          <input
            type="number"
            value={values.longBreakInterval}
            onChange={(e) =>
              handleChange(
                "longBreakInterval",
                Number(e.target.value)
              )
            }
            className="mt-1 w-full rounded-lg bg-zinc-800 p-2"
          />
        </label>

        <Button
          className="w-full"
          onClick={() => onSave(values)}
        >
          Save Settings
        </Button>

      </div>
    </Card>
  );
}