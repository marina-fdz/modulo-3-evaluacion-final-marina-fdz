import CharacterList from "./CharacterList";
import Filters from "./Filters";
import "../styles/Main.scss";
import PropTypes from "prop-types";



function Main({data, search, setSearch, validationText, changeSpeciesSearch}) {
    

  return (
    <main className="main">
        <Filters search={search} setSearch={setSearch} changeSpeciesSearch={changeSpeciesSearch}/>
        <p className="validation">{validationText}</p>
        <CharacterList data={data}/>
    </main>
  )
}

Main.propTypes = {
  data: PropTypes.object,
  search: PropTypes.object,
  setSearch: PropTypes.func,
  changeSpeciesSearch: PropTypes.func,
  validationText: PropTypes.string,
};

export default Main