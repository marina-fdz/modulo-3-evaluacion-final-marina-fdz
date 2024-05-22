import FilterByName from "./FilterByName"
import FilterBySpecies from "./FilterBySpecies";
import FilterByStatus from "./FilterByStatus";


function Filters({searchName, setSearchName, searchStatus, setSearchStatus, searchSpecies, changeSpeciesSearch}) {

    const handleSubmit = (ev) => {
        ev.preventDefault()
    };

  return (
    <form onSubmit={handleSubmit} >
        <FilterByName searchName={searchName} setSearchName={setSearchName}/>
        <FilterByStatus searchStatus={searchStatus} setSearchStatus={setSearchStatus} />
        <FilterBySpecies changeSpeciesSearch={changeSpeciesSearch} searchSpecies={searchSpecies}/>
    </form>
  )
}

export default Filters