import CatCard from "../../components/catCard/CatCard";
import type { Cat } from "../../type/cats";
import { useEffect, useState } from "react";
import './adoption.css';

export default function Adopt() {
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCats() {
      try {
        const res = await fetch("http://localhost:3000/api/cats");
        const data: Cat[] = await res.json();
        setCats(data);
      } catch (err) {
        console.error("Erreur fetch cats:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCats();
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (!cats.length) return <p>Aucun chat à afficher.</p>;

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
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}

