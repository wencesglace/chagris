import Hero from "../../components/hero/Hero";
import TextBand from "../../components/textBand/TextBand";
import CatAvatar from "../../components/adoptions/adoptions";
import Sponsors from "../../components/sponsors/Sponsors";
import { behavior } from "../../data/behavior.mock";
import "./home.css";
import TextCards from "../../components/textCards/TextCards";

export default function Home() {
  return (
    <>
      <Hero className="layout-full bg-blue-contrasted" />

      {/* Bandeau texte */}
      <TextBand
        text={behavior.map((b) => b.text).join("\xa0\xa0❊\xa0\xa0")}
        className="layout-full bg-yellow-contrasted"
      />

      {/* Section TextCards */}
      <TextCards />
      

      {/* Chats à l'adoption */}
      <section className="layout-full bg-pink cat-avatars-container wavy wavy-pink-blue">
        <CatAvatar />
      </section>

      {/* Chats à l'adoption */}
      <section className="layout-full bg-yellow wavy wavy-yellow-pink">
        <Sponsors />
      </section>
    </>
  );
}
