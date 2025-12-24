// Preview des chats en mode bulle d'avatar

import Button from "../button/Button";
import type { Cat } from "../../type/cats";
import { useEffect, useState } from "react";
import "./catAvatar.css";

export default function CatAvatar() {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/cats")
      .then((res) => res.json())
      .then((data) => setCats(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="cat-avatar layout-narrow">
      <div className="cat-grid">
        {cats.slice(0, 3).map((cat) => (
          <img
            className="cat-avatar-media"
            key={cat.nom}
            src={cat.photo}
            alt={`Photo de ${cat.nom}`}
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
