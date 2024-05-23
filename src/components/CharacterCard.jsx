import { Link } from "react-router-dom";
import "../styles/CharacterCard.scss";
import PropTypes from "prop-types";

function CharacterCard({data}) {

  return (
    <article className="article">
        <Link className="list__card" to={`/detail/${data.id}`} >
            <img className="list__card-img" src={data.img} alt={data.name} />
            <div className="list__card-wrapper">
              <div className="text">
                <h3>{data.name}</h3>
                <p>{data.species}</p>
              </div>
              <span className="material-symbols-outlined">{data.status === 'Dead' ? 'skull' : ''}</span>
            </div>
        </Link>
    </article>
  )
}

CharacterCard.propTypes = {
  data: PropTypes.object,
};

export default CharacterCard