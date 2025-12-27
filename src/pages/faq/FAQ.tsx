import "./faq.css";
import { faq } from "../../data/faq.mock";

export default function FAQ() {
  return (
    <section className="layout-full bg-green">
      <section className="faq-container layout-half">
        <h1 className="h1"> Questions fréquentes </h1>
        {faq.map((f) => (
          <details key={f.question} className="faq-item ">
            <summary className="faq-question h3-bold ">
              {f.question}
              <i
                className="fa-solid fa-chevron-down faq-chevron"
                aria-hidden="true"
              />
            </summary>
            <div className="faq-content">
              <p className="faq-answer">{f.answer}</p>
            </div>
          </details>
        ))}
      </section>
    </section>
  );
}
