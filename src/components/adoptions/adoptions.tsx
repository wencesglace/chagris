// Preview des chats en mode bulle d'avatar

import Button from "../button/Button";
import type { Cat } from "../../types/cats";
import "./adoptions.css";
import cats from "../../data/cats.json";
import Callout from "../callout/Callout";

export default function Adoptions() {
  const catList = cats as Cat[];

  return (
    <section className="container main layout-narrow">
      <div className="cat-avatars">
        {catList.slice(0, 3).map((cat) => (
          <img
            className="cat-media"
            key={cat.nom}
            src={cat.photo[0]}
            alt={`Photo de ${cat.nom}`}
          />
        ))}
      </div>
      <section className="text-container">
        <h1 className="h1">Ils cherchent leur futur foyer</h1>
        <p className="body1">
          Nous croyons que chaque chat mérite un foyer aimant et sûr. En
          adoptant un chat avec nous, vous offrez une nouvelle chance à un
          animal qui a connu la vie dans la rue. Explorez les profils de nos
          chats disponibles, découvrez leurs histoires et trouvez votre futur
          compagnon.
        </p>
        <Callout />
      </section>
      <Button href="/adopt" className="btn-pink h2 emphasis">
        Je souhaite adopter !
      </Button>
    </section>
  );
}
