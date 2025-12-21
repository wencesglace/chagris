import React from "react";
import './button.css';

type ThemeColor = "green" | "pink" | "blue" | "black" | "transparent";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeColor;
  className?: string;
  as?: "button" | "a";
  href?: string;
  icon?: React.ReactNode;
}

export default function Button({
  theme = "black",
  as = "button",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `btn btn-${theme} ${className} ${props}`;

  // 👉 Cas lien
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  // 👉 Cas bouton
  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
