// Les soutiens de l'association

import { sponsors } from "../../data/sponsors.mock";
import "./sponsors.css";

export default function Sponsors() {
  return (
    <section className="sponsors-container layout-half">
      <div className="text-container">
        <h1 className="h1">Ils nous soutiennent</h1>
        <p className="body1">Merci à nos partenaires qui nous apportent un soutiens financier, logistique... tout au long de l'année.</p>
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
