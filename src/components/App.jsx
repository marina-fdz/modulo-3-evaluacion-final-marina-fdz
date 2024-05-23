import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import getDataFromApi from "../services/api";
import '../styles/App.scss';
import Header from './Header';
import Main from './Main';
import CharacterDetail from './CharacterDetail';
import NotFound from './NotFound';

function App() {


  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchStatus, setSearchStatus] = useState('');
  const [searchSpecies, setSearchSpecies] = useState([]);


  useEffect(()=>{
    getDataFromApi().then((charactersArray) => { setCharacters(charactersArray) })
  }, [])


  const changeSpeciesSearch = (value) =>{
    if(searchSpecies.includes(value)){
      const newSpecies = searchSpecies.filter(species => species !== value);
      setSearchSpecies(newSpecies);
    }else{
      setSearchSpecies([...searchSpecies, value]);
    }
  }


  const filterData = characters.filter((character) => {
    return character.name.toLowerCase().includes(searchName.toLowerCase());
  }).filter((character) => searchStatus ? character.status === searchStatus : true).filter((character) => {
    if(searchSpecies.length === 0){
      return true;
    }else{
      return searchSpecies.includes(character.species);
    }
  })

    const filterValidation = filterData.length === 0 ? `No results found by the name ${searchName}` : '';

    const getDetails = (id) => {
      const clickedCharacter = characters.find(character => character.id === id);
      return clickedCharacter
    }



  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Main data={filterData} searchName={searchName} setSearchName={setSearchName} validationText={filterValidation} searchStatus={searchStatus} setSearchStatus={setSearchStatus} changeSpeciesSearch={changeSpeciesSearch} searchSpecies={searchSpecies} />} />
      <Route path="/detail/:id" element={<CharacterDetail getDetails={ getDetails } />} />
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </>
  );
}

export default App;