import CharacterCard from "./CharacterCard"
import "../styles/CharacterList.scss";


function CharacterList({data}) {
    const charactersHtml = data.map((character) => <CharacterCard data={character} key={character.id} />);
    
  return (
    <section className="list">
        {charactersHtml}
    </section>
  )
}

export default CharacterList