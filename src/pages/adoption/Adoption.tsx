import type { Cat } from "../../type/cats";
import { useEffect, useState } from "react";
import CatCard from "../../components/CatCard";
import '../../style/adoption.css';

export default function Adopt() {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/cats")
      .then(res => res.json())
      .then(data => setCats(data))
      .catch(err => console.error(err));
  }, []);

  console.log('Cats in Adoption page:', cats);

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
