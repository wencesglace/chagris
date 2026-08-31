import Icon from "../../components/icon/Icon";
import Button from "../../components/button/Button";
import "./links.css";

// Page volontairement absente du menu : accessible uniquement via son URL
// directe (/links), pensée pour être encodée en QR code sur le kakemono.
// C'est ici qu'atterrissent les gens qui scannent le QR (via la redirection
// /qr). Elle recense les liens utiles du site, regroupés par thématique.
export default function Links() {
  return (
    <main className="links-page bg-white">
      <img
        src="/images/chat_roux.png"
        alt="Chat"
        className="links-image-top"
      />

      <div className="links-columns-wrapper">
        <div className="links-columns">
          {/* Nous contacter */}
          <div className="links-section">
            <p className="subtitle1 links-section-title text-blue">
              Nous contacter
            </p>
            <div className="links-column">
              <Button
                href="mailto:chatslibres.chagris@gmail.com"
                theme="blue"
                className="fullwidth"
                icon={<Icon name="messageFilled" />}
              >
                Mail
              </Button>

              <Button
                href="https://www.facebook.com/chatlibres.gris"
                theme="blue"
                className="fullwidth"
                icon={<Icon name="facebook" />}
              >
                Facebook
              </Button>

              <Button
                href="https://www.instagram.com/chagris38/"
                theme="blue"
                className="fullwidth"
                icon={<Icon name="instagram" />}
              >
                Instagram
              </Button>

              <Button
                href="https://www.tiktok.com/@associationchagris38"
                theme="blue"
                className="fullwidth"
                icon={<Icon name="tiktok" />}
              >
                TikTok
              </Button>
            </div>
          </div>

          {/* Nous aider */}
          <div className="links-section">
            <p className="subtitle1 links-section-title text-blue">
              Nous aider
            </p>
            <div className="links-column">
              <Button
                href="https://www.helloasso.com/associations/chats-libres-de-grenoble-et-de-l-isere-chagris"
                theme="blue"
                className="fullwidth"
              >
                HelloAsso
              </Button>

              <Button
                href="https://www.teaming.net/chatslibresdegrenoblechagris"
                theme="blue"
                className="fullwidth"
              >
                Teaming
              </Button>
            </div>
          </div>

          {/* Adoptions */}
          <div className="links-section">
            <p className="subtitle1 links-section-title text-blue">
              Adoptions
            </p>
            <div className="links-column">
              <Button
                href="https://www.fonds-saint-bernard.com/adopter/utilisateur/3276-chatslibresdegrenoblechagris"
                theme="blue"
                className="fullwidth"
                icon={<Icon name="extLink" />}
              >
                Fonds Saint-Bernard
              </Button>

              <Button
                href="https://www.secondechance.org/"
                theme="blue"
                className="fullwidth"
                icon={<Icon name="extLink" />}
              >
                Seconde chance
              </Button>
            </div>
          </div>
        </div>
      </div>

      <section className="links-logo-container bg-pink wavy wavy-pink-blue">
        <a href="/" aria-label="Retour à l'accueil">
          <div
            role="img"
            aria-label="Logo Chagris"
            className="links-logo-bottom links-logo-blue"
          />
        </a>
      </section>
    </main>
  );
}
