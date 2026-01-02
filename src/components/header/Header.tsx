import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="layout-full bg-blue-contrasted wavy-bottom wavy-blue">
      <div className="header-content">
        <nav aria-label="Menu principal">
          <ul>
            <li>
              <Link className="body1" to="/">
                Accueil
              </Link>
            </li>
            <li>
              <Link className="body1" to="/adopt">
                Adoptions
              </Link>
            </li>
            <li>
              <Link className="body1" to="/faq">
                Questions
              </Link>
            </li>
            {/* <li>
              <Link className="body1" to="/contact">
                Contact
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
