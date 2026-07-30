import type { Cat } from "../../types/cats";

import Tag from "../tag/Tag";
import Icon from "../icon/Icon";
import "./catCard.css";

interface CatCardProps {
  cat: Cat;
}

export default function CatCard({ cat }: CatCardProps) {
  const sexeIcon = cat.sexe == "Femelle" ? "female" : "male";

  return (
    <article className="cat-card">
      <a
        className="cat-image-wrapper"
        href={cat.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Voir l'annonce de ${cat.nom} sur le site du Fonds Saint-Bernard`}
      >
        <img
          className="cat-image"
          src={cat.photo[0]}
          alt={`Photo de ${cat.nom}`}
        />
        <div className="cat-image-overlay">
          <span className="cat-image-overlay-btn">
            Voir l'annonce
            <Icon name="extLink" />
          </span>
        </div>
      </a>

      <div className="cat-content">
        <div className="cat-title">
          <h2 className="cat-name body1-bold">{cat.nom}</h2>
        </div>
        <div className="cat-tags">
          {cat.ageCategory && (
            <Tag className="caption bg-blue" icon="age">
              {cat.ageCategory}
            </Tag>
          )}
          {cat.sexe && (
            <Tag className="caption bg-blue" icon={sexeIcon}>
              {cat.sexe}
            </Tag>
          )}
          {cat.maladie && (
            <Tag className="caption bg-green" icon="health">
              {cat.maladie}
            </Tag>
          )}
        </div>
      </div>
    </article>
  );
}
