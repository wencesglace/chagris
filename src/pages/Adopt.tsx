import CatCard from "../components/CatCard";

const cats = [
  { name: "Gribouille", age: "2 ans", image: "./src/images/gribouille.jpeg", description: "Chat très doux." },
  { name: "Tigrou", age: "1 an", image: "/images/tigrou.jpg", description: "Très joueur." },
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
