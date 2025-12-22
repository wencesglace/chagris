// encart un peu plus léger
import './callout.css';

type CalloutProps = {
  text: string,
  className?: string
}

export default function Callout({ text, className="" }: CalloutProps) {
  return (
    <section className={`callout ${className}`}>
      <p>{text}</p>
    </section>
  )
}