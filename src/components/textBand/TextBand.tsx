{
  /* Bande de texte qui défile */
}
import "./textBand.css";

type TextBandProps = {
  text: string;
  className?: string;
};

// TBD : le défilement ne marche par et le texte devra être paramétré un peu plus dynamiquement.

export default function TextBand({ text, className="" }: TextBandProps) {
  return (
    <section className={`text-band ${className}`}>
      <div className="text-band-track layout-full">
        <div className="text-band-content layout-full h3">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
