import CatCard from "../../components/catCard/CatCard";
import "./adoption.css";
import cats from "../../data/cats.json";
import type { Cat } from "../../types/cats";
import AdoptionHero from "../../components/adoptionHero/AdoptionHero";

export default function Adopt() {
  const catList = cats as Cat[];
  return (
    <>"
      <AdoptionHero className="layout-full bg-pink" />
      <section className="adoption-container layout-wide">
        <div className="cats-grid">
          {catList.map((cat) => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </div>
      </section>
    </>
  );
}
