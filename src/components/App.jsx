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
  const [search, setSearch] = useState({
    name: '',
    status: '',
    species: []
  })
  
  useEffect(()=>{
    getDataFromApi().then((charactersArray) => { setCharacters(charactersArray) })
  }, [])


  const changeSpeciesSearch = (value) =>{
    if(search.species.includes(value)){
      const newSpecies = search.species.filter(species => species !== value);
      setSearch({...search, species: newSpecies});
    }else{
      setSearch({...search, species: [...search.species, value]});
    }
  }


  const filterData = characters.filter((character) => {
    return character.name.toLowerCase().includes(search.name.toLowerCase());
  }).filter((character) => search.status ? character.status === search.status : true).filter((character) => {
    if(search.species.length === 0){
      return true;
    }else{
      return search.species.includes(character.species);
    }
  })

    const filterValidation = filterData.length === 0 ? <> No results found by the name <span className='error-text'>{search.name}</span> </> : '';

    const getDetails = (id) => {
      const clickedCharacter = characters.find(character => character.id === id);
      return clickedCharacter
    }



  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Main data={filterData} search={search} setSearch={setSearch} validationText={filterValidation}  changeSpeciesSearch={changeSpeciesSearch} />} />
      <Route path="/detail/:id" element={<CharacterDetail getDetails={ getDetails } />} />
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </>
  );
}

export default App;