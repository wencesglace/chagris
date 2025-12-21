import Header from '../../components/Header'
import Hero from '../../components/Hero'
import TextCard from '../../components/TextCard'
import TextBand from '../../components/TextBand'
import CatAvatar from '../../components/CatAvatar'
import Callout from '../../components/Callout'
import FAQ from '../../components/FAQ'
import Sponsors from '../../components/Sponsors'
import Footer from '../../components/Footer'

import { textCards } from "../../data/textCards.mock"
import { sponsors } from '../../data/sponsors.mock'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Section TextCards */}
      <section className="text-cards-section">
        {textCards.map((card, i) => (
          <TextCard key={i} {...card} />
        ))}
      </section>

      {/* Bandeau texte */}
      <TextBand text="Bienvenue sur le site de l'association !" />

      {/* Chats à l'adoption */}
      <CatAvatar/>

      {/* Callout légal */}
      <Callout text="Texte légal" />

      {/* FAQ */}
      <FAQ />

      {/* Sponsors */}
      <Sponsors sponsors={sponsors} />

      {/* Footer */}
      <Footer />
    </>
  )
}