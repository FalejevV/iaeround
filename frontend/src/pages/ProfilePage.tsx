import React from "react";
import { useParams } from "react-router-dom";
import { fetchAddress } from "../DeveloperData";
import { AboutText, Avatar, FlexPusher, ProfileContainer, ProfileInfo, Stats, StatText } from "./ProfilePage.styled";
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
    const [profileData, setProfileData] = React.useState<{login:string,about:string,avatar:string,email:string}>();
    const [likes, setLikes] = React.useState([]);
    const [routes,setRoutes] = React.useState([]);

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
                console.log(data.likes);
                setProfileData(data.user_data);
                setLikes(data.likes);
                setRoutes(data.routes);
            })
        }
    }, [profileID]);

    return(
        <ProfileContainer>
            {!profileData ? <LoadingAnimation /> :
            <>
                <ProfileInfo>
                    <Avatar src={avatar} />
                    <Stats>
                        <StatText>
                            {profileData.login} 
                        </StatText>

                        <StatText>
                            {`Likes: ${likes.length || 0}`} 
                        </StatText>

                        <StatText>
                            {`Posts: ${routes.length || 0}`} 
                        </StatText>
                    </Stats>
                    <FlexPusher />
                    <AboutText>{profileData.about}</AboutText>
                </ProfileInfo>

            <CustomCardGrid first title={`${profileData.login} routes`} cards={routes} showAtStart={3} showMoreAmount={3} />
            <CustomCardGrid title={`${profileData.login} likes`} cards={likes} showAtStart={3} showMoreAmount={3} />
            </>
            }
        </ProfileContainer>
    )
}

export default ProfilePage;