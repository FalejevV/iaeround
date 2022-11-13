import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { Order } from "../../enums";
import { SortArrowSVG, SortButton, SortButtonsContainer, SortText } from "./SortButtons.styled";
import { setOrder, setSearchInput } from "../../features/SearchFilter";

function SortButtons(){
    
    const dispatch = useAppDispatch();
    const orderSelector = useAppSelector((state:RootState) => state.searchFilter.order);


    function switchOrder(newOrderValue:Order){
        if(orderSelector !== newOrderValue){
            dispatch(setOrder(newOrderValue));
            dispatch(setSearchInput(""));
        }else{
            if(orderSelector === Order.NEW){
                dispatch(setOrder(Order.OLD));
                dispatch(setSearchInput(""));
            }
            if(orderSelector === Order.MOST_RATED){
                dispatch(setOrder(Order.LEAST_RATED));
                dispatch(setSearchInput(""));
            }
            if(orderSelector === Order.LONG_DISTANCE){
                dispatch(setOrder(Order.SHORT_DISTANCE));
                dispatch(setSearchInput(""));
            }
            if(orderSelector === Order.LONG_TIME){
                dispatch(setOrder(Order.SHORT_TIME));
                dispatch(setSearchInput(""));
            }
        }
    }
    return(
        <SortButtonsContainer>
            <SortButton onClick={() => switchOrder(Order.NEW)} toggle={orderSelector === Order.NEW || orderSelector === Order.OLD}>
                Date
                {orderSelector === 1 && <SortText>new</SortText>}
                {orderSelector === 0 && <SortText>old</SortText>}
            </SortButton>

            <SortButton onClick={() => switchOrder(Order.MOST_RATED)} toggle={orderSelector === Order.MOST_RATED || orderSelector === Order.LEAST_RATED}>
                Rating
                <SortArrowSVG toggle={orderSelector === Order.LEAST_RATED}>
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"/>
                </SortArrowSVG>
            </SortButton>

            <SortButton onClick={() => switchOrder(Order.LONG_DISTANCE)} toggle={orderSelector === Order.LONG_DISTANCE || orderSelector === Order.SHORT_DISTANCE}>
                Distance
                <SortArrowSVG toggle={orderSelector === Order.SHORT_DISTANCE}>
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"/>
                </SortArrowSVG>
            </SortButton>

            <SortButton onClick={() => switchOrder(Order.LONG_TIME)} toggle={orderSelector === Order.LONG_TIME || orderSelector === Order.SHORT_TIME}>
                Time
                <SortArrowSVG toggle={orderSelector === Order.SHORT_TIME}>
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"/>
                </SortArrowSVG>
            </SortButton>
        </SortButtonsContainer>
    )
}

export default SortButtons;