import "./faq.css";
import { faq } from "../../data/faq.mock";

export default function FAQ() {
  return (
    <section className="faq-container layout-half">
      <h1 className="h1"> Questions fréquentes </h1>
      {faq.map((f) => (
        <details key={f.question} className="faq-item">
          <summary className="faq-question h3-bold ">{f.question}</summary>
          <p className="faq-answer">{f.answer}</p>
        </details>
      ))}
    </section>
  );
}
