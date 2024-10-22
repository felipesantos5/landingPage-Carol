import { RoadMap } from "../road-map/roadMap";
import spotlightleft from "../../assets/jorney/spotlight-left-jorney.svg";
import spotlightright from "../../assets/jorney/spotlight-right-jorney.svg";

import AnimatedSection from "../animated-section/animatedSection";

export const WhoWorks = () => {
  return (
    <section className="jorney">
      <AnimatedSection>
        <div className="jorney__container" id="process">
          <h2 className="jorney__title">Como Funciona sua Jornada Conosco?</h2>
          <p className="jorney__description">Nosso método é simples e eficaz, agregando Tempo e diminuindo seu Estresse. Focamos em entender suas necessidades e agregar soluções sob medida.</p>

          <RoadMap />
        </div>

        <img src={spotlightleft} alt="feixe de luz esquerda" className="jorney__spotlight-left" />

        <img src={spotlightright} alt="feixe de luz direita" className="jorney__spotlight-right" />
      </AnimatedSection>
    </section>
  );
};
