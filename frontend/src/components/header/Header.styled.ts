import styled, { css } from "styled-components";
import { ISearchView } from "../../interfaces";
import { Button, Container } from "../Styles.styled";

export const HeaderContainer = styled.div`
    width:100%;
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
    gap:80px;

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
    height:90px;
    border-bottom: 1px solid #c9c9c9;


    ${({ extended }) => !extended && css`
        border-bottom: 3px solid #3E6144;
    `}

    @media(max-width:350px){
        height:70px;
    }
`

export const FilterTagBarContainer = styled(Container)`
    width:100%;
    display: flex;
    width:100%;
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
    width:100%;

    transition:all 0.3s;
    height:0px;
    overflow:hidden;
    ${({ extended }) => extended && css`
        height:fit-content;
        border-bottom: 3px solid #3E6144;
        overflow:visible;
    `}
`