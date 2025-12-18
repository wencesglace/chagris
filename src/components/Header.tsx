import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-content">
        <h1>Chats libres de Grenoble et de l’Isère</h1>
        <nav aria-label="Menu principal">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/adopt">Adoptions</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
