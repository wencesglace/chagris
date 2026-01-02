import type { Cat } from "../../types/cats";
import Button from "../button/Button";
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
  const catAge = `${cat.age && cat.age.toString()} ${cat.age && cat.age > 1 ? "ans" : "an"}`;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="cat-modal">
        <div className="cat-modal-info">
          <div className="cat-modal-text">
            <div className="cat-modal-header">
              <h2 className="h2">{cat.nom}</h2>
              <div className="cat-modal-tags">
                {cat.age && (
                  <Tag className="tag body1 bg-blue" icon="age">
                    {catAge}
                  </Tag>
                )}
                {cat.sexe && (
                  <Tag className="tag body1 bg-blue" icon={sexeIcon}>
                    {cat.sexe}
                  </Tag>
                )}
                {cat.maladie && (
                  <Tag className="tag body1 bg-green" icon="health">
                    {cat.maladie}
                  </Tag>
                )}
              </div>
            </div>

            {cat.description && <p className="body1">{cat.description}</p>}
          </div>

          <div className="cat-modal-actions">
            <Button theme="transparent">Informations sur l’adoption</Button>
            <Button>Contacter l’association</Button>
          </div>
        </div>
        <div className="cat-modal-image">
          <img src={`${cat.photo ? cat.photo : "src/data/images/cats/placeholder.png"}`} />
        </div>
      </div>
    </Modal>
  );
}
