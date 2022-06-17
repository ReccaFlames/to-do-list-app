export interface TaskToDo {
    id: string;
    task: string;
    details?: string;
    scheduleDate: number;
    state: CompletionState;
    color?: Color;
}

export enum CompletionState {
    FINISHED,
    OPEN
}

export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;