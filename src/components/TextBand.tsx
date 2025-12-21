{/* Bande de texte qui défile */}

type TextBandProps = {
  text: string
}

// TBD : le défilement ne marche par et le texte devra être paramétré un peu plus dynamiquement.

export default function TextBand({ text }: TextBandProps) {
  return (
    <div className="text-band">
      {text}
    </div>
  )
}
