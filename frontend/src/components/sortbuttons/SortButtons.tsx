import { SortButton, SortButtonsContainer } from "./SortButtons.styled";

function SortButtons(){
    return(
        <SortButtonsContainer>
            <SortButton toggle={true}>
                New
            </SortButton>

            <SortButton toggle={false}>
                Most Rated
            </SortButton>
        </SortButtonsContainer>
    )
}

export default SortButtons;