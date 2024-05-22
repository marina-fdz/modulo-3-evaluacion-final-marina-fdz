import { Link } from "react-router-dom"
import '../styles/Header.scss';

function Header() {
  return (
    <header className="header">
        <Link to='/'>
            <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="Rick & Morty Show's logo" />
        </Link>
    </header>
    
  )
}

export default Header