import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                TechStore
            </Link>
            <ul className="navbar-menu">
                <li>
                    <Link to="/" className="navbar-link">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/category/laptops" className="navbar-link">
                        Laptops
                    </Link>
                </li>
                <li>
                    <Link to="/category/accesorios" className="navbar-link">
                        Accesorios
                    </Link>
                </li>
                <li>
                    <Link to="/category/monitores" className="navbar-link">
                        Monitores
                    </Link>
                </li>
                <li>
                    <Link to="/category/audio" className="navbar-link">
                        Audio
                    </Link>
                </li>
                <li>
                    <CartWidget />
                </li>
            </ul>
        </nav>
    );
}
export default NavBar;
