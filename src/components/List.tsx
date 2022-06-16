import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { CompletionState, TaskToDo } from "../model";
import ListItem from "./ListItem";

const Item = React.memo(ListItem);

const updateListItem = <T extends unknown>(id: string, items: Array<T>, updateFunction: (item: T) => void) => {
    const index = items.findIndex((item: any) => item?.id === id);
    
    const updated = items[index];
    updateFunction(updated)
    
    return  [...items.slice(0, index), updated, ...items.slice(index + 1)];
}

const updateTodoState = (item: TaskToDo) => {
    if (CompletionState.FINISHED === item.state) {
        item.state = CompletionState.OPEN;
    } else {
        item.state = CompletionState.FINISHED;
    }
}

const initialState = [
    {
        id: "51c9cf27-45eb-474a-9c7a-c3b1210f445a",
        title: 'Lorem ipsum dolor sit',
        schedule_date: new Date(),
        state: CompletionState.OPEN,
        color: "#D3F9D9"
    },
    {
        id: "8abafc55-d960-442a-9b28-6adfb118568c",
        title: 'Ut enim ad minim veniam, quis nostrud exercitation',
        schedule_date: new Date(),
        state: CompletionState.OPEN,
        color: "#D3E2F9"
    },
    {
        id: "6f9e644f-f2ac-48c0-bb06-861c8cdb76bf",
        title: 'Lorem ipsum dolor sit',
        schedule_date: new Date(),
        state: CompletionState.OPEN,
        color: "#D3F9D9"
    },
    {
        id: "c551037c-e781-4398-868c-3bc3a72263e2",
        title: 'Ut enim ad minim veniam, quis nostrud exercitation',
        schedule_date: new Date(),
        state: CompletionState.OPEN,
        color: "#D3E2F9"
    },
    {
        id: "6b5b0730-36ae-4f4a-9e98-7b122300e8c4",
        title: 'Lorem ipsum dolor sit',
        schedule_date: new Date(),
        state: CompletionState.OPEN,
        color: "#D3F9D9"
    },
    {
        id: "7264c9d7-cbdc-4052-b428-f852c9d1db32",
        title: 'Ut enim ad minim veniam, quis nostrud exercitation',
        schedule_date: new Date(),
        state: CompletionState.OPEN,
        color: "#D3E2F9"
    },
] as Array<TaskToDo>;

const List = () => {
    const [items, setItems] = useState(initialState);

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const newList = updateListItem(value, items, updateTodoState);
        setItems(newList);
    }, [items]);

    return (
        <StyledList>
            {items.map((item, index) => {
                return (
                    <Item key={index} {...item} onChange={handleChange} />
                )
            })}
        </StyledList>
    );
}

export default List;

const StyledList = styled.ul`
    list-style: none;
    padding: 1rem 2rem;

    margin-bottom: 3.5rem;

    li:not(:last-child) {
        margin-bottom: 1rem;
    }
`