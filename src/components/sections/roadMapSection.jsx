import { RoadMapCard } from "../road-map/roadMapCard";

export const RoadMapSection = () => {
  return (
    <section className="roadmapsection">
      <div className="roadmapwrapper roadmapwrapper-first">
        <RoadMapCard number={"01"} title="Consulta Inicial" descrition="Entendemos suas metas e desafios para criar uma estratégia personalizada." />

        <hr className="roadmapwrapper__line" />

        <RoadMapCard number={"02"} title="Planejamento" descrition="Desenvolvemos um plano detalhado com táticas específicas para cada canal." />

        <hr className="roadmapwrapper__line" />

        <RoadMapCard number={"03"} title="Execução" descrition=" Implementamos as estratégias utilizando as melhores práticas do mercado." />
      </div>

      <div className="roadmapwrapper">
        <RoadMapCard number={"04"} title="Otimização" descrition="Monitoramos e ajustamos continuamente para garantir os melhores resultados." />

        <hr className="roadmapwrapper__line" />

        <RoadMapCard
          number={"05"}
          title="Cadência de Comunicação"
          descrition="Você terá suporte conosco via WhatsApp e reuniões periódicas para acompanhar as estratégias e resultados que estamos aplicando "
        />
      </div>
    </section>
  );
};
