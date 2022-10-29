import React from "react";
import CardGrid from "../components/cardgrid/CardGrid";


function HomePage(props:{
    headerExtend:any
}){
    React.useEffect(() => {
        props.headerExtend(true);
    })
    return(
        <>
            <CardGrid extended={true} />
        </>
    )
}

export default HomePage;