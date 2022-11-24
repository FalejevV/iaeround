import  styled, { css } from 'styled-components';
import { Button, Container } from '../components/Styles.styled';
import { IToggle } from '../interfaces';
import { Avatar } from './ProfilePage.styled';
import loadingGif from "../img/LineLoading.gif";

export const ProfileForm = styled.form`
`

export const ProfileSettingsContainer = styled(Container)`
    padding-top:140px;
    max-width: 600px;
    display:flex;
    flex-direction: column;
    gap:15px;
`
export const EmailChangeContainer = styled(ProfileSettingsContainer)`
    padding-top:70px;
`
export const PasswordChangeContainer = styled(ProfileSettingsContainer)`
    padding-top:70px;
    padding-bottom:100px;
`


export const AvatarContainer = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    gap:120px;

    margin-bottom: 60px;

    @media(max-width:550px){
        align-items:center;
        flex-direction: column;
        gap:10px;
    }
`

export const PreviewAvatar = styled(Avatar)`
    min-width: 150px;
    min-height: 150px;
`

export const SaveButton = styled(Button)<IToggle>`
    width:200px;    
    margin:0 auto;
    margin-top:20px;
    height:40px;
    overflow: hidden;
    position: relative;
    ${({ toggle }) => toggle && css`
        &:after{
            content: url(${loadingGif});
            left:0px;
            top:40%;
            transform:scale(0.5) translateY(-50%);
            position: absolute;
            width:100%;
            height:100%;
            z-index: 100;
        }

        font-size: 0px;
    `}
`

export const Divider = styled.hr`
    width:100%;
    margin:0 auto;
    margin-top: 50px;
    height:1px;
    background-color: #a0a0a03d;
`

export const PasswordChangeTitle = styled.p`
    font-size: 20px;
    padding-bottom: 20px;
`

export const InfoText = styled.p`
    color: #7c7c7c;
    font-size:16px;
    width:100%;
    text-align: center;
`