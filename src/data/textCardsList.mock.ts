import type { TextCardProps } from "../components/textCard/TextCard";

export const textCardsList: TextCardProps[] = [
  {
    id: "1",
    type: "text",
    title: "Nourrissage",
    description:
      "Nous mettons en place des points de nourrissage et des abris qui nous permettent de nous assurer que les chats identifiés vivent correctement",
    theme: "pink-contrasted",
  },
  {
    id: "2",
    type: "text",
    title: "Identification",
    description:
      "Obligatoire depuis 2012, identifier les chats des rues leur donne le status protecteur de Chat Libre",
    theme: "green",
  },
  {
    id: "3",
    type: "text",
    title: "Famille d'accueil",
    description:
      "Une famille d’accueil supplémentaire, c’est un chat sauvé du danger, de la détresse et souvent d’une mort certaine dans la rue. L’association a pour mission principale la protection des chats libres. Dans ce cadre, lorsqu’un chat est identifié sociable il est confié à une de nos familles d’accueil.",
    theme: "blue",
    primaryButtonLabel: "En savoir plus",
    primaryButtonHref: "",
  },
  {
    id: "4",
    type: "text",
    title: "Soin aux chats",
    description:
      "En cas de mauvais état de santé de l'animal, nous lui fournissons les soins nécessaires grâce à nos partenariats avec des vétérinaires.",
    theme: "green",
  },
  {
    id: "5",
    type: "image",
    title: "Chaton roux abandonné",
    imgSrc: "images/chaton_roux_abandonne.png",
    theme: "image",
  },
  {
    id: "6",
    type: "text",
    title: "Adoption",
    description:
      "Après socialisation des chatons et identification des adultes sociables, les chats recueillis sont mis à l’adoption. Vous pouvez les retrouver sur notre site ainsi que sur Facebook, Seconde Chance et Fonds St Bernard. En adoptant un chat avec nous, vous offrez une nouvelle chance à un animal qui a connu la vie dans la rue. ",
    theme: "blue-contrasted",
    primaryButtonLabel: "Je souhaite adopter",
    primaryButtonHref: "",
  },
  {
    id: "7",
    type: "text",
    title: "Stérilisation",
    description:
      "Chaque chat recueilli est stérilisé et identifié chez un vétérinaire. C’est une question de salubrité publique et de protection de la faune qui cohabite avec les chats.",
    theme: "green-contrasted",
  },
  {
    id: "8",
    type: "text",
    title: "Collectes solidaires",
    description:
      "Tout au long de l’année, nous organisons régulièrement des collectes en Isère afin de récupérer des dons et de la nourriture. ",
    theme: "pink",
  },
  {
    id: "9",
    type: "image",
    title: "Chats autour d'un piège",
    imgSrc: "images/chats_autour_piege.png",
    theme: "image",
  },
];
