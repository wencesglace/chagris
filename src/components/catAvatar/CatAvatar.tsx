// Preview des chats en mode bulle d'avatar

import { cats } from '../../data/cats.mock'

export default function CatAvatar() {
  return (
    <section className="cat-avatar">
      <h2>Chats à l’adoption</h2>
      <p>Découvrez nos chats disponibles actuellement</p>
      <div className="cat-grid">
        {cats.map(cat => (
          <img className="cat-avatar"
            key={cat.name}
            src={cat.image}
            alt={`Photo de ${cat.name}`}
          />
        ))}
      </div>
      <button>Contacter l'association</button>
    </section>
  )
}