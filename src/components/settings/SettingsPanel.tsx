import { useState } from "react";

import Card from "../ui/Card";
import Button from "../ui/Button";
import Input from "../ui/Input";

import type { PomodoroSettings } from "../../types/pomodoro";

interface SettingsPanelProps {
  settings: PomodoroSettings;
  onSave: (settings: PomodoroSettings) => void;
}

const fields = [
  {
    label: "Work Duration (minutes)",
    key: "workDuration",
  },
  {
    label: "Short Break (minutes)",
    key: "shortBreakDuration",
  },
  {
    label: "Long Break (minutes)",
    key: "longBreakDuration",
  },
  {
    label: "Long Break Interval",
    key: "longBreakInterval",
  },
] as const;

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
    <Card className="mt-6 p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Settings
      </h2>

      <div className="space-y-5">
        {fields.map(({ label, key }) => (
          <label
            key={key}
            className="block space-y-2"
          >
            <span className="text-sm font-medium text-[color:var(--foreground-secondary)]">
              {label}
            </span>

            <Input
              type="number"
              min={1}
              value={values[key]}
              onChange={(e) =>
                handleChange(
                  key,
                  Number(e.target.value)
                )
              }
            />
          </label>
        ))}

        <Button
          className="mt-4 w-full"
          onClick={() => onSave(values)}
        >
          Save Settings
        </Button>
      </div>
    </Card>
  );
}