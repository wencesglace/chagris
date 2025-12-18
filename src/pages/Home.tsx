import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <h2>Nous protégeons les chats libres de l’Isère</h2>
        <p>Depuis plus de 20 ans, nous veillons sur les chats des rues.</p>
      </section>

      <FAQ />
    </main>
  );
}
