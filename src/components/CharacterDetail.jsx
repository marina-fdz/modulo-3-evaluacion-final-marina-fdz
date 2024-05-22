import { Link, useParams } from "react-router-dom"
import "../styles/CharacterDetail.scss"


function CharacterDetail({ getDetails }) {
   
const { id } = useParams();

const number = parseInt(id);
const detCharacter = getDetails(number);

const htmlDetails = detCharacter ? (<article className="details__wrapper-card">
    <img className="card__img" src={detCharacter.img} alt={detCharacter.name} />
    <div className="card__text">
        <h2>{detCharacter.name}</h2>
        <p>Status: {detCharacter.status}</p>
        <p>Species: {detCharacter.species}</p>
        <p>Origin: {detCharacter.origin}</p>
        <p>Episodes: {detCharacter.episode}</p>
    </div>
    </article>) : <p>Character not found</p>;

  return (
    <section className="details">
        <div className="details__wrapper">
            <Link className="details__wrapper-btn" to="/">Back</Link>
            {htmlDetails}
        </div>
    </section>
  )
}

export default CharacterDetail