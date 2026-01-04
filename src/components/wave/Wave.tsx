import React from "react";

type WaveProps = {
  position?: "top" | "bottom"; // par défaut bottom
  className?: string;          // optionnel pour ajouter des styles spécifiques
};

const Wave: React.FC<WaveProps> = ({ position = "bottom", className = "" }) => {
  return (
    <div className={`wave-container ${position} ${className}`}>
      <img src="vectors/waves/wave-bottom.svg" alt="Décor vague" />
    </div>
  );
};

export default Wave;