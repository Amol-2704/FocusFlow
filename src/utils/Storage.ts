import type { PomodoroState } from "../types/pomodoro";

const STORAGE_KEY = "focusflow-state";

export function saveState(state: PomodoroState) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );
  } catch (error) {
    console.error("Failed to save state:", error);
  }
}

export function loadState(): PomodoroState | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) return null;

    const state: PomodoroState = JSON.parse(stored);

    return {
      ...state,
      isTimerRunning: false,
      endTime: null,
    };
  } catch (error) {
    console.error("Failed to load state:", error);
    return null;
  }
}