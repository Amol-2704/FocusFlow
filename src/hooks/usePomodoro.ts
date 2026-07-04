import { useEffect, useReducer } from "react";
import { DEFAULT_SETTINGS } from "../constants/pomodoro";
import type { PomodoroState } from "../types/pomodoro";
import { TIMER_INTERVAL } from "../constants/timer";

const initialState: PomodoroState = {
    session: "work",
    isTimerRunning: false,
    timeRemaining: DEFAULT_SETTINGS.workDuration * 60,
    completedPomodoros: 0,
    settings: DEFAULT_SETTINGS,
    endTime: null,
};

type Action =
    | { type: "START"; payload: number }
    | { type: "PAUSE" }
    | { type: "RESET" }
    | { type: "TICK"; payload: number }
    | { type: "COMPLETE" };

function reducer(
    state: PomodoroState,
    action: Action
): PomodoroState {
    switch (action.type) {
        case "START":
            return {
                ...state,
                isTimerRunning: true,
                endTime: action.payload,
            };

        case "PAUSE":
            return {
                ...state,
                isTimerRunning: false,
                endTime: null,
            };

        case "RESET":
            return {
                ...state,
                isTimerRunning: false,
                timeRemaining:
                    state.settings.workDuration * 60,
                
                endTime: null,
            };

        case "TICK":
            return {
                ...state,
                timeRemaining: action.payload,
            };

        case "COMPLETE":
            return {
                ...state,
                isTimerRunning: false,
                timeRemaining: 0,
                endTime: null,
            };

        default: 
            return state;
    }
}

export function usePomodoro() {
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

    useEffect(() => {
        if (!state.isTimerRunning || !state.endTime) return;

        const interval = setInterval(() => {
            const remaining = Math.max(
                0,
                Math.ceil((state.endTime - Date.now()) / 1000)
            );

            dispatch({
                type: "TICK",
                payload: remaining,
            });

            if (remaining <= 0) {
                dispatch({
                    type: "COMPLETE",
                });
            }
        }, TIMER_INTERVAL);

        return () => clearInterval(interval);
    }, [state.isTimerRunning, state.endTime]);

    const start = () => {
  dispatch({
    type: "START",
    payload:
      Date.now() + state.timeRemaining * 1000,
  });
};

const pause = () => {
  if (!state.endTime) return;

  const remaining = Math.ceil(
    (state.endTime - Date.now()) / 1000
  );

  dispatch({
    type: "TICK",
    payload: remaining,
  });

  dispatch({
    type: "PAUSE",
  });
};

const reset = () => {
  dispatch({
    type: "RESET",
  });
};

return {
  state,
  start,
  pause,
  reset,
}
};