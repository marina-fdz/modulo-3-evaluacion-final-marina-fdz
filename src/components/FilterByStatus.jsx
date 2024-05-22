

function FilterByStatus({searchStatus, setSearchStatus}) {

    const handleSelect = (ev) => {
        setSearchStatus(ev.target.value);
    }

  return (
    <>
        <select name="" id="" onChange={handleSelect} value={searchStatus}>
            <option value="">All</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">?</option>
        </select>
    </>
  )
}

export default FilterByStatus