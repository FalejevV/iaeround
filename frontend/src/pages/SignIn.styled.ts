import styled, { css } from "styled-components";
import { Container } from "../components/Styles.styled";
import { IToggle } from "../interfaces";

export const SIContainer = styled(Container)`
    padding: 30px;
    padding-top: 250px;
    max-width: 450px;
    @media(max-width:850px){
        padding-top: 200px;
    }

    @media(max-width:450px){
        padding-top: 150px;
    }

    @media(max-width:350px){
        padding-top: 115px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap:10px;
`
export const ButtonsContainer = styled.div`
    display: flex;
    width:100%;
    align-content: center;
    justify-content: space-between;
    margin-bottom: 20px;
`


export const ArrowSVGLeft = styled.svg`
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    fill: ${({ theme }) => theme.accentColor};
    left:20px;
    opacity:0;

    @media(max-width:850px){
        left:15px;
    }

    @media(max-width:450px){
        left:10px;
    }
`

export const ArrowSVGRight = styled(ArrowSVGLeft)`
    left:unset;
    right:20px;

    @media(max-width:850px){
        right:15px;
    }

    @media(max-width:450px){
        right:10px;
    }
`

export const SILogin = styled.button<IToggle>`
    margin-top: 20px;
    font-size:18px;
    background-color: ${({ theme }) => theme.accentColor};
    padding: 10px 20px;
    color:white;
    border-radius:5px;
    width:170px;
    transition: all 0.3s;
    position:relative;
    cursor:pointer;
    border:2px solid transparent;

    &:hover{
        filter: brightness(1.2);
    }

    ${({ toggle }) => !toggle && css`
        color: ${({ theme }) => theme.accentColor};
        background-color: transparent;
        border:2px solid ${({ theme }) => theme.accentColor};

        ${ArrowSVGLeft}{
            opacity: 1;
        }

        ${ArrowSVGRight}{
            opacity: 1;
        }

        &:hover{
            background-color: ${({ theme }) => theme.accentColor};
            color:white;

            ${ArrowSVGLeft}, ${ArrowSVGRight}{
                fill:white;
            }
        }
    `}

    @media(max-width:850px){
        font-size:17px;
        padding: 8px 18px;
        width:150px;
    }

    @media(max-width:450px){
        font-size:16px;
        padding: 8px 18px;
        width:130px;
    }

`

export const SIRegister = styled(SILogin)`
    
`

export const RegisterInputsContainer = styled.div<IToggle>`
    display: flex;
    flex-direction: column;
    overflow:hidden;
    width:100%;
    height:0px;

    transition: all 0.3s;

    ${({ toggle }) => toggle && css`
        height: 170px;
    `}
`
export const AlertContainer = styled.div`
    border:2px solid #9d0000;
    padding:10px 10px;
    display: flex;
    flex-direction: column;
    gap:5px;
    width:100%;
    border-radius: 5px;

`

export const AlertField = styled.p`
    font-size:15px;
    color:#9d0000;
`