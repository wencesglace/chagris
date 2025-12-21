import type { TextCardProps } from "../components/textCard/TextCard";

export const textCards: TextCardProps[] = [
  {
    title: "Familles d’accueil",
    description:
      "Une famille d’accueil supplémentaire, c’est un chat sauvé du danger, de la détresse et souvent d’une mort certaine dans la rue. L’association a pour mission principale la protection des chats libres. Dans ce cadre, Un bon nombre des chats pris en charge sont des chats sociables abandonnés ou de jeunes chats nés dans la rue. Lorsqu’ils sont capturés, ils sont confiés à une de nos familles d’accueil.",
    theme: "blue",
    primaryButtonLabel: "Devenir famille d’accueil",
    primaryButtonHref: "",
    secondaryButtonLabel: "Manifeste de la FA",
    secondaryButtonHref: "",
  },
  {
    title: "Points de nourrissage",
    description:
      "Nous mettons en place des points de nourrissage fixes et des abris. Ces installations nous permettent de nous assurer que les chats identifiés vivent correctement dans leur environnement.",
    theme: "pink",
  },
  {
    title: "Identification et stérilisation",
    description:
      "Chaque chat recueilli est stérilisé et identifié chez un vétérinaire. C’est une question de salubrité publique et de protection de la faune qui cohabite avec les chats.",
    theme: "green",
    primaryButtonLabel: "J'ai trouvé un chat",
    primaryButtonHref: "",
  },
  {
    title: "Soins aux chats",
    description:
      "En cas de blessure ou de mauvais état de santé de l'animal, nous lui fournissons les soins nécessaires grâce à nos partenariats avec des vétérinaires.",
    theme: "green",
  },
  {
    title: "Mise à l'adoption",
    description:
      "Nous croyons que chaque chat mérite un foyer aimant et sûr. En adoptant un chat avec nous, vous offrez une nouvelle chance à un animal qui a connu la vie dans la rue. Explorez les profils de nos chats disponibles, découvrez leurs histoires et trouvez votre futur compagnon.",
    theme: "blue",
    primaryButtonLabel: "Je souhaite adopter",
    //note pour plus tard : mettre une icône
    primaryButtonHref: "",
  },
  {
    title: "Collecte et récupération de nourriture",
    description:
      "Parce que l’association a besoin de votre générosité, nous organisons régulièrement des collectes en Isère afin de récupérer des dons et de la nourriture. Votre aide nous est précieuse car elle nous permet d’alimenter nos points de nourrissage.",
    theme: "pink",
    primaryButtonLabel: "Faire un don",
    primaryButtonHref: "",
  },
];
