import "./faq.css";
import { faq } from "../../data/faq.mock";
import Icon from "../../components/icon/Icon";
import Button from "../../components/button/Button";

export default function FAQ() {
  return (
    <section className="layout-full bg-yellow faq">
      <section className="faq-container layout-wide">
        <div className="header layout-half">
          <h1 className="h1">Vos questions fréquentes</h1>
          <p className="body1">
            Vous avez trouvé un chat ? Vous ne savez pas par où commencer pour
            adopter ou pour devenir famille d'accueil ?{" "}
            <b>Nous sommes là pour vous répondre ! </b>
          </p>
        </div>
        <div className="list">
          {faq.map((f) => (
            <details key={f.question} className="faq-item bg-white">
              <summary className="faq-question body1-bold ">
                {f.question}
                <div className="icon-container bg-black">
                  <Icon name="navArrowDown" className="faq-chevron" />
                </div>
              </summary>
              <div className="faq-content">
                <p className="faq-answer body2">{f.answer}</p>
                {f.action && (
                  <Button
                    href={f.url}
                    theme="transparent"
                    className="fullwidth"
                  >
                    <Icon name="download" />
                    {f.action}
                  </Button>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>
    </section>
  );
}
