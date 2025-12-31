import CatCard from "../../components/catCard/CatCard";
import "./adoption.css";
import cats from "../../data/cats.json";
import type { Cat } from "../../types/cats";
import AdoptionHero from "../../components/adoptionHero/AdoptionHero";

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
    <>"
      <AdoptionHero className="layout-full bg-yellow" />
      <section className="adoption-container layout-wide">
        <div className="cats-grid">
          {catList.map((cat) => (
            <CatCard key={cat.id} {...cat} />
          ))}
        </div>
      </section>
    </>
  );
}
