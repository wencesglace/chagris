// encart un peu plus léger
import './callout.css';

type CalloutProps = {
  className?: string
}

export default function Callout({ className="" }: CalloutProps) {
  return (
    <section className={`callout ${className} bg-blue layout-half`}>
      <p className='body1-bold'>Désormais, les chats nés après le 1er janvier 2012 doivent être obligatoirement identifiés, par puce électronique ou par tatouage. </p>
       <p className='body1'> À défaut, leurs maîtres encourent jusqu’à 750 euros d’amende</p>
    </section>
  )
}