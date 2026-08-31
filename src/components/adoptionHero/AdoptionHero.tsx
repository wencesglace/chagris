import "./adoptionHero.css";
import Button from "../button/Button";
import Icon from "../icon/Icon";

interface HeroProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  hasCats?: boolean;
}

export default function Hero({ className, hasCats = true }: HeroProps) {
  return (
    <section className={`adoption-hero ${className}`}>
      <div className="content layout-half">
        <h1 className="h1">Nos chats à adopter</h1>
        {hasCats ? (
          <p className="body1">
            Nous croyons que chaque chat mérite un foyer aimant et sûr. En
            adoptant un chat avec nous, vous offrez une nouvelle chance à un
            animal qui a connu la vie dans la rue. Explorez les profils de nos
            chats disponibles, découvrez leurs histoires et trouvez votre futur
            compagnon.
          </p>
        ) : (
          <>
            <p className="body1">
              Pour le moment, aucun chat n'attend son adoption chez nous. Si nous recueillons de nouveaux chats, vous les verrez sur cette page. En attendant, ailleurs, des chats et des chiens ont eux aussi besoin d'une famille. Si vous souhaitez adopter, n'hésitez pas à vous rendre sur les sites ci-dessous.
            </p>
            <div className="actions-container">
              <Button
                href="https://www.secondechance.org/"
                theme="outlined"
                className="body1"
              >
                <Icon name="paw" />
                Seconde chance
              </Button>
              <Button
                href="https://www.fonds-saint-bernard.com/adopter/utilisateur/3276-chatslibresdegrenoblechagris"
                theme="outlined"
                className="body1"
              >
                <Icon name="paw" />
                Fonds Saint-Bernard
              </Button>
            </div>
          </>
        )}
      </div>
      <img src="/images/chat_roux.png" alt="Chats" className="image" />
    </section>
  );
}
