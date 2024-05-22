

function FilterBySpecies({changeSpeciesSearch, searchSpecies}) {
  
    const handleCheckbox = (ev) => {
        changeSpeciesSearch(ev.target.id);
    }
  
    return (
    <>
        <label htmlFor="Human">Human</label>
        <input type="checkbox" name="Human" id="Human" onChange={handleCheckbox} checked={searchSpecies.includes('Human')}/>
        <label htmlFor="Alien">Alien</label>
        <input type="checkbox" name="Alien" id="Alien" onChange={handleCheckbox} checked={searchSpecies.includes('Alien')}/>
                    
    </>
    )
}

export default FilterBySpecies