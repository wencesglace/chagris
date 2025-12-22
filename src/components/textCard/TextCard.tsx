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
  const classes = `text-card ${theme}`;
  return (
    <div className={classes}>
      <div className="text-card-content">
        <h2 className="h2">{title}</h2>
        <p>{description}</p>
      </div>
      {(primaryButtonLabel || secondaryButtonLabel) && (
        <div className="text-card-actions">
          {primaryButtonLabel && (
            <a href={primaryButtonHref}>
              <Button href={primaryButtonHref} className="fullwidth body1">
                {primaryButtonLabel}
              </Button>
            </a>
          )}
          {secondaryButtonLabel && (
            <a href={secondaryButtonHref}>
              <Button
                href={secondaryButtonHref}
                theme="transparent"
                className="fullwidth body1"
              >
                {secondaryButtonLabel}
              </Button>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
