import "./adoptionHero.css";

interface HeroProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section className={`adoption-hero ${className}`}>
      <div className="content layout-half">
        <h1 className="h1">Nos chats à adopter</h1>
        <p className="body1">
          Nous croyons que chaque chat mérite un foyer aimant et sûr. En
          adoptant un chat avec nous, vous offrez une nouvelle chance à un
          animal qui a connu la vie dans la rue. Explorez les profils de nos
          chats disponibles, découvrez leurs histoires et trouvez votre futur
          compagnon.
        </p>
      </div>
      <img src="images/chat_roux.png" alt="Chats" className="image" />
    </section>
  );
}
