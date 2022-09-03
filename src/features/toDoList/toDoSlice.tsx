import { createSelector, createSlice } from '@reduxjs/toolkit';
import { CompletionState, TaskToDo } from '../../model';
import {v4 as uuidv4} from 'uuid';
import { updateListItem } from '../../utils/collectionUtils';
import { updateTodoState } from '../../utils/toDoUtils';

const initialState: Array<TaskToDo> = [
    {
        id: '51c9cf27-45eb-474a-9c7a-c3b1210f445a',
        task: 'Lorem ipsum dolor sit',
        scheduleDate: Date.now(),
        state: CompletionState.OPEN,
        color: '#c8ffeb'
    },
    {
        id: '8abafc55-d960-442a-9b28-6adfb118568c',
        task: 'Ut enim ad minim veniam, quis nostrud exercitation',
        scheduleDate: Date.now(),
        state: CompletionState.OPEN,
        color: '#daeaf6'
    },
]

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const myuuid = uuidv4();
            const newTask = {id: myuuid, state: CompletionState.OPEN, ...action.payload};
            state.push(newTask);
        },
        removeTask: (state, action) => {
            return state.filter(task => task.id !== action.payload.id);
        },
        updateTaskState: (state, {payload}) => {
            updateListItem(payload, state, updateTodoState);
        },
        updateTask: (state, {payload}) => {
            // eslint-disable-next-line
            const index = state.findIndex((item: any) => item?.id === payload.id);
    
            const updated = {...state[index], ...payload};
            return  [...state.slice(0, index), updated, ...state.slice(index + 1)];
        },
    },
});

const selectTodos = (state: Array<TaskToDo>) => state;

export const selectOpenTasks = createSelector(selectTodos, (todos: Array<TaskToDo>) => todos.filter(item => item.state === CompletionState.OPEN));
export const selectFinishedTasks = createSelector(selectTodos, (todos: Array<TaskToDo>) => todos.filter(item => item.state === CompletionState.FINISHED));

export const { addTask, removeTask, updateTaskState } = toDoSlice.actions;

export default toDoSlice.reducer;
