import CatCard from "../../components/CatCard";
export type CatStatus = 'disponible' | 'en attente' | 'réservé'

export type Cat = {
  name: string
  age: string
  image: string
  description: string
  status: CatStatus
}

const cats : Cat[] = [
  {
    name: "PPT", 
    age: "10 ans", 
    image: "src/pages/adoption/ppt.jpeg",
    description: "Chat cosmonaute à ses heures perdues.",
    status: 'disponible',
  },
  { 
    name: "Nyouki", 
    age: "12 ans", 
    image: "src/pages/adoption/nyouki.jpeg",
    description: "A peur des bouteilles d'eau gazeuse et de son ombre.",
    status: "réservé",
  },
  { 
    name: "Perle", 
    age: "8 ans", 
    image: "src/pages/adoption/perle.jpeg",
    description: "S'est découverte une passion pour les câlins.",
    status: "en attente",
  },
];

export default function Adopt() {
  return (
    <main>
      <h2>Chats à adopter</h2>
      <div className="cat-grid">
        {cats.map((cat, idx) => (
          <CatCard key={idx} {...cat} />
        ))}
      </div>
    </main>
  );
}
