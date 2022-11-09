import React from "react";
import { IRoute } from "../../interfaces";
import InfoCard from "../infocard/InfoCard";
import { CustomCardGridContainer, CustomLoadMore, GridTitle, NothingText, RouteGrid } from "./CustomCardGrid.styled";


function CustomCardGrid(props:{
    title:string,
    cards:IRoute[],
    showAtStart: number,
    showMoreAmount: number
    first?:boolean
}){

    const [cardsTotalCounter, setCardsTotalCounter] = React.useState<number>(props.showAtStart || 3);

    function loadMore(){
        if(cardsTotalCounter + (props.showMoreAmount || 3) >= props.cards.length){
            setCardsTotalCounter(props.cards.length);
        }else{
            setCardsTotalCounter(prevCounter => (prevCounter + props.showMoreAmount || 3));
        }
    }

    return(
        <CustomCardGridContainer first={props.first || false}>
            <GridTitle>{props.title}</GridTitle>
            <RouteGrid>
                {props.cards.map((card,index) => {
                    if(index+1 > cardsTotalCounter){
                        return;
                    }else{
                        return <InfoCard data={card} key={index} />
                    }
                })}

                {props.cards.length === 0 && <NothingText>{"I have nothing to show... yet :)"}</NothingText>}
            </RouteGrid>
            {props.cards.length > cardsTotalCounter && props.cards.length > 0 && <CustomLoadMore onClick={loadMore}>Load More</CustomLoadMore>}
        </CustomCardGridContainer>
    )
}

export default CustomCardGrid;