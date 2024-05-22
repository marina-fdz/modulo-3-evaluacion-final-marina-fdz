import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import getDataFromApi from "../services/api";
import '../styles/App.scss';
import Header from './Header';
import Main from './Main';
import CharacterDetail from './CharacterDetail';

function App() {
  const [characters, setCharacters] = useState([]);

    useEffect(()=>{
        getDataFromApi().then((charactersArray) => { setCharacters(charactersArray) })
    }, [])

    const getDetails = (id) => {
      const clickedCharacter = characters.find(character => character.id === id);
      return clickedCharacter
    }



  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Main data={characters} />} />
      <Route path="/detail/:id" element={<CharacterDetail getDetails={ getDetails } />} />
    </Routes>
    </>
  );
}

export default App;