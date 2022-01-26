import React, { useState } from "react";
import styled from "styled-components";
import FlexContainer from "../UI_Components/FlexContainer";

const SearchInput = styled.input`
width: ${({ Width }) => Width || '100%'};
height: ${({ height }) => height || '24px'};
margin: ${({ margin }) => margin || '8px 8px 8px 0px'};
padding: ${({ padding }) => padding || '0'};
border-radius: ${({ borderRadius }) => borderRadius || '0'};
border: ${({ border }) => border || 'none'};
`

const SearchButton = styled.button`
padding: 8px;
width: fit-content;
height: fit-content;
margin-top: 8px;
background-color: orange;
outline: none;
border: none;
border-radius: 8px;
border: 1px solid #c3c3c3;
`

const SearchLine = (props) => {

    const [search, setSearch] = useState('');

    return (<FlexContainer>
        <SearchInput {...props}
            placeholder="Search name/number"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())} />

        <SearchButton onClick={() => props.searchPokemonName(search)}>Search</SearchButton>

    </FlexContainer >
    )
};

export default SearchLine;