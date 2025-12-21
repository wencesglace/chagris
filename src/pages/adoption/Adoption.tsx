import CatCard from "../../components/CatCard";
import { cats } from "../../data/cats.mock";
import '../../style/adoption.css';

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

