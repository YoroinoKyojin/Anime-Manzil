import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
    }

    body {
        color: #6c7983;
        font-size: 1.2rem;
        background-color: #f5f5f5; /* Optional background color */
        &::-webkit-scrollbar {
            width: 7px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #27AE60;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-track {
            background-color: #EDEDED;
        }
    }

    /* Adjust font size and padding for mobile devices */
    @media (max-width: 240px) {
        body {
            font-size: 1rem; /* Slightly smaller font for mobile screens */
        }
    }

    /* Adjust font size and layout for larger screens (e.g., laptops) */
    @media (min-width: 1024px) {
        body {
            font-size: 1.1rem; /* Adjust font size for larger screens */
        }
    }
`;

export default GlobalStyle;