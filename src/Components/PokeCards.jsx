import React from "react";
import FlexContainer from "../UI_Components/FlexContainer";
import PCard from "./PCard";

const PokeCards = (props) => {

    const { pokeData } = props;

    return (
        <FlexContainer wrap="wrap" justify="space-around">
            {
                pokeData.map(item => {
                    return <PCard key={item.url} name={item.name} url={item.url} />
                })

            }

        </FlexContainer>
    )
}



export default PokeCards;