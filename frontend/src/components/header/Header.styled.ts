import styled, { css } from "styled-components";
import { ISearchView } from "../../interfaces";
import { Button, Container } from "../Styles.styled";

export const HeaderContainer = styled.div`
    width:100vw;
    background-color: white;
    box-shadow: 0 0 15px 1px #c0c0c0;
    height:fit-content;
    margin-bottom: 40px;
    position:fixed;
    z-index: 10;
`

export const TopBarContainer = styled(Container)`
    display: flex;
    align-items: center;
    align-content: center;
    gap:80px;
    height:90px;
    padding:5px 15px;
    overflow: visible;
    @media(max-width:1100px){
        gap:30px;
    }

    @media(max-width:625px){
        gap:15px;
        ${Button}{
            font-size: 0px;
            gap:0px;
            padding: 10px;
        };
    }

    @media(max-width:380px){
        gap:10px;
    }
    
`

export const TopBar = styled.div<ISearchView>`
    width:100%;
    max-height: 90px;
    min-height: 90px;
    transition: all 0.3s, border 0.7s;
    border-bottom: 1px solid #c9c9c9;
    ${({ extended, theme }) => !extended && css`
        border-bottom: 3px solid ${theme.accentColor};
        max-height: 92px;
        min-height: 92px;
    `}

    @media(max-width:350px){
        max-height: 70px;
        min-height: 70px;
    }
`

export const FilterTagBarContainer = styled(Container)`
    display: flex;
    width:100%;
    height:100%;
    justify-content: flex-start;
    gap:131px;
    align-items: center;
    @media(max-width:1100px){
        gap:80px;
    }
    @media(max-width:690px){
        gap:10px;
    }
    @media(max-width:850px){
        gap:20px;
        flex-direction: column-reverse;
        padding-left:0px;
        padding-right:0px;
        padding:15px;
    }
`

export const FilterTagBar = styled.div<ISearchView>`
    transition: all 0.5s, border 0.7s;
    width:100%;
    max-height: 0px;
    overflow: hidden;
    opacity:0;
    ${({ extended, theme }) => extended && css`
        transition: all 2s, border 0.7s;
        max-height: 500px;
        opacity:1;
        border-bottom: 3px solid ${theme.accentColor};
        overflow:visible;
    `}
`