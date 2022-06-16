import classNames from "classnames";
import styled from "styled-components";
import { IconType } from "react-icons";
import React from "react";

interface ButtonProps {
    text: string;
    type: "button"|"submit"|"reset";
    className?: string;
    icon?: IconType;
}

const Button = (props: ButtonProps) => {
    const { type, text, className, icon } = props;

    let btnClass = classNames(className)

    return (
        <StyledButton 
            type={type} 
            className={btnClass}
        >
            <Content>
                {icon && React.createElement(icon)}
                {text}
            </Content>
        </StyledButton>
    );
}

export default Button;

const StyledButton = styled.button`
    background-color: #000;
    color: #fff;
    border: none;
    padding: .5em 1.5em;
    border-radius: 1.5em;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
    box-shadow: 0px 4px 5px -4px rgba(66, 68, 90, 1);
`;

const Content = styled.div`
    display: flex;
    justify-content: center;

    svg {
        margin-right: .5em;
    }
`;