import React from "react";
import { CloseSVG, Container, SearchInput, SearchSVG } from "./SearchBar.styled";

function SearchBar(){
    const [text, setText] = React.useState("");
    return(
        <Container>
            <SearchSVG viewBox="0 0 512 512" width="24" height="24">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
            </SearchSVG>
            <SearchInput value={text} onChange={(e) => setText(e.target.value)}/> 
            {text !== "" && 
                <CloseSVG onClick={() => setText("")} viewBox="0 0 24 24"  width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
                </CloseSVG>
            }
        </Container>
    )
}

export default SearchBar;