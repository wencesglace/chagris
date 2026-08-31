import Icon from "../icon/Icon";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="bg-yellow">
      <section className="footer-container bg-blue-contrasted">
        <div className="col img">
          <img src="images/logo-white.png" alt="Logo Chagris" />
        </div>
        <div className="col text">
          <p className="subtitle1">Plan du site</p>
          <a href="/home">Accueil</a>
          <a href="/adoption">Adoptions</a>
          <a href="/faq">F.A.Q.</a>
        </div>
        <div className="col text">
          <p className="subtitle1">Contact</p>
          <a href="mailto:chatslibres.chagris@gmail.com">
            Mail <Icon name="extLink" />
          </a>
          <a href="https://www.facebook.com/chatlibres.gris" target="_blank">
            Facebook <Icon name="extLink" />
          </a>
          <a href="https://www.instagram.com/chagris38/" target="_blank">
            Instagram <Icon name="extLink" />
          </a>
          <a
            href="https://www.tiktok.com/@associationchagris38"
            target="_blank"
          >
            Tiktok <Icon name="extLink"/>
          </a>
        </div>
        <div className="col text">
          <p className="subtitle1">Nous aider</p>
          <a
            href="https://www.helloasso.com/associations/chats-libres-de-grenoble-et-de-l-isere-chagris"
            target="_blank"
          >
            HelloAsso <Icon name="extLink" />
          </a>
          <a
            href="https://www.teaming.net/chatslibresdegrenoblechagris"
            target="_blank"
          >
            Teaming <Icon name="extLink" />
          </a>
        </div>
        <div className="col text">
          <p className="subtitle1">Adoptions</p>
          <a href="https://www.secondechance.org/" target="_blank">
            Seconde chance <Icon name="extLink"/>
          </a>
          <a href="https://www.fonds-saint-bernard.com/adopter/utilisateur/3276-chatslibresdegrenoblechagris" target="_blank">
            Fonds Saint-Bernard <Icon name="extLink"/>
          </a>
        </div>
      </section>
    </footer>
  );
}
