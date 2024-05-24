import FilterByName from "./FilterByName"
import FilterBySpecies from "./FilterBySpecies";
import FilterByStatus from "./FilterByStatus";
import "../styles/Filters.scss";
import PropTypes from "prop-types";


function Filters({search, setSearch, changeSpeciesSearch}) {

    const handleSubmit = (ev) => {
        ev.preventDefault();
    };

    const handleReset = () => {
        setSearch({name: '', status: '', species: []});
    };

  return (
    <form className="form" onSubmit={handleSubmit} >
      <fieldset className="form__fieldset name">
        <FilterByName search={search} setSearch={setSearch}/>
      </fieldset>
      <fieldset className="form__fieldset">
        <FilterBySpecies changeSpeciesSearch={changeSpeciesSearch} search={search}/>
        <FilterByStatus search={search} setSearch={setSearch} />
        <input className="form__fieldset-reset" type="reset" value="< Reset" onClick={handleReset}/>
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