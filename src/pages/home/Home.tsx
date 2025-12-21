import Hero from '../../components/hero/Hero'
import TextCard from '../../components/textCard/TextCard'
import TextBand from '../../components/textBrand/TextBand'
import CatAvatar from '../../components/catAvatar/CatAvatar'
import Callout from '../../components/callout/Callout'
import FAQ from '../../components/faq/FAQ'
import Sponsors from '../../components/sponsors/Sponsors'
import Footer from '../../components/footer/Footer'

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