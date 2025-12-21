// Les cartes descriptives des actions de l'asso avec quelques liens optionnels

import Button from "../button/Button";
import "./textCard.css";

export type TextCardProps = {
  title: string;
  description: string;

  theme: "green" | "pink" | "blue"; // Thème de la carte

  primaryButtonLabel?: string; // L'action principale (optionnelle)
  primaryButtonHref?: string; // Lien de l'action principale
  secondaryButtonLabel?: string; // L'action secondaire (optionnelle)
  secondaryButtonHref?: string; // Lien de l'action secondaire
};

export default function TextCard({
  title,
  description,
  theme,
  primaryButtonLabel,
  primaryButtonHref,
  secondaryButtonLabel,
  secondaryButtonHref,
}: TextCardProps) {
  return (
    <div className="text-card ">
      <h2>{title}</h2>
      <p>{description}</p>
      {primaryButtonLabel && (
        <a href={primaryButtonHref}>
          <Button
            as="a"
            href={primaryButtonHref}
            className="is-fullwidth"
          >
            {primaryButtonLabel}
          </Button>
        </a>
      )}
      {secondaryButtonLabel && (
        <a href={secondaryButtonHref}>
          <Button
            as="a"
            href={secondaryButtonHref}
            theme="transparent"
            className="is-fullwidth"
          >
            {secondaryButtonLabel}
          </Button>
        </a>
      )}
    </div>
  );
}
