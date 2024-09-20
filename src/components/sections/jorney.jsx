import { RoadMap } from "../road-map/roadMap";

export const WhoWorks = () => {
  return (
    <section className="jorney" id="process">
      <div className="jorney__container">
        <h2 className="jorney__title">Como Funciona sua Jornada Conosco?</h2>
        <p className="jorney__description">Nosso método é simples e eficaz, agregando Tempo e diminuindo seu Estresse. Focamos em entender suas necessidades e agregar soluções sob medida.</p>

        <RoadMap />
      </div>
    </section>
  );
};
