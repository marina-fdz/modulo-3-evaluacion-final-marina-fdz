import FilterByName from "./FilterByName"
import FilterBySpecies from "./FilterBySpecies";
import FilterByStatus from "./FilterByStatus";
import "../styles/Filters.scss";
import PropTypes from "prop-types";


function Filters({search, setSearch, changeSpeciesSearch}) {

    const handleSubmit = (ev) => {
        ev.preventDefault()
    };

  return (
    <form className="form" onSubmit={handleSubmit} >
      <fieldset className="form__fieldset name">
        <FilterByName search={search} setSearch={setSearch}/>
      </fieldset>
      <fieldset className="form__fieldset">
        <FilterByStatus search={search} setSearch={setSearch} />
        <FilterBySpecies changeSpeciesSearch={changeSpeciesSearch} search={search}/>
      </fieldset>
    </form>
  )
}

Filters.propTypes = {
  search: PropTypes.object,
  setSearch: PropTypes.func,
  changeSpeciesSearch: PropTypes.func,
  validationText: PropTypes.string,
};

export default Filters