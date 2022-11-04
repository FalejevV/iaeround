import styled, { css } from "styled-components";
import { Container } from "../components/Styles.styled";
import { IToggle } from "../interfaces";

export const SIContainer = styled(Container)`
    padding-top: 250px;
    max-width: 450px;
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
`


export const ArrowSVGLeft = styled.svg`
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    fill: ${({ theme }) => theme.accentColor};
    left:20px;
    opacity:0;
`

export const ArrowSVGRight = styled(ArrowSVGLeft)`
    left:unset;
    right:20px;
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
