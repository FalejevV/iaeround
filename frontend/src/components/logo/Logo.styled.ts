import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    width:100%;
    max-width:200px;
    min-width:200px;
    min-height:60px;

    @media(max-width:850px){
        min-width:130px;
        max-width:130px;
    }

    @media(max-width:625px){
        min-width:60px;
        max-width:60px;
    }
`

export const LogoImage = styled.img`
    max-width:200px;
    min-width:200px;
    min-height:60px;
    background-color: transparent;

    @media(max-width:850px){
        min-width:130px;
        max-width:130px;
    }

    @media(max-width:625px){
        min-width:60px;
        max-width:60px;
    }
`
