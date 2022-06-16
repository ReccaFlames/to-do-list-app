import classNames from "classnames";
import React from "react";
import { CgCalendar, CgMoreVerticalAlt } from "react-icons/cg";
import styled from "styled-components";
import { Color, CompletionState } from "../model";
import Checkbox from "./Checkbox";

interface IItem {
    id: string;
    color?: Color;
    title: string;
    state: CompletionState;
    schedule_date: Date;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ListItem = (props: IItem) => {
    const done = classNames({"text-done": props.state === CompletionState.FINISHED});
    return (
        <Item bgColor={props.color}>
            <Row>
            <Col1>
                <Checkbox id={props.id} onChange={props.onChange} />
            </Col1>
            <Col2>
                <Title className={done}>{props.title}</Title>
                <SubTitle className={done}><CgCalendar />{props.schedule_date.toLocaleDateString()}</SubTitle>
            </Col2>
            <Col3>
                <StyledButton><CgMoreVerticalAlt /></StyledButton>
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
    display: inline-block;
`
