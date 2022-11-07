import React from "react";
import { useParams } from "react-router-dom";
import { fetchAddress } from "../DeveloperData";
import { Avatar, ProfileContainer, ProfileInfo, Stats, StatText } from "./ProfilePage.styled";
import LoadingAnimation from "../components/loadinganimation/LoadingAnimation";
import { profileImageURLAvatar } from "../UsefulFunctions";
import ProfileImageSVG from "../img/ProfileImage.svg";
function ProfilePage(props:{
    headerExtend:any
}){

    React.useEffect(() => {
        props.headerExtend(false);
    },[props]);

    const [profileID, setProfileID] = React.useState("");
    const [profileData, setProfileData] = React.useState<{login:string,about:string,avatar:string,email:string,likes:number,posts:number}>();
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
                setProfileData(data);
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
                            {`Likes: ${profileData.likes}`} 
                        </StatText>

                        <StatText>
                            {`Posts: ${profileData.posts}`} 
                        </StatText>
                    </Stats>
                
                </ProfileInfo>
                    
            </>
            }
        </ProfileContainer>
    )
}

export default ProfilePage;