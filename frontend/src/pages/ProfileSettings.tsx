import React, { ChangeEvent, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import FileField from "../components/inputfield/FileField";
import { profileImageURLAvatar, compressImage } from "../UsefulFunctions";
import { AvatarContainer, Divider, EmailChangeContainer, InfoText, PasswordChangeContainer, PasswordChangeTitle, PreviewAvatar, ProfileForm, ProfileSettingsContainer, SaveButton } from "./ProfileSettings.styled";
import profileImage from "../img/ProfileImage.svg";
import TextField from "../components/inputfield/TextField";
import TextAreaField from "../components/inputfield/TextAreaField";
import { AlertText } from "../components/inputfield/InputField.styled";
import { fetchAddress } from "../DeveloperData";
import { dropUser, updateUserData } from "../features/UserData";


function ProfileSettings(props:{
    headerExtend:any
}){

    React.useEffect(() => {
        props.headerExtend(false);
    },[props]);

    const profileData = useAppSelector((state:RootState) => state.user);
    const [avatar, setAvatar] = React.useState<File | string>(profileData.id || "");
    const [profileEditAlert, setProfileEditAlert] = React.useState<string>("");
    const [toggleLoading, setToggleLoading] = React.useState<string>("");
    const [passwordChangeAlert, setPasswordChangeAlert] = React.useState("");
    const [emailChangeAlert, setEmailChangeAlert] = React.useState("");

    const dispatch = useAppDispatch();

    function fileChange(e:ChangeEvent<HTMLInputElement>){
        const target:HTMLInputElement = e.target;
        if(target.files){
            setAvatar(target.files[0]);
        }
    }

    async function profileChange(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        const target:any = e.target;
        const name = target.name.value;
        const about = target.about.value;
        let avatar = await compressImage(target.avatar.files[0]);
        console.log(avatar);
        let formdata = new FormData();
        formdata.append('name', name);
        formdata.append('about', about);
        formdata.append('avatar', avatar);
        if(name.trim() === "" || about.trim() === ""){
            setProfileEditAlert("Some fields are empty");
            return;
        }else{
            if(typeof avatar === "object" && avatar.size > 1000000){
                setProfileEditAlert("File size is too big");
                return;
            }
            if(toggleLoading !== ""){
                return;
            }
            setToggleLoading('profile');
            fetch(fetchAddress + '/api/user/profilechange', 
            {
                method: 'POST',
                credentials: 'include',
                headers: { 
                    'Accept': 'application/json'
                },
                body: formdata
            }
            ).then(res => res.json())
            .then(data => {
                if(data.status === "OK"){
                    dispatch(updateUserData("ass"));
                    setTimeout(() => {
                        window.location.href = "/settings";
                    },1500);
                }else{
                    setToggleLoading('');
                    setProfileEditAlert(data.status);
                }
            });
        }
        setProfileEditAlert("");
    }

    function passwordChange(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(toggleLoading !== ""){
            return;
        }
        setToggleLoading("password");
        const target:any = e.target;
        const password:string = target.new_password.value;
        const repeat_password:string = target.repeat_password.value;
        if(password.trim() === "" && repeat_password.trim() === ""){
            setPasswordChangeAlert("Fields are empty");
            setToggleLoading("");
            return;
        }
        if(password === repeat_password){
            setPasswordChangeAlert("");
            fetch(fetchAddress + '/api/auth/changepassword', 
            {
                method: 'POST',
                credentials: 'include',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    password: password,
                    repeat_password: repeat_password,
                }),
            }
            ).then(res => res.json())
            .then(data => {
                if(data.status === "OK"){
                    fetch(fetchAddress + '/api/auth/logout',{
                        method: "GET",
                        credentials: 'include',
                    });
                    setTimeout(() => {
                        dispatch(dropUser('a'));
                        window.location.href = "/";
                    },1500);
                }else{
                    setToggleLoading("");
                    setPasswordChangeAlert(data.status);
                }
            });
        }else{
            setToggleLoading("");
            setPasswordChangeAlert("Passwords do not match");
        }
    }

    function emailChange(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(toggleLoading !== ""){
            return;
        }
        setToggleLoading("email");
        const target:any = e.target;
        const email:string = target.email.value;
        if(email && email.trim() !== ""){
            setEmailChangeAlert("");
            fetch(fetchAddress + '/api/auth/changeemail', 
            {
                method: 'POST',
                credentials: 'include',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    email: email,
                })
            }).then(res => res.json())
            .then(data => {
                if(data.status === "OK"){
                    fetch(fetchAddress + '/api/auth/logout',{
                        method: "GET",
                        credentials: 'include',
                    });
                    setTimeout(() => {
                        dispatch(dropUser('a'));
                        window.location.href = "/";
                    },1500);
                }else{
                    setToggleLoading("");
                    setEmailChangeAlert(data.status);
                }
            })
        }else{
            setEmailChangeAlert("Field seems empty");
            setToggleLoading("");
        }
    }
    return(
        <>
            {profileData && profileData.name !== "" &&      
            <>
                <ProfileForm onSubmit={(e) => profileChange(e)}>
                    
                        <ProfileSettingsContainer>
                            <AvatarContainer>
                                <PreviewAvatar src={typeof avatar === "object" ? URL.createObjectURL(avatar) :profileData.id !== "" ? profileImageURLAvatar(profileData.avatar, profileData.id) : profileImage} />
                                <FileField fileSize={100000} onChange={fileChange} title="Avatar" imageFormat/>
                            </AvatarContainer>
                            <TextField value={profileData.name} title="Name" />
                            <TextAreaField value={profileData.about}  title="About" />
                            
                            {profileEditAlert.trim() !== "" && <AlertText>{profileEditAlert}</AlertText>}
                            <SaveButton toggle={toggleLoading === 'profile'}>Save profile</SaveButton>

                        </ProfileSettingsContainer>
                

                </ProfileForm>

                <Divider></Divider>

                <ProfileForm onSubmit={(e) => emailChange(e)}>
                    <EmailChangeContainer>
                        <PasswordChangeTitle>Change Email</PasswordChangeTitle>
                        <TextField value={profileData.email} type="email" title="Email" />  
                        {emailChangeAlert.trim() !== "" && <AlertText>{emailChangeAlert}</AlertText>}
                        <SaveButton toggle={toggleLoading === 'email'}>Change Email</SaveButton>
                        <InfoText>You will be signed out on change</InfoText>
                    </EmailChangeContainer>
                </ProfileForm>


                <Divider></Divider>

                <ProfileForm onSubmit={(e) => passwordChange(e)}>
                    <PasswordChangeContainer>
                        <PasswordChangeTitle>Change Password</PasswordChangeTitle>
                        <TextField type="password" title="New_Password" />
                        <TextField type="password" title="Repeat_Password" />   
                        {passwordChangeAlert.trim() !== "" && <AlertText>{passwordChangeAlert}</AlertText>}
                        <SaveButton toggle={toggleLoading === 'password'}>Change password</SaveButton>
                        <InfoText>You will be signed out on change</InfoText>
                    </PasswordChangeContainer>
                </ProfileForm>

            </>}
        </>
    )
}

export default ProfileSettings;