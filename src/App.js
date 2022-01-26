import './App.css';
import styled from 'styled-components';
import FlexContainer from './UI_Components/FlexContainer';
import Header from './Components/Header';
import PokemonCardsWrapper from './Components/PokemonCardsWrapper';


const AppWrapper = styled.div`
margin: 0;
padding: 0 8px;
box-sizing: border-box;
font-family: 'Poppins', sans-serif;
`

const AppContainer = styled.div`
max-width: 1000px;
min-width: 240px;
min-height: calc(100vh - 16px);
margin: 3px auto;
padding: 16px 16px 8px 16px;
border-radius: 12px;
background-color: #F7F7F7;
border: 1px solid black;
`

const App = () => {
  return (
    <AppWrapper>
      <AppContainer>
      <FlexContainer margin='0 auto' justify='flex-start' direction='column' >
        <Header/>
        <PokemonCardsWrapper/>
      </FlexContainer>
      </AppContainer>
    </AppWrapper>
  );
}

export default App;
