import PropTypes from "prop-types";

function FilterBySpecies({changeSpeciesSearch, search}) {
  
    const handleCheckbox = (ev) => {
        changeSpeciesSearch(ev.target.id);
    }
  
    return (
    <div>
        <div className="form__fieldset-chbox">
            <input type="checkbox" name="Human" id="Human" onChange={handleCheckbox} checked={search.species.includes('Human')}/>
            <label htmlFor="Human">Human</label>
        </div>
        <div className="form__fieldset-chbox">
            <input type="checkbox" name="Alien" id="Alien" onChange={handleCheckbox} checked={search.species.includes('Alien')}/>
            <label htmlFor="Alien">Alien</label>
        </div>
    </div>
    )
}

FilterBySpecies.propTypes = {
    search: PropTypes.object,
    changeSpeciesSearch: PropTypes.func,
  };

export default FilterBySpecies