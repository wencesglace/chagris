import CatCard from "../../components/catCard/CatCard";
import './adoption.css';
import cats from "../../data/cats.json";
import type { Cat } from "../../types/cats";

export default function Adopt() {
  const catList: Cat[] = cats.map((c) => ({
    ...c,
    id: c.id,
    age: c.age ?? undefined,
    maladie: c.maladie ?? undefined,
    sexe: c.sexe ?? undefined,
    description: c.description ?? undefined,
    photo: c.photo ?? undefined,
    statut: c.statut ?? "en attente",
  }));
  return (
    <main>
      <h2>Chats à adopter</h2>
      <div className="cat-grid">
        {catList.map((cat) => (
          <CatCard key={cat.id} {...cat} />
        ))}
      </div>
    </main>
  );
}

