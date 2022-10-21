import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        text-decoration: none;
        border:0px;
        outline: none;
        font-family: 'DM Sans', sans-serif;
    }

    body{
        max-width: 100vw;
        overflow-x: hidden;
    }
`