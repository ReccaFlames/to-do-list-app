import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({theme}) => theme.background};
        color: ${({theme}) => theme.color};
    }
`;

export const light = {
    background: "#fff",
    color: "#000",
    subtitle: "#000",

    buttonGroup: {
        inactive: {
            color: "#fff",
            text: "#000",
            border: "#000",
        },

        active: {
            color: "#000",
            text: "#fff",
        },
    }
};

export const dark = {
    background: "#000",
    color: "#fff",
    subtitle: "#000",

    buttonGroup: {
        inactive: {
            color: "#292828",
            text: "#fff",
            border: "#292828",
        },

        active: {
            color: "#fff",
            text: "#000",
        },
    }
};