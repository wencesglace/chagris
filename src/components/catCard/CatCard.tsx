import { useState } from "react";
import type { Cat } from "../../types/cats";
import Button from "../button/Button";
import Tag from "../tag/Tag";
import "./catCard.css";

import CatModal from "../catModal/CatModal";

interface CatCardProps {
  cat: Cat;
}

export default function CatCard({ cat }: CatCardProps) {
  const isAvailable = cat.statut === "disponible";
  console.log(isAvailable);
  const catAge = `${cat.age && cat.age.toString()} ${
    cat.age && cat.age > 1 ? "ans" : "an"
  }`;
  const [showInfo] = useState(false);
  const sexeIcon = cat.sexe == "Femelle" ? "female" : "male";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className={`cat-card ${showInfo ? "show-info" : ""}`}>
      <div className="cat-image-wrapper" onClick={() => setIsOpen(true)}>
        <img
          className="cat-image"
          src={`${
            cat.photo ? cat.photo : "src/data/images/cats/placeholder.png"
          }`}
          alt={`Photo de ${cat.nom}`}
        />

        {cat.description && (
          <div className="cat-overlay">
            <p className="cat-description body-1">{cat.description}</p>
          </div>
        )}
      </div>

      <div className="cat-content">
        <div className="cat-info">
          <div className="cat-modal-tags">
            {cat.age && (
              <Tag className="body2 bg-blue" icon="age">
                {catAge}
              </Tag>
            )}
            {cat.sexe && (
              <Tag className="body2 bg-blue" icon={sexeIcon}>
                {cat.sexe}
              </Tag>
            )}
            {cat.maladie && (
              <Tag className="body2 bg-green" icon="health">
                {cat.maladie}
              </Tag>
            )}
          </div>
          <div className="cat-title">
            <h2 className="cat-name h2-light">{cat.nom}</h2>
            <Button theme="white" onClick={() => setIsOpen(true)}>
              En savoir plus
            </Button>
            <CatModal
              cat={cat}
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
