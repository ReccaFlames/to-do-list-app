import { createSlice } from "@reduxjs/toolkit";
import { CompletionState, TaskToDo } from "../../model";
import {v4 as uuidv4} from 'uuid';
import { updateListItem } from "../../utils/collectionUtils";
import { updateTodoState } from "../../utils/toDoUtils";

const initialState: Array<TaskToDo> = [
    {
        id: "51c9cf27-45eb-474a-9c7a-c3b1210f445a",
        task: 'Lorem ipsum dolor sit',
        scheduleDate: Date.now(),
        state: CompletionState.OPEN,
        color: "#D3F9D9"
    },
    {
        id: "8abafc55-d960-442a-9b28-6adfb118568c",
        task: 'Ut enim ad minim veniam, quis nostrud exercitation',
        scheduleDate: Date.now(),
        state: CompletionState.OPEN,
        color: "#D3E2F9"
    },
]

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            let myuuid = uuidv4();
            const newTask = {id: myuuid, state: CompletionState.OPEN, ...action.payload};
            state.push(newTask);
        },
        removeTask: (state, action) => {
            state = state.filter(task => task.id !== action.payload.id);
        },
        updateTask: (state, {payload}) => {
            state = updateListItem(payload, state, updateTodoState);
        },
    },
})

export const { addTask, removeTask, updateTask } = toDoSlice.actions;

export default toDoSlice.reducer;
