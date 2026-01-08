import CatCard from "../../components/catCard/CatCard";
import "./adoption.css";
import cats from "../../data/cats.json";
import type { Cat } from "../../types/cats";
import AdoptionHero from "../../components/adoptionHero/AdoptionHero";

export default function Adopt() {
  const catList = cats as Cat[];
  return (
    <>"
      <AdoptionHero className="layout-full bg-yellow" />
      <section className="adoption-container bg-yellow">
        <div className="cats-grid layout-wide">
          {catList.map((cat) => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </div>
      </section>
    </>
  );
}
