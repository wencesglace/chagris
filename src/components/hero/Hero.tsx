import "./hero.css";

interface HeroProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section className={`hero ${className}`}>
      <div className="hero-content layout-half">
        <p className="h3">
          Nous sommes une association loi 1901 de protection et de nourrissage
          des chats des rues.
        </p>
        <img
          src="src/assets/logo/logo-white.png"
          alt="Logo"
          className="hero-logo"
        />
        
      </div>
      <img
        src="src/pages/home/chartreux.png"
        alt="Chats"
        className="hero-image"
      />
    </section>
  );
}
