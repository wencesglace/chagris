type FAQItem = { question: string; answer: string; };

const faqs: FAQItem[] = [
  { question: "Comment devenir famille d'accueil ?", answer: "Vous pouvez nous contacter via le formulaire." },
  { question: "Comment signaler un chat ?", answer: "Envoyez-nous un email avec toutes les informations." },
];

export default function FAQ() {
  return (
    <section>
      <h2>Questions fréquentes</h2>
      {faqs.map((item, idx) => (
        <details key={idx}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </section>
  );
}
