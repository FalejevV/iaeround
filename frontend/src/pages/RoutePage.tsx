import React from "react";
import { useParams } from "react-router-dom";
import CustomCardGrid from "../components/customcardgrid/CustomCardGrid";
import GallertSlider from "../components/galleryslider/GallerySlider";
import { CardText, DistanceSVG, InfoObject, TimeSVG } from "../components/infocard/InfoCard.styled";
import Tag from "../components/tag/Tag";
import { fetchAddress } from "../DeveloperData";
import { IRoute, IUser } from "../interfaces";
import { ButtonTipContainer, DownloadButton, DownloadLikeContainer, DownloadSVG, EditRouteButton, GPXTip, InfoIconsContainer, LikeContainer, LikeErrorText, LikeFill, LikeSVG, LikeText, LoadFader, RouteAboutText, RouteInfoContainer, RoutePageContainer, RouteRightSideInfo, RouteTags, RouteTitle, SimmilarRoutesContainer } from "./RoutePage.styled";

function RoutePage(props:{
    headerExtend:any
}){
    const {id} = useParams();

    const [routeInfo, setRouteInfo] = React.useState<IRoute>();
    const [userInfo, setUserInfo] = React.useState<IUser>();
    const [timeDebounce, setTimeDebounce] = React.useState(new Date().getTime());
    const [likeError, setLikeError] = React.useState("");
    const [allRoutesFetch, setAllRoutesFetch] = React.useState<IRoute[]>();
    const [simmilarRoutes, setSimmilarRoutes] = React.useState<IRoute[]>();


    React.useEffect(() => {
        props.headerExtend(false);
    })

    function fetchData(){
        fetch(fetchAddress + '/api/route/'+id,{
            method: "GET",
            credentials: 'include',
        }).then(res => res.json())
          .then(data => setRouteInfo(data?.data));

        fetch(fetchAddress + '/api/usertoken',{
            method: "GET",
            credentials: 'include',
        }).then(res => res.json())
          .then(data => setUserInfo(data));

          fetch(fetchAddress + '/api/route',{
            method: "GET",
            credentials: 'include',
        }).then(res => res.json())
          .then(data => setAllRoutesFetch(data.data));
    }

    React.useEffect(() => {
        let simmilarRoutesArray:IRoute[] = [];
        if(allRoutesFetch && allRoutesFetch.length > 0 && routeInfo){
            allRoutesFetch.forEach((route:IRoute) => {
                if(route.tags.every((tag) => {
                    return(routeInfo.tags.includes(tag));
                })){
                    if(route.id !== routeInfo.id && !simmilarRoutesArray.includes(route)){
                        simmilarRoutesArray.push(route);
                    }
                }
            })
            
            allRoutesFetch.forEach((route:IRoute) => {
                if(route.tags.includes(routeInfo.tags[0])){
                    if(route.id !== routeInfo.id && !simmilarRoutesArray.includes(route)){
                        simmilarRoutesArray.push(route);
                    }
                }
            });


            // check if distance is simmilar to originam route; Remove it? Add time similarity check?
            simmilarRoutesArray = simmilarRoutesArray.filter((route:IRoute) => {
                if(route.distance >= routeInfo.distance - 10 && route.distance <= routeInfo.distance + 10){
                    return true;
                }
                return false;
            });
            
            setSimmilarRoutes(simmilarRoutesArray);
        }

    }, [allRoutesFetch,routeInfo]);

    React.useEffect(() => {
       fetchData();
    }, []);

    function toggleLike(){
        if(userInfo){
            if((new Date().getTime() - timeDebounce) > 3000){
                fetch(fetchAddress + '/api/routelike', 
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ 
                        id: id
                    }),
                }
                ).then(res => res.json())
                .then(data => {
                    if(data.status === "OK"){
                        fetchData();
                    }
                })
                setTimeDebounce(new Date().getTime());
                setLikeError("");
            }else{
                setLikeError("Please wait couple seconds to like");
            }
        }else{
            setLikeError("Please sign in to like");
        }
    }
    console.log(simmilarRoutes);
    return(
        <RoutePageContainer>
            <LoadFader></LoadFader>
            <RouteInfoContainer>
                <GallertSlider routeId={routeInfo?.id || "0"} images={routeInfo?.images || []} />

                <RouteRightSideInfo>
                    {routeInfo?.owner_id === userInfo?.id && <EditRouteButton to={`/edit/${routeInfo?.id}`}>Edit route</EditRouteButton>}
                    <RouteTitle>
                        {routeInfo?.title}
                    </RouteTitle>
                        <InfoIconsContainer>
                            <InfoObject>
                                <DistanceSVG viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"/><path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                                </DistanceSVG>
                                <CardText>{routeInfo?.distance}km</CardText>
                            </InfoObject>
                            <InfoObject>
                                <TimeSVG viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"/>
                                </TimeSVG>
                                <CardText>{routeInfo?.time}min</CardText>
                            </InfoObject>
                        </InfoIconsContainer>
                        <RouteAboutText>
                            {routeInfo?.about}
                        </RouteAboutText>
                        <RouteTags>
                            {routeInfo?.tags.map((tag,index) => <Tag title={tag} key={index} clickable={false} deletable={false} />)}
                        </RouteTags>
                        <DownloadLikeContainer>
                            <ButtonTipContainer>

                                {routeInfo?.gpx.trim() !== "" && 
                                <DownloadButton>
                                    <DownloadSVG viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z"/><path d="M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"/>
                                    </DownloadSVG>
                                    Download GPX
                                </DownloadButton>
                                }

                                <GPXTip viewBox="0 0 192 512">
                                    <path d="M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"/>
                                </GPXTip> 
                            </ButtonTipContainer>
                            <LikeContainer onClick={toggleLike}>
                                <LikeSVG viewBox="0 0 24 24" width="24" height="24">
                                    <LikeFill toggle={routeInfo?.likes.includes(userInfo?.id || "asd") || false} d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z"/>
                                    <path fill="none" d="M0 0H24V24H0z"/><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"/>
                                </LikeSVG>
                                <LikeText>
                                    {routeInfo?.likes.length }
                                </LikeText>
                                {likeError.trim() !== "" && 
                                    <LikeErrorText>
                                        {likeError}
                                    </LikeErrorText>
                                }
                            </LikeContainer>
                        </DownloadLikeContainer>
                </RouteRightSideInfo>
            </RouteInfoContainer>

            <SimmilarRoutesContainer>
                <CustomCardGrid title="Routes you may also like..." cards={simmilarRoutes || []} showAtStart={3} showMoreAmount={6} />
            </SimmilarRoutesContainer>
        </RoutePageContainer>
    )
}

export default RoutePage;