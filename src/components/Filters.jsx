import FilterByName from "./FilterByName"
import FilterBySpecies from "./FilterBySpecies";
import FilterByStatus from "./FilterByStatus";
import "../styles/Filters.scss";


function Filters({searchName, setSearchName, searchStatus, setSearchStatus, searchSpecies, changeSpeciesSearch}) {

    const handleSubmit = (ev) => {
        ev.preventDefault()
    };

  return (
    <form className="form" onSubmit={handleSubmit} >
      <fieldset className="form__fieldset name">
        <FilterByName searchName={searchName} setSearchName={setSearchName}/>
      </fieldset>
      <fieldset className="form__fieldset">
        <FilterByStatus searchStatus={searchStatus} setSearchStatus={setSearchStatus} />
        <FilterBySpecies changeSpeciesSearch={changeSpeciesSearch} searchSpecies={searchSpecies}/>
      </fieldset>
    </form>
  )
}

export default Filters