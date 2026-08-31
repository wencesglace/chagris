import Button from "../../components/button/Button";
import Icon from "../../components/icon/Icon";
import "./contact.css";

const CONTACT_EMAIL = "chatslibres.chagris@gmail.com";

export default function Contact() {
  return (
    <main className="contact-page layout-narrow">
      <div className="heading">
        <h1 className="h1">Contact</h1>
        <p className="body1">
          Une question sur l'adoption, un signalement de chat errant, une
          envie de nous rejoindre ? Écrivez-nous, on vous répond dès que
          possible.
        </p>
      </div>

      <div className="contact-actions">
        <Button
          href={`mailto:${CONTACT_EMAIL}`}
          theme="blue"
          className="fullwidth"
          icon={<Icon name="messageFilled" />}
        >
          {CONTACT_EMAIL}
        </Button>

        <Button
          href="https://www.facebook.com/chatlibres.gris"
          theme="outlined"
          className="fullwidth"
          icon={<Icon name="facebook" />}
        >
          Nous écrire sur Facebook
        </Button>
      </div>
    </main>
  );
}
