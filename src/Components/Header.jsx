import React from "react";
import styled from "styled-components";
import FlexContainer from "../UI_Components/FlexContainer";
import Title from "../UI_Components/Title";
import pokeball from '../media/images/Pokeball.svg';


const Logo = styled.img`
width: 40px;
height: 40px;
margin: 20px;
`

const Header = (props) => {
    return (
        <FlexContainer align='center'>
            <Logo src={pokeball} alt='Pokeball' width={40} height={40} />
            <Title color='#212121'>Pokédex</Title>
        </FlexContainer>
    )
}

export default Header;