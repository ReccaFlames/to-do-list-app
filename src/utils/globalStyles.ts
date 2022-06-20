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
};

export const dark = {
    background: "#000",
    color: "#fff",
};