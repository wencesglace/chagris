// Les cartes descriptives des actions de l'asso avec quelques liens optionnels

import Button from "../button/Button";
import "./textCard.css";

export type TextCardProps = {
  id: string;
  type: "text" | "image";
  title: string;
  description?: string;
  theme:
    | "green"
    | "pink"
    | "blue"
    | "green-contrasted"
    | "pink-contrasted"
    | "blue-contrasted"
    | "image";
  imgSrc?: string;
  primaryButtonLabel?: string;
  primaryButtonHref?: string;
};

export default function TextCard({
  id,
  type,
  title,
  description,
  theme,
  imgSrc,
  primaryButtonLabel,
  primaryButtonHref,
}: TextCardProps) {
  const classes = `text-card ${theme} div-${id} `;
  if (type === "image" && imgSrc) {
    // Image card
    return (
      <div className={`text-card image div-${id}`}>
        <img src={imgSrc} alt="" className="text-card-image" />
      </div>
    );
  } else {
    // Text card
    return (
      <div className={classes}>
        <div className="text-card-content">
          <h3 className="h3">{title}</h3>
          <p className="body1">{description}</p>
        </div>

        {primaryButtonLabel  && (
          <div className="text-card-actions">
            <Button href={primaryButtonHref} className={`fullwidth body1 btn-${theme}`}>
              {primaryButtonLabel}
            </Button>
          </div>
        )}
      </div>
    );
  }
}
