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
    const [cardsFetch, setCardsFetch] = React.useState([]);
    const [allRouteCount, setAllRouteCount] = React.useState<number>(-1);
    const sortSelector = useAppSelector((state:RootState) => state.searchFilter.order);
    const searchSelector= useAppSelector((state:RootState) => state.searchFilter.searchInput);

    React.useEffect(() => {
        if(searchSelector.trim() !== ""){
            fetch(fetchAddress + `/api/routes/${cardsTotalCounter}/0/${searchSelector}`).then(res => res.json()).then(data => {
                setCardsFetch(data.data);
            });
        }else{
            fetch(fetchAddress + `/api/routes/${cardsTotalCounter}/${sortSelector}`).then(res => res.json()).then(data => {
                setCardsFetch(data.data);
            });
        }
        
    }, [cardsTotalCounter,sortSelector,searchSelector]);

    React.useEffect(() => {
        if(searchSelector.trim() !== ""){
            fetch(fetchAddress + `/api/routecountsearch/${searchSelector}`).then(res => res.json()).then(data => {
                setAllRouteCount(data.data[0].count);
            })
        }else{
            fetch(fetchAddress + `/api/routecount`).then(res => res.json()).then(data => {
                setAllRouteCount(data.data[0].count);
            })
        }
    },[searchSelector]);

    function loadMore(){
        if(allRouteCount > 0){
            if(cardsTotalCounter + (props.cardsAppend || 6) > allRouteCount){
                setCardsTotalCounter(allRouteCount);
            }else{
                setCardsTotalCounter(prevCounter => prevCounter + (props.cardsAppend || 6));
            }
        }
    }
    console.log(cardsFetch.length, allRouteCount);
    return(
            <Container>
                <CGrid>
                    {cardsFetch.map((fetchData: IRoute, index) => {
                        return <InfoCard key={index} data={fetchData} />;
                    })}
                </CGrid>
                { cardsFetch.length < cardsTotalCounter && Number(allRouteCount) !== cardsFetch.length  && <LoadingAnimation />}
                { Number(allRouteCount) === 0 && <NotFoundText>{`'${searchSelector}' routes not found`}</NotFoundText>}
                { cardsFetch.length === cardsTotalCounter && cardsFetch.length > 0 && <CardsLoadButton onClick={loadMore}>Load More</CardsLoadButton>}
            </Container>
    )
}

export default CardGrid;