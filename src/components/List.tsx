import React, { useCallback } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { updateTask } from "../features/toDoList/toDoSlice";
import { TaskToDo } from "../model";
import ListItem from "./ListItem";

const Item = React.memo(ListItem);

const List = () => {
    const selectorItems = useAppSelector((state) => state.toDo) as Array<TaskToDo>;

    const dispatch = useAppDispatch();

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        dispatch(updateTask(value))
    }, [dispatch]);

    return (
        <StyledList>
            {selectorItems.map((item, index) => {
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