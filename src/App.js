import React, {useEffect, useState} from 'react'; // import useEffect and useState
import axios from 'axios';
import Character from './components/Character'
import { CharContainer, HeaderTitle } from "./components/Styles";
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [character, setCharacter] = useState([]) // setup state and initialize it to an empty array which will later be populated with data from the api

  useEffect(() => {
    axios.get('https://swapi.dev/api/people') // request data from this end point
    .then(response => { 
      setCharacter(response.data) // invoke setChar and pass in the recieved axios response
    })
    .catch(error => { 
      console.log(`An error has occured`, error)// display an error if no response
    })
  }, []) // use empty dependency array to stop infinite loop

  return (
    <>
      <HeaderTitle>STAR WARS CHARACTERS</HeaderTitle>
      <CharContainer>
        {character.map((char, index) => {
          return (
            <Character key={index} character={char} />
          )
        })}
      </CharContainer>
    </>
  );
}

export default App;
