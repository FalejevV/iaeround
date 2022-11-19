import React from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { fetchAddress } from "../../DeveloperData";
import { IRoute } from "../../interfaces";
import InfoCard from "../infocard/InfoCard";
import LoadingAnimation from "../loadinganimation/LoadingAnimation";
import { Container } from "../Styles.styled";
import { CardsLoadButton, CGrid, NotFoundText } from "./CardGrid.styled";


function CardGrid(props:{
    cardsAtStart?: number,
    cardsAppend?: number,
    apiCall?: string,
}){
    const [cardsTotalCounter, setCardsTotalCounter] = React.useState<number>(props.cardsAtStart || 6);
    const [filteredCards, setFilteredCards] = React.useState<IRoute[]>();
    const [cardsFetch, setCardsFetch] = React.useState([]);
    const [allRouteCount, setAllRouteCount] = React.useState<number>(-1);

    const sortSelector = useAppSelector((state:RootState) => state.searchFilter.order);
    const searchSelector= useAppSelector((state:RootState) => state.searchFilter.searchInput);
    const tagsSelector = useAppSelector((state:RootState) => state.searchFilter.tags);

    React.useEffect(() => {
        fetch(fetchAddress + `/api/routecount`).then(res => res.json()).then(data => {
            setAllRouteCount(data.data[0].count);
        });

        fetch(fetchAddress + `/api/route`).then(res => res.json()).then(data => {
            setCardsFetch(data.data);
        });
    },[]);

    React.useEffect(() => {
        filterRoutes();
    }, [cardsFetch,sortSelector,searchSelector,tagsSelector]);


    function loadMore(){
        if(allRouteCount > 0){
            if(cardsTotalCounter + (props.cardsAppend || 6) > allRouteCount){
                setCardsTotalCounter(allRouteCount);
            }else{
                setCardsTotalCounter(prevCounter => prevCounter + (props.cardsAppend || 6));
            }
        }
    }
    
    function filterRoutes(){
        let filteredArray:IRoute[] = [];
        if(searchSelector.trim() !== ""){
            filteredArray = cardsFetch.filter((route :IRoute) => route.title.toLowerCase().includes(searchSelector.toLowerCase()));
        }
        if(tagsSelector.length > 0){
            let arrayToFilter:IRoute[] = cardsFetch.map(item => item);
            if(filteredArray.length > 0){
                arrayToFilter = filteredArray;
            }
            filteredArray = arrayToFilter.filter((route:IRoute) => {
                if(tagsSelector.every(tag => {return route.tags.includes(tag)})){
                    return route;
                }
                return undefined;
            });
        }
        
        if(searchSelector !== "" || tagsSelector.length > 0){
            if(filteredArray.length === 0){
                setFilteredCards([]);
                return;
            }
        }

        if(filteredArray.length === 0){
            filteredArray = cardsFetch.map(item => item);
        }
        if(sortSelector === 0){
            setFilteredCards(filteredArray.sort((a:any,b:any) => {
                return a.id - b.id;
            }));
        }

        if(sortSelector === 1){
            setFilteredCards(filteredArray.sort((a:any,b:any) => {
                return b.id - a.id;
            }));
        }

        if(sortSelector === 2){
            setFilteredCards(filteredArray.sort((a:any,b:any) => {
                return b.likes.length - a.likes.length;
            }));
        }

        if(sortSelector === 3){
            setFilteredCards(filteredArray.sort((a:any,b:any) => {
                return a.likes.length - b.likes.length;
            }));
        }

        if(sortSelector === 4){
            setFilteredCards(filteredArray.sort((a:any,b:any) => {
                return b.distance - a.distance;
            }));
        }

        if(sortSelector === 5){
            setFilteredCards(filteredArray.sort((a:any,b:any) => {
                return a.distance - b.distance;
            }));
        }

        if(sortSelector === 6){
            setFilteredCards(filteredArray.sort((a:any,b:any) => {
                return b.time - a.time;
            }));
        }

        if(sortSelector === 7){
            setFilteredCards(filteredArray.sort((a:any,b:any) => {
                return a.time - b.time;
            }));
        }

        
    }

    function getFilteredCards(){
        if(filteredCards && filteredCards.length > 0){
            return filteredCards.map((route:IRoute, index:number) => {
                if(index < cardsTotalCounter){
                    return <InfoCard data={route} key={index} />
                }else{
                    return undefined;
                }
            })
        }
        return [];
    }

    return(
            <Container>
                <CGrid>
                    {getFilteredCards()}
                </CGrid>
                { cardsFetch.length < cardsTotalCounter && Number(allRouteCount) !== cardsFetch.length  && <LoadingAnimation />}
                { filteredCards?.length === 0 && cardsFetch.length > 0 &&  <NotFoundText>{`"${searchSelector}" routes not found`}</NotFoundText>}
                { getFilteredCards().length > cardsTotalCounter && getFilteredCards().length > 0 && <CardsLoadButton onClick={loadMore}>Load More</CardsLoadButton>}
            </Container>
    )
}

export default CardGrid;