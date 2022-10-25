import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { Order } from "../../enums";
import { SortButton, SortButtonsContainer } from "./SortButtons.styled";
import { setOrder } from "../../features/SearchFilter";

function SortButtons(){
    
    const dispatch = useAppDispatch();
    const orderSelector = useAppSelector((state:RootState) => state.searchFilter.order);


    function switchOrder(newOrderValue:Order){
        if(orderSelector !== newOrderValue){
            dispatch(setOrder(newOrderValue));
        }
    }
    return(
        <SortButtonsContainer>
            <SortButton onClick={() => switchOrder(Order.NEW)} toggle={orderSelector === Order.NEW}>
                New
            </SortButton>

            <SortButton onClick={() => switchOrder(Order.MOST_RATED)} toggle={orderSelector === Order.MOST_RATED}>
                Most Rated
            </SortButton>
        </SortButtonsContainer>
    )
}

export default SortButtons;