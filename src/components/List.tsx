import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { updateTaskState } from '../features/toDoList/toDoSlice';
import { TaskToDo } from '../model';
import ListItem from './ListItem';

const Item = React.memo(ListItem);

interface ListProps {
    filter?: string;
    filters: any;
}

const List = ({filter, filters}: ListProps) => {
    const selectorItems = useAppSelector((state) => state.toDo) as Array<TaskToDo>;

    const dispatch = useAppDispatch();

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        dispatch(updateTaskState(value))
    }, [dispatch]);

    type ObjectKey = keyof typeof filters;

    return (
        <StyledList>
            {selectorItems.filter(filters[filter as ObjectKey]).map((item, index) => {
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
    padding: 0;

    li:not(:last-child) {
        margin-bottom: 1rem;
    }
`