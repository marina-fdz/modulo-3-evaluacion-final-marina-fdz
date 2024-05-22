
import CharacterList from "./CharacterList"
import Filters from "./Filters"



function Main({data, searchName, setSearchName, validationText, searchStatus, setSearchStatus, changeSpeciesSearch, searchSpecies}) {
    

  return (
    <main className="main">
        <Filters searchName={searchName} setSearchName={setSearchName} searchStatus={searchStatus} setSearchStatus={setSearchStatus} changeSpeciesSearch={changeSpeciesSearch} searchSpecies={searchSpecies}/>
        <p className="validation">{validationText}</p>
        <CharacterList data={data}/>
    </main>
  )
}

export default Main