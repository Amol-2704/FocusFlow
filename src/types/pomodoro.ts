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
    completedPomodoros:number;

    settings:PomodoroSettings;

    endTime: number |   null; // to know where exactly the timer finishes 
}