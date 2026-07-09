import { useEffect, useReducer } from "react";
import { DEFAULT_SETTINGS } from "../constants/pomodoro";
import type { PomodoroState, PomodoroSettings } from "../types/pomodoro";
import { TIMER_INTERVAL } from "../constants/timer";
import {
    getNextSession,
    getSessionDuration,
} from "../utils/session";
import { loadState, saveState } from "../utils/Storage";
import { showNotification } from "../utils/notifications";

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
    | { type: "COMPLETE" }
    | {
        type: "UPDATE_SETTINGS"
        payload: PomodoroSettings;
    };

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

        case "COMPLETE": {
            const completedPomodoros =
                state.session === "work"
                    ? state.completedPomodoros + 1
                    : state.completedPomodoros;

            const nextSession = getNextSession(
                state.session,
                state.completedPomodoros,
                state.settings
            );
            return {
                ...state,
                session: nextSession,
                completedPomodoros,
                isTimerRunning: false,
                endTime: null,
                timeRemaining: getSessionDuration(
                    nextSession,
                    state.settings
                ),
            };
        }

        case "UPDATE_SETTINGS": {
            return {
                ...state,
                settings: action.payload,
                timeRemaining: getSessionDuration(state.session, action.payload),
                isTimerRunning: false,
                endTime: null,
            };
        }
        default:
            return state;
    }
}

export function usePomodoro() {
    const [state, dispatch] = useReducer(
        reducer,
        loadState() ?? initialState
    );

useEffect(() => {
    if (!state.isTimerRunning || !state.endTime) return;

    const endTime = state.endTime;

    const interval = setInterval(() => {
        const remaining = Math.max(
            0,
            Math.ceil((endTime - Date.now()) / 1000)
        );

        dispatch({
            type: "TICK",
            payload: remaining,
        });

        if (remaining <= 0) {
            const audio = new Audio("/notification.mp3");

            audio.play().catch((error) => {
                console.error(
                    "Failed to play notification sound:",
                    error
                );
            });

            let title = "";
            let body = "";

            switch (state.session) {
                case "work":
                    title = "🔥 Focus Session Complete";
                    body = "Great work! Time for a short break";
                    break;

                case "shortBreak":
                    title = "Short Break Complete";
                    body = "Let's get back to focusing!";
                    break;

                case "longBreak":
                    title = "Long Break Complete";
                    body = "You're refreshed. Ready for another Session?";
                    break;
            }

            showNotification(title, body);

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

useEffect(() => {
    saveState(state);
}, [state]);

    const pause = () => {
        const endTime = state.endTime;

        if (!endTime) return;

        const remaining = Math.ceil (
            (endTime - Date.now()) / 1000   
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

    const updateSettings = (settings: PomodoroState["settings"]) => {
        dispatch({
            type: "UPDATE_SETTINGS",
            payload: settings,
        });
    };
    return {
        state,
        start,
        pause,
        reset,
        updateSettings,
    };
}