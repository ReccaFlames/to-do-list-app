import classNames from 'classnames';
import React from 'react';
import styled from 'styled-components';
import { Color } from '../model';

interface TextInputProps {
    label?: string;
    defaultValue?: string; 
    color?: Color
    error?: boolean;
    errorMessage?: string;
    onChange: (event: React.ChangeEvent) => void;
};

const TextInput = (props: TextInputProps) => {
    const { label, defaultValue, color, onChange, error, errorMessage } = props;
    const labelClasses = classNames('input-underlined', { 'input-danger': error});

    return (
        <TextContainer color={color}>
            <label className={labelClasses}>
                <input required onChange={onChange} defaultValue={defaultValue}/>
                <span className="input-label">{label}</span>
                {errorMessage && <span className="input-helper">{errorMessage}</span>}
            </label>
        </TextContainer>
    );
};

export default TextInput;

const TextContainer = styled.div<{color?: Color}>`
    position: relative;

    .input-underlined > input {
        border: none;
        border-bottom: 0.125rem solid ${({theme}) => theme.textInput.borderColor};
        display: flex;
        flex-direction: column;
        height: 2rem;
        font-size: 1.0625rem;
        padding-left: 0.875rem;
        line-height: 147.6%;
        padding: 0.5rem 0.825rem 0 0.825rem;;
        width: 90%;
    }

    .input-underlined > input:focus{
        outline: none;
    }

    .input-underlined > .input-label {
        position: absolute;
        top: 0.9375rem;
        left: 0.875rem;
        line-height: 147.6%;
        color: ${({theme}) => theme.textInput.helperColor};
        transition: top .2s;
    }

    .input-underlined > .input-helper {
        font-size: 0.9375rem;
        color: ${({theme}) => theme.textInput.helperColor};
        letter-spacing: 0.0275rem;
        margin: 0.525rem 0.875rem;
    }

    .input-underlined > input:hover {
        background: rgba(73, 133, 224, 0.12);
        border-color:  #121212;
    }

    .input-underlined > input:focus + .input-label,
    .input-underlined > input:valid + .input-label {
        top: 0;
        font-size: 0.7375rem;
        margin-bottom: 32px;
    }

    .input-underlined:not(.input-danger) > input:focus + .input-label {
        color: ${props => props.color ? props.color : '#5eacff'};
    }

    .input-underlined:not(.input-danger) > input:focus {
        border-color: ${props => props.color ? props.color : '#5eacff'};
    }

    /** DISABLED **/

    .input-underlined > input:disabled {
        background: #eff1f2;
        cursor: not-allowed;
    }

    .input-underlined > input:disabled + .input-label,
    .input-underlined > input:disabled ~ .input-helper{
        color: ${({theme}) => theme.textInput.helperColor};
    }


    /** DANGER **/

    .input-underlined.input-danger > .input-label, .input-underlined.input-danger > .input-helper {
        color: #b50706;
    }

    .input-danger > input {
        border-color: #b50706;
    }

    .input-underlined > input {
        background: transparent;
        color: ${({theme}) => theme.textInput.textColor};
    }
`;
