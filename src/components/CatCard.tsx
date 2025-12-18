type CatCardProps = {
  name: string;
  age: string;
  image: string;
  description: string;
};

export default function CatCard({ name, age, image, description }: CatCardProps) {
  return (
    <div className="cat-card">
      <img src={image} alt={`Photo de ${name}`} />
      <h3>{name} - {age}</h3>
      <p>{description}</p>
      <button>Adopter</button>
    </div>
  );
}
