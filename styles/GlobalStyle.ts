import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        text-decoration: none;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-size: 16px; 

        @media (min-width: 1600px) {
            font-size: 1.2rem;
        }

        @media (max-width: 1200px) {
            font-size: 0.9rem;
        }

        
        @media (max-width: 900px) {
            font-size: 0.8rem;
        }

        
    }


    body {
        font-family: 'Open Sans', sans-serif;
        color: ${props => props.theme.colors.colorText};
    }

    ul {
        list-style: none;
    }   

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.colorText}
    }
`
