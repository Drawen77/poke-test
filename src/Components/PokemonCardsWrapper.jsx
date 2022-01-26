import React, { useEffect, useState } from "react";
import FlexContainer from "../UI_Components/FlexContainer";
import Loader from "./Loader";
import PokeCards from "./PokeCards";
import SearchLine from "./SearchLine"
import Select from "./Select";

const PokemonCardsWrapper = (props) => {

    const [allPokemons, setAllPokemon] = useState([])
    const [pokeData, setPokeData] = useState([])


    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
            .then(response => response.json())
            .then(data => (setAllPokemon(data.results), setPokeData(data.results)))
            .catch(err => console.error(err))

    }, [])

    const searchPokemonName = (search) => {    ///////Якщо ввести неправильне ім`я або пустий рядок,
        let pokemon = {};                      /////// або знаходиться вище вказаного в діапазоні ${numb}
        allPokemons.map(item => {              /////// то все крашиться, потрібно оновлювати сторінку 
            if (item.name === search) {
                pokemon = item
                return pokemon
            } else if ((allPokemons.indexOf(item) + 1) === Number(search)) {
                pokemon = item
                return pokemon
            }
            return setPokeData([pokemon])
        })
    }

    const getNumberOfPok = (numb) => {                                             /////Якщо ввести число < 1 або 
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numb}&offset=0`)          ///// більше вказаного в діапазоні ${numb}
            .then(response => response.json())                                     ///// теж крашиться
            .then(data => (setAllPokemon(data.results), setPokeData(data.results))) //// для повноцінного пошуку за номером потрібно обирати "All" в селекті
            .catch(err => console.error(err));

    }



    return (
        <FlexContainer direction="column" >
            <FlexContainer>
                <Select getNumberOfPok={getNumberOfPok} />
            </FlexContainer>
            <SearchLine border="1px solid #E0E0E0" borderRadius="8px" padding='16px' searchPokemonName={searchPokemonName} />
            {pokeData.length ?
                (<PokeCards pokeData={pokeData} />)
                : <Loader />
            }

        </FlexContainer>
    )
};

export default PokemonCardsWrapper;