import type { Cat } from "../type/cats";

export default function CatCard({
  name,
  age,
  image,
  description,
  status,
}: Cat) {
  const isAvailable = status === "disponible";
  const buttonLabel = {
    disponible: "Adopter",
    "en attente": "Bientôt à l'adoption",
    réservé: "Déjà réservé",
  }[status];
  return (
    <div className="cat-card">
      <img src={image} alt={`Photo de ${name}`} />
      <h3>
        {name} - {age}
      </h3>
      <p>{description}</p>
      <button disabled={!isAvailable}>
        {status === "disponible" ? "Adopter" : buttonLabel}
      </button>
    </div>
  );
}
