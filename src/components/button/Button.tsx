import React from "react";
import "./button.css";

type ThemeColor =
  | "green"
  | "pink"
  | "blue"
  | "black"
  | "white"
  | "transparent"
  | "outlined";

type CommonProps = {
  theme?: ThemeColor;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  /** Remplace le texte du bouton et le désactive pendant une action en cours (ex: envoi d'un formulaire). */
  isLoading?: boolean;
  /** Texte affiché quand isLoading est vrai. Défaut : "Chargement..." */
  loadingText?: string;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button(props: ButtonProps) {
  const {
    theme = "black",
    icon,
    className,
    children,
    disabled,
    isLoading = false,
    loadingText = "Chargement...",
  } = props;

  const isDisabled = disabled || isLoading;
  const content = isLoading ? loadingText : children;

  const classes = `btn btn-${theme} ${isDisabled ? "btn--disabled" : ""} ${
    className ?? ""
  }`;

  /* ---------- CAS LIEN ---------- */
  if ("href" in props) {
    const { href, rel } = props;

    if (isDisabled) {
      return (
        <span className={classes} aria-disabled="true">
          {icon && !isLoading && <span className="btn-icon">{icon}</span>}
          {content}
        </span>
      );
    }

    return (
      <a
        href={href}
        rel={rel}
        target={href && href.startsWith("http") ? "_blank" : undefined}
        className={classes}
      >
        {icon && <span className="btn-icon">{icon}</span>}
        {content}
      </a>
    );
  }

  /* ---------- CAS BOUTON ---------- */
  const { type = "button", ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      type={type}
      className={classes}
      disabled={isDisabled}
    >
      {icon && !isLoading && <span className="btn-icon">{icon}</span>}
      {content}
    </button>
  );
}
