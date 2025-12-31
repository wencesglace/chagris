import { useState } from "react";
import type { Cat } from "../../types/cats";
import Button from "../button/Button";
import Tag from "../tag/Tag";
import "./catCard.css";
import Icon from "../icon/Icon";

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
  console.log(isAvailable);
  const buttonLabel = {
    disponible: "Adopter",
    "en attente": "Bientôt à l'adoption",
    réservé: "Réservé",
  }[statut];
  const catAge = `${age && age.toString()} ${age && age > 1 ? "ans" : "an"}`;
  const [showInfo, setShowInfo] = useState(false);
  const sexeIcon = sexe == "Femelle" ? "female" : "male";

  return (
    <article className={`cat-card ${showInfo ? "show-info" : ""}`}>
      <div className="cat-image-wrapper">
        <img
          className="cat-image"
          src={`${photo ? photo : "src/data/images/cats/placeholder.png"}`}
          alt={`Photo de ${nom}`}
        />

        <div className="cat-tags">
          {age && (
            <Tag className="tag body1 bg-black" icon="age">
              {catAge}
            </Tag>
          )}
          {sexe && (
            <Tag className="tag body1 bg-black" icon={sexeIcon}>
              {sexe}
            </Tag>
          )}
          {maladie && (
            <Tag className="tag body1 bg-black" icon="health">
              {maladie}
            </Tag>
          )}
        </div>

        {description && (
          <div className="cat-overlay">
            <p className="cat-description body-1">{description}</p>
          </div>
        )}
      </div>

      <div className="cat-content">
        <div className="cat-info">
          <h3 className="cat-name h3">{nom}</h3>
        </div>

        <div className="cat-actions">
          <Button
            disabled={!isAvailable}
            onClick={() => {
              // modal plus tard
            }}
          >
            {buttonLabel}
          </Button>
          <Button
            theme="transparent"
            onClick={() => {
              setShowInfo((prev) => !prev);
            }}
          >
            <Icon name="info" />
          </Button>
        </div>
      </div>
    </article>
  );
}
