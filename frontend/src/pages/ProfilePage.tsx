import React from "react";
import { useParams } from "react-router-dom";
import { fetchAddress } from "../DeveloperData";
import { AboutText, Avatar, AvatarStatsContainer, EditProfileLink, EditProfileSVG, EditProfileText, FlexPusher, ProfileContainer, ProfileInfo, SpacerLine, Stats, StatText } from "./ProfilePage.styled";
import LoadingAnimation from "../components/loadinganimation/LoadingAnimation";
import { profileImageURLAvatar } from "../UsefulFunctions";
import ProfileImageSVG from "../img/ProfileImage.svg";
import CustomCardGrid from "../components/customcardgrid/CustomCardGrid";
function ProfilePage(props:{
    headerExtend:any
}){

    React.useEffect(() => {
        props.headerExtend(false);
    },[props]);

    const [profileID, setProfileID] = React.useState("");
    const [profileData, setProfileData] = React.useState<{id:string,login:string,about:string,avatar:string,email:string,name:string}>();
    const [likes, setLikes] = React.useState([]);
    const [routes,setRoutes] = React.useState([]);
    const [isProfileOwner, setIsProfileOwner] = React.useState<boolean>(false);

    const [avatar,setAvatar] = React.useState(ProfileImageSVG);
    const {id} = useParams();
    if(id && Number(id)){
        if(profileID !== id){
            setProfileID(id);
        }
    }else{
        document.location.href = "/";
    }

    React.useEffect(() => {
        if(profileID !== ""){
            fetch(fetchAddress + '/api/user/'+profileID,{
                method: "GET",
                credentials: 'include',
            }).then(res => res.json())
            .then(data => {
                setProfileData(data.user_data);
                setLikes(data.likes);
                setRoutes(data.routes);
                setIsProfileOwner(data.myLogin === data.user_data.login);
            })
        }
    }, [profileID]);

    return(
        <ProfileContainer>
            {!profileData ? <LoadingAnimation /> :
            <>
                <ProfileInfo>

                    <AvatarStatsContainer>

                        <Avatar src={profileData.id !== "" ? profileImageURLAvatar(profileData.avatar,profileID) : avatar} />
                        <Stats>

                            {isProfileOwner && 
                            <EditProfileLink to="/settings" >
                                <EditProfileSVG viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"/><path d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                </EditProfileSVG>
                                <EditProfileText>
                                    Edit profile
                                </EditProfileText>
                            </EditProfileLink>}


                            <StatText>
                                {profileData.name} 
                            </StatText>

                            <StatText>
                                {`Likes: ${likes.length || 0}`} 
                            </StatText>

                            <StatText>
                                {`Posts: ${routes.length || 0}`} 
                            </StatText>
                        </Stats>
                    </AvatarStatsContainer>
                    <AboutText>{profileData.about}</AboutText>
                </ProfileInfo>
                <SpacerLine />
                <CustomCardGrid first title={`${profileData.name} routes`} cards={routes} showAtStart={3} showMoreAmount={3} />
                <CustomCardGrid title={`${profileData.name} likes`} cards={likes} showAtStart={3} showMoreAmount={3} />
            </>
            }
        </ProfileContainer>
    )
}

export default ProfilePage;