import Hero from "../../components/hero/Hero";
import TextCard from "../../components/textCard/TextCard";
import TextBand from "../../components/textBand/TextBand";
import CatAvatar from "../../components/catAvatar/CatAvatar";
import Callout from "../../components/callout/Callout";
import FAQ from "../../components/faq/FAQ";
import Sponsors from "../../components/sponsors/Sponsors";
import Wave from "../../components/wave/Wave";

import { textCards } from "../../data/textCards.mock";
import { sponsors } from "../../data/sponsors.mock";
import { behavior } from "../../data/behavior.mock";

import "./home.css";
import Button from "../../components/button/Button";

export default function Home() {
  return (
    <>
      <Hero className="layout-full" />

      {/* Section TextCards */}
      <section className="text-cards-container layout-full">
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
      <section className="cat-avatars-container layout-full bg-blue-contrasted wavy-bottom">
        <CatAvatar />
      </section>

      {/* Callout légal */}
      <Callout className="layout-wide" text="Texte légal" />

      {/* FAQ */}
      <FAQ />

      {/* Sponsors */}
      <Sponsors sponsors={sponsors} />
    </>
  );
}
