import React from "react";
import styled from "styled-components";

interface CheckboxProps {
    id: string | number; 
    defaultChecked?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({id, defaultChecked, onChange}: CheckboxProps) => {
    return (
        <CheckboxContainer>
            <input value={id} defaultChecked={defaultChecked}  type="checkbox" onChange={onChange} />
        </CheckboxContainer>
    );
}

export default Checkbox;

const CheckboxContainer = styled.div`
    input[type="checkbox"] {
        /* Add if not using autoprefixer */
        -webkit-appearance: none;
        /* Remove most all native input styles */
        appearance: none;
        /* For iOS < 15 */
        background-color: var(--form-background);
        /* Not removed via appearance */
        margin: 0;
    
        font: inherit;
        color: black;
        width: 1.5em;
        height: 1.5em;
        border: 0.1rem solid black;
        border-radius: 50%;
        transform: translateY(-0.075em);
    
        display: grid;
        place-content: center;
        cursor: pointer;
    }
    
    input[type="checkbox"]::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        transform: scale(0);
        transform-origin: bottom left;
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em black;
    }
    
    input[type="checkbox"]:checked::before {
        transform: scale(1);
    }

    input[type="checkbox"]:checked {
        background-color: #1fe149;
    }
    
    input[type="checkbox"]:focus {
        outline: max(2px, 0.15em) solid black;
        outline-offset: max(2px, 0.15em);
    }
    
    input[type="checkbox"]:disabled {
        cursor: not-allowed;
    }
`;