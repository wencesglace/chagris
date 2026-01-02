import React from "react";
import "./button.css";

type ThemeColor = "green" | "pink" | "blue" | "black" | "transparent" | "white";

type CommonProps = {
  theme?: ThemeColor;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
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
  const { theme = "black", icon, className, children, disabled } = props;

  const classes = `btn btn-${theme} ${disabled ? "btn--disabled" : ""} ${
    className ?? ""
  }`;
  console.log(classes);

  /* ---------- CAS LIEN ---------- */
  if ("href" in props) {
    const { href, rel } = props;

    if (disabled) {
      return (
        <span className={classes} aria-disabled="true">
          {icon && <span className="btn-icon">{icon}</span>}
          {children}
        </span>
      );
    }

    return (
      <a href={href} rel={rel} className={classes}>
        {icon && <span className="btn-icon">{icon}</span>}
        {children}
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
      disabled={disabled}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
}
