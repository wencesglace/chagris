import Hero from "../../components/hero/Hero";
import TextCard from "../../components/textCard/TextCard";
import TextBand from "../../components/textBand/TextBand";
import CatAvatar from "../../components/adoptions/adoptions";
import Sponsors from "../../components/sponsors/Sponsors";
import { textCards } from "../../data/textCards.mock";
import { behavior } from "../../data/behavior.mock";
import "./home.css";
// import Button from "../../components/button/Button";

export default function Home() {
  return (
    <>
      <Hero className="layout-full bg-blue-contrasted" />

      {/* Section TextCards */}
      <section className="text-cards-container layout-full bg-white wavy-top wavy-top-white-blue">
        <div className="text-cards-header layout-half">
          <h1 className="h1">Nos actions</h1>
          <p className="body1">
            Chagris veille sur les chats libres de Grenoble et de l’Isère depuis plus de 20 ans en leur offrant des soins, un logis et une famille.
          </p>
        </div>
        {/* <Button href="" className="btn-pink h2 emphasis">
          Nous contacter
        </Button> */}
        <section className="text-cards-section layout-wide no-padding">
          {textCards.map((card, i) => (
            <TextCard key={i} {...card} />
          ))}
        </section>
      </section>

      {/* Bandeau texte */}
      <TextBand
        text={behavior.map((b) => b.text).join("\xa0\xa0❊\xa0\xa0")}
        className="layout-full bg-blue-contrasted"
      />

      {/* Chats à l'adoption */}
      <section className="layout-full bg-blue-contrasted cat-avatars-container wavy-bottom wavy-blue">
        <CatAvatar />
      </section>

      {/* Sponsors */}
      <section className="layout-full bg-green">
        <Sponsors />
      </section>
    </>
  );
}
