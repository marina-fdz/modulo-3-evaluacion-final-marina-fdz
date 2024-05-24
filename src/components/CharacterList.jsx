import CharacterCard from "./CharacterCard"
import "../styles/CharacterList.scss";
import PropTypes from "prop-types";


function CharacterList({data}) {
    const charactersHtml = data.map((character) => <CharacterCard data={character} key={character.id} />);
    
  return (
    <section className="list">
        {charactersHtml}
    </section>
  )
}

CharacterList.propTypes = {
  data: PropTypes.array,
};

export default CharacterList