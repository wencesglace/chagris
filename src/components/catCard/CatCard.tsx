import { useState } from "react";
import type { Cat } from "../../types/cats";

import Tag from "../tag/Tag";
import Icon from "../icon/Icon";
import Modal from "../modal/Modal";
import "./catCard.css";

interface CatCardProps {
  cat: Cat;
}

export default function CatCard({ cat }: CatCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sexeIcon = cat.sexe == "Femelle" ? "female" : "male";

  const tags = (
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
  );

  return (
    <>
      <article className="cat-card">
        <button
          type="button"
          className="cat-image-wrapper"
          onClick={() => setIsModalOpen(true)}
          aria-label={`Voir les infos de ${cat.nom}`}
        >
          <img
            className="cat-image"
            src={cat.photo[0]}
            alt={`Photo de ${cat.nom}`}
          />
          <div className="cat-image-overlay">
            <span className="cat-image-overlay-btn">
              Voir la fiche
              <Icon name="extLink" />
            </span>
          </div>
        </button>

        <div className="cat-content">
          <div className="cat-title">
            <h2 className="cat-name body1-bold">{cat.nom}</h2>
          </div>
          {tags}
        </div>
      </article>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="cat-modal-content">
          <img
            className="cat-modal-image"
            src={cat.photo[0]}
            alt={`Photo de ${cat.nom}`}
          />
          <div className="cat-modal-body">
            <h2 className="h3">{cat.nom}</h2>
            {tags}
            <a
              className="btn btn-blue fullwidth"
              href={cat.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir l'annonce complète
              <Icon name="extLink" />
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
}
