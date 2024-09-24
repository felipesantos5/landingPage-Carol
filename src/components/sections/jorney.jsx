import { RoadMap } from "../road-map/roadMap";
import spotlightleft from "../../assets/spotlight-jorney.png";
import spotlightright from "../../assets/spot-light-right-whatabout.png";

export const WhoWorks = () => {
  return (
    <section className="jorney" id="process">
      <div className="jorney__container">
        <h2 className="jorney__title">Como Funciona sua Jornada Conosco?</h2>
        <p className="jorney__description">Nosso método é simples e eficaz, agregando Tempo e diminuindo seu Estresse. Focamos em entender suas necessidades e agregar soluções sob medida.</p>

        <RoadMap />
      </div>

      <img src={spotlightleft} alt="feixe de luz esquerda" className="jorney__spotlight-left" />

      <img src={spotlightright} alt="feixe de luz direita" className="jorney__spotlight-right" />
    </section>
  );
};
