// Preview des chats en mode bulle d'avatar

import Button from "../button/Button";
import { cats } from "../../data/cats.mock";
import "./catAvatar.css";

export default function CatAvatar() {
  return (
    <section className="cat-avatar layout-narrow">
      <div className="cat-grid">
        {cats.map((cat) => (
          <img
            className="cat-avatar"
            key={cat.name}
            src={cat.image}
            alt={`Photo de ${cat.name}`}
          />
        ))}
      </div>
      <h1 className="h1">Ils cherchent leur futur foyer</h1>
      <p className="body1">
        Nous croyons que chaque chat mérite un foyer aimant et sûr. En adoptant
        un chat avec nous, vous offrez une nouvelle chance à un animal qui a
        connu la vie dans la rue. Explorez les profils de nos chats disponibles,
        découvrez leurs histoires et trouvez votre futur compagnon.
      </p>

      <Button href="" className="btn-pink h2 emphasis">
        Je souhaite adopter !
      </Button>
    </section>
  );
}
