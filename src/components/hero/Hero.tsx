import './hero.css';

interface HeroProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section className={`hero ${className}`}>
      <img src="src/pages/home/chartreux.png" alt="Chats" className="hero-image" />
      <div className="hero-text layout-narrow">
        <h1 className="h1-hero">Chats libres de Grenoble et de l'Isère</h1>
        <p className="h3 layout-half">Nous sommes une association loi 1901 de protection et de nourrissage des chats des rues.</p>
      </div>
    </section>
  );
}
