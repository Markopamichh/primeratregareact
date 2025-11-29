import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar-logo">
                TechStore
            </NavLink>
            <ul className="navbar-menu">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/category/laptops" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                        Laptops
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/category/accesorios" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                        Accesorios
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/category/monitores" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                        Monitores
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/category/audio" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                        Audio
                    </NavLink>
                </li>
                <li>
                    <CartWidget />
                </li>
            </ul>
        </nav>
    );
}
export default NavBar;
