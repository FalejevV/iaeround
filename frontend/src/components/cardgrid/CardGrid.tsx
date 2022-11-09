import React from "react";
import { fetchAddress } from "../../DeveloperData";
import { IRoute } from "../../interfaces";
import InfoCard from "../infocard/InfoCard";
import LoadingAnimation from "../loadinganimation/LoadingAnimation";
import { Container } from "../Styles.styled";
import { CardsLoadButton, CGrid } from "./CardGrid.styled";


function CardGrid(props:{
    cardsAtStart?: number,
    cardsAppend?: number,
    apiCall?: string,
}){
    const [cardsTotalCounter, setCardsTotalCounter] = React.useState<number>(props.cardsAtStart || 6);
    const [cardsFetch, setCardsFetch] = React.useState([]);
    const [allRouteCount, setAllRouteCount] = React.useState(0);
     
    React.useEffect(() => {
        console.log("fetch");
        fetch(fetchAddress + `/api/routes/${cardsTotalCounter}`).then(res => res.json()).then(data => {
            setCardsFetch(data.data);
        })
    }, [cardsTotalCounter]);

    React.useEffect(() => {
        console.log('countFetch')
        fetch(fetchAddress + `/api/routecount`).then(res => res.json()).then(data => {
            setAllRouteCount(data.data[0].count);
        })
    },[]);

    function loadMore(){
        if(allRouteCount > 0){
            if(cardsTotalCounter + (props.cardsAppend || 6) > allRouteCount){
                setCardsTotalCounter(allRouteCount);
            }else{
                setCardsTotalCounter(prevCounter => prevCounter + (props.cardsAppend || 6));
            }
        }
    }
    
    return(
            <Container>
                <CGrid>
                    {cardsFetch.map((fetchData: IRoute) => {
                        return <InfoCard data={fetchData} />;
                    })}
                </CGrid>
                { cardsFetch.length < cardsTotalCounter && <LoadingAnimation />}
                { cardsFetch.length === cardsTotalCounter && cardsFetch.length > 0 && <CardsLoadButton onClick={loadMore}>Load More</CardsLoadButton>}
            </Container>
    )
}

export default CardGrid;