

function FilterByName({searchName, setSearchName}) {

    const handleChange = (ev) => {
        setSearchName(ev.target.value);
    }

  return (
    <>
        <label htmlFor="search-name" className="input">Name</label>
        <input type="text" name="search-name" id="search-name" onChange={handleChange} value={searchName} placeholder="Morty"/>
    </>
  )
}

export default FilterByName