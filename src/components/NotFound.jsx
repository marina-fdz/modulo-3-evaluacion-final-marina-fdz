import { Link } from "react-router-dom";
import portal from "../images/portal.png";
import "../styles/NotFound.scss";

function NotFound() {
  return (
    <section className="notfound">
        <Link to="/" className="notfound__link">Back to Earth</Link>
        <p>The page you are looking for, does not exist.</p>
        <img src={portal} alt="" className="notfound__img"/>
    </section>
    
  )
}

export default NotFound