export type Sessiontype ="work" | "shortBreak" | "longBreak";

export interface PomodoroSettings {
    workDuration: number;
    shortBreakDuration: number;
    longBreakDuration: number;
    longBreakInterval: number;
}

export interface PomodoroState {
    session: Sessiontype;
    isTimerRunning: boolean;
    timeRemaining: number;
    sessionsCompleted: number;
    settings: PomodoroSettings;
}