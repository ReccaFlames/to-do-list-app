import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        background: string;
        color: string;
        subtitle: string;

        buttonGroup: {
            inactive: {
                color: string;
                text: string;
                border: string;
            },
    
            active: {
                color: string;
                text: string;
            },
        },

        datePicker: {
            color: string,
            background: string,
        },

        textInput: {
            borderColor: string,
            helperColor: string,
            textColor: string,
        },
    }
}