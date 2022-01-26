import React from "react";

import styled from "styled-components";

const FlexDiv = styled.div`
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'stretch'};
justify-content: ${props => props.justify || 'stretch'};
margin: ${({ margin }) => margin || '0'};
padding: ${({ padding }) => padding || '0'};
width: ${({ width }) => width || '100%'};
flex-wrap: ${({ wrap }) => wrap || 'inherit'}
`

const FlexContainer = (props) => {
    return <FlexDiv {...props}></FlexDiv>
}

export default FlexContainer;