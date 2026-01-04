import "./hero.css";

interface HeroProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section className={`hero ${className}`}>
      <div className="content layout-half">
        <p className="body1">
          Nous sommes une association loi 1901 de protection
          <br />
          et de nourrissage des chats des rues.
        </p>
        <img src="src/assets/logo/logo-white.png" alt="Logo" className="logo" />
      </div>
      <img
        src="src/components/hero/chartreux.png"
        alt="Chats"
        className="image"
      />
    </section>
  );
}
