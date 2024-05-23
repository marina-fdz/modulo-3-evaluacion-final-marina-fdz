import PropTypes from "prop-types";

function FilterBySpecies({changeSpeciesSearch, search}) {
  
    const handleCheckbox = (ev) => {
        changeSpeciesSearch(ev.target.id);
    }
  
    return (
    <>
        <div className="form__fieldset-chbox">
            <label htmlFor="Human">Human</label>
            <input type="checkbox" name="Human" id="Human" onChange={handleCheckbox} checked={search.species.includes('Human')}/>
        </div>
        <div className="form__fieldset-chbox">
            <label htmlFor="Alien">Alien</label>
            <input type="checkbox" name="Alien" id="Alien" onChange={handleCheckbox} checked={search.species.includes('Alien')}/>
        </div>
    </>
    )
}

FilterBySpecies.propTypes = {
    search: PropTypes.object,
    changeSpeciesSearch: PropTypes.func,
  };

export default FilterBySpecies