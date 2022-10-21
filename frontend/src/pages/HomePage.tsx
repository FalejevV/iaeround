import CardGrid from "../components/cardgrid/CardGrid";
import Header from "../components/header/Header";


function HomePage(){
    return(
        <>
            <Header profileImage="" extended={true}/>
            <CardGrid />
        </>
    )
}

export default HomePage;