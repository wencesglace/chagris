import type { Cat } from "../../type/cats";
import './catCard.css';

export default function CatCard({
  nom,
  age,
  sexe,
  maladie,
  photo,
  description,
  statut,
}: Cat) {
  const isAvailable = statut === "disponible";
  const buttonLabel = {
    disponible: "Adopter",
    "en attente": "Bientôt à l'adoption",
    réservé: "Déjà réservé",
  }[statut];
  return (
    <div className="cat-card">
      <img src={photo} alt={`Photo de ${nom}`} />
      <h3>
        {nom}
      </h3>
      <p className="details">
        { age ? `${age > 1 ? `${age} ans` : `${age} an`}` : ""} - {sexe}
        {maladie ? ` - Maladie: ${maladie}` : ""}
      </p>
      <p>{description}</p>
      <button disabled={!isAvailable}>
        {statut === "disponible" ? "Adopter" : buttonLabel}
      </button>
    </div>
  );
}
