import { useReducer } from "react";
import { DEFAULT_SETTINGS } from "../constants/pomodoro";
import type { PomodoroState } from "../types/pomodoro";

const initialState: PomodoroState = {
    session: "work",
    isTimerRunning: false,
    timeRemaining: DEFAULT_SETTINGS.workDuration * 60,
    sessionsCompleted: 0,
    settings: DEFAULT_SETTINGS,
};

type Action =
    | { type: "START" }
    | { type: "PAUSE" }
    | { type: "RESET" };

function reducer(
    state: PomodoroState,
    action: Action
): PomodoroState {
    switch (action.type) {
        case "START":
            return {
                ...state,
                isTimerRunning: true,
            };

        case "PAUSE":
            return {
                ...state,
                isTimerRunning: false,
            };

        case "RESET":
            return { ...initialState };

        default:
            return state;
    }
}

export function usePomodoro() {
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

    return {
        state,
        dispatch
    };

}
