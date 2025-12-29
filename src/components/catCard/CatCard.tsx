import type { Cat } from "../../types/cats";
import "./catCard.css";

export default function CatCard({
  nom,
  age,
  sexe,
  statut,
  maladie,
  description,
  photo,
}: Cat) {
  const isAvailable = statut === "disponible";
  const buttonLabel = {
    disponible: "Adopter",
    "en attente": "Bientôt à l'adoption",
    réservé: "Déjà réservé",
  }[statut];

  return (
    <div className="cat-card">
      {photo && <img src={photo} alt={`Photo de ${nom}`} />}
      <h3>{nom}</h3>
      <p className="details">
        {age ? `${age} ${age > 1 ? "ans" : "an"}` : ""} {sexe ? `- ${sexe}` : ""}
        {maladie ? ` - Maladie: ${maladie}` : ""}
      </p>
      {description && <p>{description}</p>}
      <button disabled={!isAvailable}>{isAvailable ? "Adopter" : buttonLabel}</button>
    </div>
  );
}

