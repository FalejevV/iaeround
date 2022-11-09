import styled from "styled-components";
import { Container } from "../components/Styles.styled";

export const ProfileContainer = styled(Container)`
    padding-top: 160px;
`

export const ProfileInfo = styled.div`
    margin: 0 auto;
    width:880px;
    display: flex;
    justify-content: flex-start;
`

export const Avatar = styled.img`
    width: 150px;
    height:150px;
    border-radius:50%;
    padding:25px;
    background-color: rgba(0,0,0,0.1);
`

export const StatText = styled.p`
    font-size: 18px;
    white-space:nowrap;
    font-style: italic;
`

export const Stats = styled.div`
    padding: 10px 20px;
    width:150px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap:10px;

    ${StatText}{
        &:first-child{
            font-size: 20px;
            font-style: unset;
            font-weight: 700;
        }
    }
`

export const FlexPusher = styled.div`
    flex:auto;
`

export const AboutText = styled.p`
    font-style: italic;
    font-size: 18px;
    color:#3c3c3c;
    height:100%;
    padding-top: 27px;
    padding-right: 30px;
`
