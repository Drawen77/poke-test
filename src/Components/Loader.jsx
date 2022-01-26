import React from "react";
import styled, { keyframes } from "styled-components";
import pokeball from "../media/images/Pokeball.svg";

const rotatePokeball = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg)
}
`

const PreLoader = styled.img`
width: 200px;
height: 200px;
margin: 100px auto;
animation: ${rotatePokeball} 1s infinite linear;
`

const Loader = () => {
    return <PreLoader src={pokeball} alt="Preloader"></PreLoader>
}


export default Loader;

