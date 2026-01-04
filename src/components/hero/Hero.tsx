import "./hero.css";

interface HeroProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section className={`hero ${className}`}>
      <div className="content layout-half">
        <p className="h3">
          Nous sommes une association loi 1901 de protection et de nourrissage
          des chats des rues.
        </p>
        <img
          src="images/logo-white.png"
          alt="Logo"
          className="logo"
        />
        
      </div>
      <img
        src="images/chartreux.png"
        alt="Chats"
        className="image"
      />
    </section>
  );
}
