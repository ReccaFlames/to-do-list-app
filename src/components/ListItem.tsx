import classNames from 'classnames';
import React from 'react';
import { CgCalendar, CgPen, CgTrash } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch } from '../app/hooks';
import { removeTask } from '../features/toDoList/toDoSlice';
import { Color, CompletionState } from '../model';
import Checkbox from './Checkbox';

interface IItem {
    id: string;
    color?: Color;
    task: string;
    state: CompletionState;
    scheduleDate: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ListItem = (props: IItem) => {
    const completed = props.state === CompletionState.FINISHED;
    const done = classNames({'text-done': completed});

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onDeleteHandler = () => {
        dispatch(removeTask({id: props.id}));
    }

    const onEditClick = () => {
        navigate(`/update-task/${props.id}`)
    }

    return (
        <Item bgColor={props.color}>
            <Row>
            <Col1>
                <Checkbox id={props.id} defaultChecked={completed} onChange={props.onChange} />
            </Col1>
            <Col2>
                <Title className={done}>{props.task}</Title>
                <SubTitle className={done}><CgCalendar style={{marginRight: '.25rem'}}/>{new Date(props.scheduleDate).toLocaleDateString()}</SubTitle>
            </Col2>
            <Col3>
                <StyledButton onClick={onEditClick}><CgPen size="1.2rem"/></StyledButton>
                <StyledButton onClick={onDeleteHandler}><CgTrash size="1.2rem"/></StyledButton>
            </Col3>
            </Row>
        </Item>
    );
}

export default ListItem;

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
`;

const Item = styled.li<{bgColor?: string}>`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.bgColor};
    padding: .5rem .5rem .5rem 1rem;
    border-radius: .75rem;

    span:not(:last-child) {
        margin-bottom: .5rem;
    }

    .text-done {
        text-decoration: line-through;
    }
`;

const Title = styled.span`
    color: #000;
    font-weight: 600;
`;

const SubTitle = styled.span`
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.subtitle}
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const Col1 = styled.div`
    display: flex;
    align-items: center;
`

const Col2 = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 0 0.5rem 0 1rem;
`

const Col3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
