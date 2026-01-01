// Les soutiens de l'association

import { sponsors } from "../../data/sponsors.mock";
import "./sponsors.css";

export default function Sponsors() {
  return (
    <section className="sponsors-container layout-narrow">
      <div className="text-container">
        <h1 className="h1">Ils nous soutiennent</h1>
        <p className="body1">Nous sommes aussi entrés en partenariat avec l’Institut Médico-Educatif Henri Daudignon de Grenoble qui accueille des enfants et adultes porteurs d’un handicap intellectuel pour réaliser un projet de petites maisons pour le bien mutuel des animaux malmenés dans nos villes et des enfants.</p>
      </div>

      <div className="sponsors-grid">
        {sponsors.map((s) => (
          <div className="sponsor-cell">
            <img key={s.label} src={s.logo} alt={s.label} />
          </div>
        ))}
      </div>
    </section>
  );
}
