import React from "react";
import styled from "styled-components";

const TitleH1 = styled.h1`
font-size: ${({ size }) => size || "36px"};
color: ${({ color }) => color || "#000"};
margin: ${({ margin }) => margin || "0"};
font-weight: ${({ fw }) => fw || 'bold'}
`

const Title = (props) => {
    return <TitleH1 {...props}></TitleH1>
}

export default Title;