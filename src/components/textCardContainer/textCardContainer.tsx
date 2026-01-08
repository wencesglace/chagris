// encart un peu plus léger
import Button from '../button/Button';
import TextCard from '../textCard/TextCard';
import './textCardContainer.css';
import { textCardsList } from "../../data/textCardsList.mock";

type textCardsProps = {
  className?: string
}

export default function textCards({className=""}: textCardsProps) {
  return (
   <section className={`${className} text-cards-container bg-white layout-full`}>
        <div className="heading layout-half">
          <h1 className="h1">Nos actions au quotidien</h1>
          <p className="body1">
            Chagris veille sur les chats libres de Grenoble et de l’Isère depuis
            plus de 20 ans en leur offrant des soins, un logis et une famille.
          </p>
        </div>
        <section className="text-cards-section layout-narrow no-padding">
          {textCardsList.map((card, i) => (
            <TextCard key={i} {...card} />
          ))}
        </section>
        <section className="support-us-container layout-wide">
          <div className="support-us-content bg-green">
            <div className="support-us-heading">
              <div className="support-us-title-container">
                <p className="subtitle1">Vous avez envie de</p>
                <h1 className="h1">Nous soutenir ?</h1>
              </div>
              <p className="body1">
                Pour nous aider à prendre en charge le sauvetage des animaux,
                l’alimentation, les soins vétérinaires vous avez différentes
                options de soutien.
              </p>
            </div>
            <div className="support-us-details">
              <div className="col">
                <h3 className="h3">Donnez de votre temps</h3>
                <p className="body1">
                  En nourrissant nos animaux, en collectant des provisions, en
                  aidant à la construction d'abris, ou en devenant famille
                  d'accueil, il y a de nombreuses façons de vous impliquer selon
                  votre disponibilité et vos ressources.
                </p>
              </div>
              <div className="col">
                <h3 className="h3">Aidez-nous financièrement</h3>
                <p className="body1">
                  En nourrissant nos animaux, en collectant des provisions, en
                  aidant à la construction d'abris, ou en devenant famille
                  d'accueil, il y a de nombreuses façons de vous impliquer selon
                  votre disponibilité et vos ressources.
                </p>
              </div>
              <div className="col">
                <h3 className="h3">Faites un don de matériel</h3>
                <p className="body1">
                  En nourrissant nos animaux, en collectant des provisions, en
                  aidant à la construction d'abris, ou en devenant famille
                  d'accueil, il y a de nombreuses façons de vous impliquer selon
                  votre disponibilité et vos ressources.
                </p>
              </div>
            </div>
            <Button href="" className="btn-pink subtitle1 emphasis">
              Contacter l'association
            </Button>
          </div>
        </section>
      </section>
  )
}