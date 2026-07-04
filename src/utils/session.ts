import type { PomodoroSettings, Sessiontype } from "../types/pomodoro";

export function getSessionDuration(
  session: Sessiontype,
  settings: PomodoroSettings
): number {
  switch (session) {
    case "work":
      return settings.workDuration * 60;

    case "shortBreak":
      return settings.shortBreakDuration * 60;

    case "longBreak":
      return settings.longBreakDuration * 60;
  }
}

export function getNextSession(
  currentSession: Sessiontype,
  completedPomodoros: number,
  settings: PomodoroSettings
): Sessiontype {
  if (currentSession === "work") {
    const completed = completedPomodoros + 1;

    return completed % settings.longBreakInterval === 0
      ? "longBreak"
      : "shortBreak";
  }

  return "work";
}