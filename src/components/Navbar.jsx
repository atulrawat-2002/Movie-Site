import '../css/Navbar.css'   
import { Link } from "react-router-dom";



function Navbar(params) {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/"> Mobile App </Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorite</Link>
        </div>
        </nav>
   
}

export default Navbar;