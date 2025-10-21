import CartWidgetm from "./CartWidget.jsx";


function NavBar() {
    return (
        <div>
            <div>
                <ul>
                    <li>
                        <a href="">categorias</a>
                    </li>
                    <li>
                        <a href="">contacto</a>
                    </li>
                    <li>
                        
                    </li>
                </ul>
            </div>
            <div>
                <CartWidgetm />
            </div>
        </div>
    );
}
export default NavBar;