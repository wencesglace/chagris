import type { Cat } from "../../types/cats";
import Button from "../button/Button";
import Icon from "../icon/Icon";
import Modal from "../modal/Modal";
import Tag from "../tag/Tag";
import "./catModal.css";

interface CatModalProps {
  cat: Cat;
  isOpen: boolean;
  onClose: () => void;
}

export default function CatModal({ cat, isOpen, onClose }: CatModalProps) {
  const sexeIcon = cat.sexe == "Femelle" ? "female" : "male";
  const catAge = `${cat.age && cat.age.toString()} ${
    cat.age && cat.age > 1 ? "ans" : "an"
  }`;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="cat-modal">
        <div className="cat-modal-info">
          <div className="cat-modal-text">
            <div className="cat-modal-header">
              <h2 className="subtitle1">{cat.nom}</h2>
              <div className="cat-modal-tags">
                {cat.age && (
                  <Tag className="tag body2 bg-blue" icon="age">
                    {catAge}
                  </Tag>
                )}
                {cat.sexe && (
                  <Tag className="tag body2 bg-blue" icon={sexeIcon}>
                    {cat.sexe}
                  </Tag>
                )}
                {cat.maladie && (
                  <Tag className="tag body2 bg-green" icon="health">
                    {cat.maladie}
                  </Tag>
                )}
              </div>
            </div>

            {cat.description && <p className="body1">{cat.description}</p>}
          </div>

          <div className="cat-modal-actions">
            <Button className="fullwidth" href={cat.url}>
              Voir l'annonce
              <Icon name="extLink" />
            </Button>
          </div>
        </div>
        <div className="cat-modal-image">
          <img src={cat.photo[0]} />
        </div>
      </div>
    </Modal>
  );
}
