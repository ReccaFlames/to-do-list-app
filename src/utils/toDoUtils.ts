import { CompletionState, TaskToDo } from "../model";

export const updateTodoState = (item: TaskToDo) => {
    if (CompletionState.FINISHED === item.state) {
        item.state = CompletionState.OPEN;
    } else {
        item.state = CompletionState.FINISHED;
    }
}   
