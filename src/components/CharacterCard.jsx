import { Link } from "react-router-dom"


function CharacterCard({data}) {

  return (
    <article className="list__card">
        <Link to={`/detail/${data.id}`} >
            <img src={data.img} alt={data.name} />
            <h2>{data.name}</h2>
            <h3>{data.species}</h3>
        </Link>
    </article>
  )
}

export default CharacterCard