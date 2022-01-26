import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../Theme";
import FlexContainer from "../UI_Components/FlexContainer";

import sword from '../media/images/sword.svg';
import shield from '../media/images/shield.svg';
import run from '../media/images/run.svg';
import health from '../media/images/health.svg';

const PokemonCardPreview = styled.div`
width: 300px;
height: 340px;
border-radius: 8px;
border: 1px solid orange;
margin: 8px;
overflow: hidden;
position: relative;
padding-bottom: 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column
`
const NameSpan = styled.div`
width: 100%;
background-color: orange;
color: #fff;
font-weight: 700;
position: absolute;
bottom: 0;
text-align: center;
`

const PokNumber = styled.span`
color: orange;
position: absolute;
top: 10px;
right: 10px;
`

const PokImg = styled.img`
width: 200px;
height: 200px;
margin: 0 auto;
`

const TypesWrapper = styled.div`
width: 200px;
height: 30px;
// position: absolute;
// top: 45px;
// left: 20px;
display: flex;
justify-content: space-evenly;
align-item: center;
`

const TypesBox = styled.div`
width: 65px;
height: 30px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({ bgc }) => bgc || "transparent"}
`

const StatDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 60px;
text-align: center;
`

const Icons = styled.img`
width: 30px;
height: 35px;
`

const PCard = (props) => {

    const { url, name } = props;

    const [pokemon, setPokemon] = useState({
        name: '',
        sprites: '',
        stats: {},
        types: [],
        id: 0
    });

    const getUpperName = (name) => {
        return name[0].toUpperCase() + name.slice(1)
    }

    const getPokemonNumber = (pokemon) => {  ////// Після 898 номеру починаються мега-форми покемонів
        if (pokemon.id < 10) {               ///// У них рахунок стартує з 10001
            console.log("PCard :", pokemon)  //// Треба б було підфіксити, але не вистачає часу
            return `#00${pokemon.id}`
        } else if (pokemon.id >= 10 && pokemon.id < 99) {
            return `#0${pokemon.id}`
        } else {
            return `#${pokemon.id}`
        }
    }

    useEffect((props) => {
        fetch(`${url}`)
            .then(response => response.json())
            .then(data => setPokemon({
                name: data.name,
                sprites: data.sprites,
                stats: data.stats,
                types: data.types,
                id: data.id
            }))
            .catch(err => console.error(err))
    }, [])



    return (
        <PokemonCardPreview {...props} onClick={() => console.log("This pokemon obj :", pokemon)}>
            <PokNumber>{getPokemonNumber(pokemon)}</PokNumber>
            <TypesWrapper> {pokemon.types.map(el => {
                return <TypesBox bgc={theme.typeColors[el.type.name]}>{el.type.name}</TypesBox>
            })} </TypesWrapper>
            <PokImg src={pokemon.sprites.front_default} alt="Pokemon" width={"200"} height={"240"} />
            {/* <FlexContainer justify={'space-between'} margin={'8px'}>
                <StatDiv><Icons src={health} alt="HP" /><br /> {pokemon.stats[0].base_stat}</StatDiv>
                <StatDiv><Icons src={sword} alt="Attack" /><br /> {pokemon.stats[1].base_stat}</StatDiv>
                <StatDiv><Icons src={shield} alt="Defense" /><br /> {pokemon.stats[2].base_stat}</StatDiv>
                <StatDiv><Icons src={run} alt="Speed" /><br /> {pokemon.stats[5].base_stat}</StatDiv>
            </FlexContainer> */}
            <NameSpan>{getUpperName(name)}</NameSpan>
        </PokemonCardPreview >
    )
};

export default PCard;