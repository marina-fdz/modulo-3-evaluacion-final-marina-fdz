import PropTypes from "prop-types";

function FilterByStatus({search, setSearch}) {

    const handleSelect = (ev) => {
        setSearch({...search, status: ev.target.value});
    }

  return (
    <>
        <select name="" id="" onChange={handleSelect} value={search.status}>
            <option value="">All</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">?</option>
        </select>
    </>
  )
}

FilterByStatus.propTypes = {
  search: PropTypes.object,
  setSearch: PropTypes.func,
};

export default FilterByStatus