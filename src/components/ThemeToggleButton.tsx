import styled from "styled-components";

interface IThemeToggleButton {
    isDark: boolean;
    onChange: () => void;
}

const ThemeToggleButton = (props: IThemeToggleButton) => {

    const {isDark, onChange} = props;

    return (
        <ContainerLabel
            title={isDark ? "Activate light mode" : "Activate dark mode"}
            aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
        >
            <input
                type="checkbox"
                value={"isDark"}
                checked={!isDark}
                onChange={onChange}
            />
            <div />
        </ContainerLabel>
    );
}

export default ThemeToggleButton;

const ContainerLabel = styled.label`
    cursor: pointer;
    
    input {
        display: none;
    }

    input + div {
        border-radius: 50%;
        width: 36px;
        height: 36px;
        position: relative;
        box-shadow: inset 14px -14px 0 0 bisque;
        transform: scale(1) rotate(-2deg);
        transition: box-shadow 0.5s ease 0s, transform 0.4s ease 0.1s;
    }

    input + div::before {
        content: "";
        width: inherit;
        height: inherit;
        border-radius: inherit;
        position: absolute;
        left: 0;
        top: 0;
        transition: background 0.3s ease;
    }

    input + div::after {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin: -4px 0 0 -4px;
        position: absolute;
        top: 50%;
        left: 50%;
        box-shadow: 0 -23px 0 #ffe8a6,
          0 23px 0 #ffe8a6,
          23px 0 0 #ffe8a6,
          -23px 0 0 #ffe8a6,
          15px 15px 0 #ffe8a6,
          -15px 15px 0 #ffe8a6,
          15px -15px 0 #ffe8a6,
          -15px -15px 0 #ffe8a6;
        transform: scale(0);
        transition: all 0.3s ease;
    }

    input:checked + div {
        box-shadow: inset 32px -32px 0 0 #fff;
        transform: scale(0.5) rotate(0deg);
        transition: transform 0.3s ease 0.1s, box-shadow 0.2s ease 0s;
    }

    input:checked + div::before {
        background: #ffe8a6;
        transition: background 0.3s ease 0.1s;
    }

    input:checked + div::after {
        transform: scale(1.5);
        transition: transform 0.5s ease 0.15s;
    }
`;