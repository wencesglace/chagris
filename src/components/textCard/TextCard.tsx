// Les cartes descriptives des actions de l'asso avec quelques liens optionnels

export type TextCardProps = {
  title: string
  description: string
  primaryButtonLabel?: string // L'action principale (optionnelle)
  primaryButtonHref?: string // Lien de l'action principale
  secondaryButtonLabel?: string // L'action secondaire (optionnelle)
  secondaryButtonHref?: string // Lien de l'action secondaire
}

export default function TextCard({
  title,
  description,
  primaryButtonLabel,
  primaryButtonHref,
  secondaryButtonLabel,
  secondaryButtonHref,
}: TextCardProps) {
  return (
    <div className="text-card">
      <h2>{title}</h2>
      <p>{description}</p>
      {primaryButtonLabel && (
        <a href={primaryButtonHref}>
          <button>{primaryButtonLabel}</button>
        </a>
      )}
      {secondaryButtonLabel && (
        <a href={secondaryButtonHref}>
          <button>{secondaryButtonLabel}</button>
        </a>
      )}
    </div>
  )
}


