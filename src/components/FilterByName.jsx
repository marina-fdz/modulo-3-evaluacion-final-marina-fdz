import PropTypes from "prop-types";

function FilterByName({search, setSearch}) {

    const handleChange = (ev) => {
        setSearch({...search, name: ev.target.value});
    }

  return (
    <>
        <label htmlFor="search-name" className="input">Name</label>
        <input type="text" name="search-name" id="search-name" onChange={handleChange} value={search.name} placeholder="Morty"/>
    </>
  )
}

FilterByName.propTypes = {
    search: PropTypes.object,
    setSearch: PropTypes.func,
  };

export default FilterByName