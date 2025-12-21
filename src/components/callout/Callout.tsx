// encart un peu plus léger
import './callout.css';

type CalloutProps = {
  text: string
}

export default function Callout({ text }: CalloutProps) {
  return (
    <section className="callout">
      <p>{text}</p>
    </section>
  )
}