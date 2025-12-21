import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="header-content">
        <nav aria-label="Menu principal">
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/adopt">Adoptions</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
