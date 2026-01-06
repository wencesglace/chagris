import { useState } from "react";
import type { Cat } from "../../types/cats";

import Tag from "../tag/Tag";
import "./catCard.css";

import CatModal from "../catModal/CatModal";
import { formatDateLong } from "../../utils/date";

interface CatCardProps {
  cat: Cat;
}

export default function CatCard({ cat }: CatCardProps) {
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
          src={cat.photo[0]}
          alt={`Photo de ${cat.nom}`}
        />

        {cat.description && (
          <div className="cat-overlay">
            <p className="cat-description body-1">{cat.description}</p>
          </div>
        )}
      </div>

      <div className="cat-content">
        <div className="cat-title">
          <h2 className="cat-name h2-light">{cat.nom}</h2>
          {cat.rescueDate && (
            <p className="cat-date caption">
              Arrivé{cat.sexe == "Femelle" && "e"} le{" "}
              {formatDateLong(cat.rescueDate)}
            </p>
          )}
        </div>
        <div className="cat-tags">
          {cat.age && (
            <Tag className="caption bg-blue-contrasted" icon="age">
              {catAge}
            </Tag>
          )}
          {cat.sexe && (
            <Tag className="caption bg-blue-contrasted" icon={sexeIcon}>
              {cat.sexe}
            </Tag>
          )}
          {cat.maladie && (
            <Tag className="caption bg-green-contrasted" icon="health">
              {cat.maladie}
            </Tag>
          )}
        </div>
        <CatModal cat={cat} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </article>
  );
}
