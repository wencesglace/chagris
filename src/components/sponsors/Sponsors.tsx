// Les soutiens de l'association

import type { Sponsor } from '../../data/sponsors.mock'

type SponsorsProps = {
  sponsors: Sponsor[]
}

export default function Sponsors({ sponsors }: SponsorsProps) {
  return (
    <section className="sponsors">
      <h2>Ils nous soutiennent</h2>
      <p>Merci à nos partenaires</p>
      <div className="sponsor-logos">
        {sponsors.map(s => (
          <img key={s.label} src={s.logo} alt={s.label} />
        ))}
      </div>
    </section>
  )
}
