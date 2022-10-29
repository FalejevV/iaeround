import InfoCard from "../infocard/InfoCard";
import { Container } from "../Styles.styled";
import { CGrid } from "./CardGrid.styled";


function CardGrid(props:{
    extended: boolean,
}){
    return(
        <Container>
            <CGrid extended={props.extended}>
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />
                <InfoCard />
            </CGrid>
        </Container>
    )
}

export default CardGrid;