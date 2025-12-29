import Hero from "../../components/hero/Hero";
import TextCard from "../../components/textCard/TextCard";
import TextBand from "../../components/textBand/TextBand";
import CatAvatar from "../../components/adoptions/adoptions";
import Sponsors from "../../components/sponsors/Sponsors";

import { textCards } from "../../data/textCards.mock";

import { behavior } from "../../data/behavior.mock";

import "./home.css";
import Button from "../../components/button/Button";

export default function Home() {
  return (
    <>
      <Hero className="layout-full bg-blue-contrasted" />

      {/* Section TextCards */}
      <section className="text-cards-container layout-full bg-yellow wavy-top">
        <h1 className="layout-narrow h1">
          Nous veillons sur les chats libres d’Isère depuis plus de 20 ans.
        </h1>
        <Button href="" className="btn-pink h2 emphasis">
          Nous contacter
        </Button>
        <section className="text-cards-section layout-wide">
          {textCards.map((card, i) => (
            <TextCard key={i} {...card} />
          ))}
        </section>
      </section>

      {/* Bandeau texte */}
      <TextBand
        text={behavior.map((b) => b.text).join("\xa0\xa0❊\xa0\xa0")}
        className="layout-full"
      />

      {/* Chats à l'adoption */}
      <section className="layout-full bg-blue-contrasted cat-avatars-container wavy-bottom wavy-blue">
        <CatAvatar />
      </section>

      {/* Sponsors */}
      <section className="layout-full bg-green"> 
        <Sponsors/>
      </section>
    </>
  );
}
