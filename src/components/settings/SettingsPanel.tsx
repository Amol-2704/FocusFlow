import { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import type { PomodoroSettings } from "../../types/pomodoro";

interface SettingsPanelProps {
  settings: PomodoroSettings;
  onSave: (settings: PomodoroSettings) => void;
}

interface SettingFieldProps {
  label: string;
  value: number;
  suffix: string;
  onChange: (value: number) => void;
}

function SettingField({
  label,
  value,
  suffix,
  onChange,
}: SettingFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-zinc-300">
        {label}
      </label>

      <div className="relative">
        <input
          type="number"
          min={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="
            w-full
            rounded-2xl
            border
            border-zinc-700
            bg-[#24181D]
            px-4
            py-3
            pr-16
            text-white
            outline-none
            transition
            focus:border-orange-500
            focus:ring-2
            focus:ring-orange-500/20
          "
        />

        <span
          className="
            pointer-events-none
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-sm
            text-zinc-500
          "
        >
          {suffix}
        </span>
      </div>
    </div>
  );
}

export default function SettingsPanel({
  settings,
  onSave,
}: SettingsPanelProps) {
  const [values, setValues] = useState(settings);

  function updateField(
    key: keyof PomodoroSettings,
    value: number
  ) {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  return (
    <Card className="p-8">

      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Timer Settings
        </h2>

        <p className="mt-2 text-zinc-400">
          Customize your focus workflow.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <SettingField
          label="Work Duration"
          value={values.workDuration}
          suffix="min"
          onChange={(value) =>
            updateField("workDuration", value)
          }
        />

        <SettingField
          label="Short Break"
          value={values.shortBreakDuration}
          suffix="min"
          onChange={(value) =>
            updateField("shortBreakDuration", value)
          }
        />

        <SettingField
          label="Long Break"
          value={values.longBreakDuration}
          suffix="min"
          onChange={(value) =>
            updateField("longBreakDuration", value)
          }
        />

        <SettingField
          label="Long Break Interval"
          value={values.longBreakInterval}
          suffix="sessions"
          onChange={(value) =>
            updateField("longBreakInterval", value)
          }
        />

      </div>

      <Button
        className="mt-8 w-full"
        onClick={() => onSave(values)}
      >
        Save Changes
      </Button>

    </Card>
  );
}