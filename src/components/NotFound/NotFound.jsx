import { Link } from "react-router-dom";
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-code">
        404
      </h1>
      <h2 className="not-found-title">
        Página No Encontrada
      </h2>
      <p className="not-found-message">
        Lo sentimos, la página que buscas no existe.
      </p>
      <Link
        to="/"
        className="not-found-link"
      >
        Volver al Inicio
      </Link>
    </div>
  );
}

export default NotFound;
