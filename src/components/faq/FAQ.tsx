type FAQItem = { question: string; answer: string };

const faqs: FAQItem[] = [
  {
    question: "Comment adopter un chat ?",
    answer:
      "Pour adopter un chat, consultez notre site pour voir les chats disponibles à l'adoption. Remplissez le formulaire d'adoption et préparez-vous à une visite de notre équipe pour assurer que votre domicile est adapté. CHAGRIS vous aidera à trouver le compagnon idéal en fonction de vos besoins et de votre environnement.  Vous aimez les chats mais vous ne pouvez pas adopter ? Devenez famille d'accueil quelques semaines dans l'année !",
  },
  {
    question: "J'ai perdu mon chat, que faire ?",
    answer:
      "Que faire si j'ai perdu mon chat ? En cas de perte, agissez rapidement en parcourant votre quartier, en affichant des photos de votre chat et en contactant les refuges, vétérinaires et associations locales comme CHAGRIS. Utilisez également des sites de recherche d'animaux perdus et inspectez régulièrement les endroits où votre chat pourrait se cacher. En cas de besoin, n'hésitez pas à nous contacter pour obtenir de l'aide.",
  },
  {
    question: "J'ai trouvé un chat, que faire ?",
    answer:
      "Si vous avez trouvé un chat, vérifiez s'il porte une médaille d'identification. Sinon, signalez-le à un vétérinaire et aux refuges locaux pour vérifier s'il est identifié par une puce électronique. Diffusez des affiches et des posts sur les réseaux sociaux pour retrouver son propriétaire. Contactez également CHAGRIS pour obtenir des conseils supplémentaires.",
  },
  {
    question: "Comment faire un signalement ?",
    answer:
      "Pour signaler un chat libre, contactez CHAGRIS avec une description du chat et son emplacement. Nous évaluerons la situation et déciderons des actions nécessaires, comme la stérilisation ou la fourniture de nourriture. Votre signalement nous aide à mieux prendre soin des chats des rues.",
  },
  {
    question: "Je souhaite abandonner mon chat",
    answer:
      "L'abandon d'un chat est une décision grave et doit être envisagé uniquement en dernier recours. En tant que propriétaire, vous avez la responsabilité de veiller à son bien-être. Avant d'abandonner, explorez toutes les autres options, comme le placement dans un nouveau foyer ou la consultation avec un refuge. Contactez CHAGRIS pour des conseils et des ressources sur les alternatives à l'abandon.",
  },
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
