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
          <p className="subtitle1">Social</p>
          <a href="https://www.facebook.com/chatlibres.gris" target="_blank">
            <Icon name="facebook" /> Facebook <Icon name="extLink" />
          </a>
          <a href="https://www.instagram.com/chagris38/" target="_blank">
            <Icon name="instagram" /> Instagram <Icon name="extLink" />
          </a>
          <a
            href="https://www.tiktok.com/@associationchagris38"
            target="_blank"
          >
            <Icon name="tiktok" /> Tiktok <Icon name="extLink"/>
          </a>
        </div>
        <div className="col text">
          <p className="subtitle1">Annexes</p>
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
