// Preview des chats en mode bulle d'avatar

import Button from "../button/Button";
import type { Cat } from "../../types/cats";
import "./adoptions.css";
import cats from "../../data/cats.json";
import Callout from "../callout/Callout";

export default function Adoptions() {
  const catList = cats as Cat[];

  return (
    <section className="adoption-container main layout-narrow">
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
      <div className="heading">
        <h1 className="h2">
          {catList[0].nom}, {catList[1].nom} et bien d'autres <br />
          cherchent leur futur foyer
        </h1>
        <p className="body1 layout-half">
          Nous croyons que chaque chat mérite un foyer aimant et sûr. En
          adoptant un chat avec nous, vous offrez une nouvelle chance à un
          animal qui a connu la vie dans la rue. Explorez les profils de nos
          chats disponibles, découvrez leurs histoires et trouvez votre futur
          compagnon.
        </p>
        <div className="actions-container">
          <Button href="/adopt" theme="outlined" className="body1">
            Contacter l'association
          </Button>
          <Button href="/adopt" className="body1">
            Voir les adoptions
          </Button>
        </div>
        <Callout />
      </div>
    </section>
  );
}
