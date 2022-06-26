import classNames from 'classnames';
import styled from 'styled-components';

interface ButtonsGrupProps {
    buttons: string[];
    selected?: string;
    setSelected?: (value: string) => void;
}

const ButtonsGroup = (props: ButtonsGrupProps) => {
    
    const {buttons, selected, setSelected} = props;
    
    return (
        <StyledGroup>
            {buttons.map((name) => (
                <button 
                    key={name} 
                    name={name} 
                    className={classNames('group-outline-button', { 'active': name === selected})}
                    onClick={() => {
                        setSelected && setSelected(name)
                    }}
                >
                    {name}
                </button>
            ))}
        </StyledGroup>
    );
}

export default ButtonsGroup;

const StyledGroup = styled.div`

    .group-outline-button {
        background-color: ${({theme}) => theme.buttonGroup.inactive.color};
        color: ${({theme}) => theme.buttonGroup.inactive.text};
        border: 1px solid ${({theme}) => theme.buttonGroup.inactive.border};
        border-radius: 2em;
        padding: .5em 1.5em;
    }

    .group-outline-button:not(:last-child) {
        margin-right: .5rem;
    }

    .active {
        background-color: ${({theme}) => theme.buttonGroup.active.color};
        color: ${({theme}) => theme.buttonGroup.active.text};
    }
`;