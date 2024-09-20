import { CardWhat } from "../what-they-say/card";
import profileImg from "../../assets/what-they-say/profile-img.svg";

import aspasBackground from "../../assets/what-they-say/aspas-background.svg";
import splotLight from "../../assets/what-they-say/spot-light.svg";

export const WhatTheySay = () => {
  return (
    <section className="whattheysay" id="clients">
      <div className="whattheysay__container">
        <h2 className="whattheysay__title">O que dizem sobre nós?</h2>
        <p className="whattheysay__description">Confira alguns dos feedback de nossos clientes:</p>
        <div className="whattheysay__card-wrapper">
          <CardWhat
            profileImg={profileImg}
            name={"Nome do Cliente"}
            profession={"Contratante"}
            description={
              "Antes de trabalharmos com a Equipe da Carol, nossa presença online era quase inexistente. Estávamos perdendo clientes para a concorrência. Em apenas três meses, vimos um aumento de 25% no tráfego do nosso site e nossos leads qualificados dobraram. A expertise e a abordagem estratégica da equipe foram cruciais para o nosso crescimento."
            }
          />

          <CardWhat
            profileImg={profileImg}
            name={"Nome do Cliente"}
            profession={"Contratante"}
            description={
              "Estávamos cansados de investir em marketing sem ver retorno. A Carol nos ajudou a identificar e otimizar nossos canais de marketing, gerando vendas de verdade. Eles realmente entendem como transformar estratégias em resultados reais."
            }
          />

          <CardWhat
            profileImg={profileImg}
            name={"Nome do Cliente"}
            profession={"Contratante"}
            description={
              "No meu setor de academia, a concorrência veio feroz em toda região e as vendas decaíram absurdamente. Tenho só a agradecer a toda a Equipe da Carol, que não só nos ajudou a destacar nossa marca, mas também nos tornar competitivos novamente em relação aos principais concorrentes. Hoje, somos líderes no mercado graças à parceria com essa incrível equipe."
            }
          />

          <CardWhat
            profileImg={profileImg}
            name={"Nome do Cliente"}
            profession={"Contratante"}
            description={
              "O que mais nos impressionou no atendimento da Carol, do Erick e de todos os meninos da equipe foi a abordagem personalizada. Eles realmente se aprofundaram em entender nossas necessidades e desafios específicos. As soluções propostas foram certeiras e altamente eficazes, adaptadas exatamente ao que precisávamos"
            }
          />

          <CardWhat
            profileImg={profileImg}
            name={"Nome do Cliente"}
            profession={"Contratante"}
            description={
              "O atendimento do Marcos, Natanael e Ana foi excepcional. Eles estão sempre disponíveis para tirar dúvidas, oferecer suporte e ajustar as estratégias conforme necessário. Essa proximidade e cuidado com o cliente realmente fazem a diferença."
            }
          />

          <CardWhat
            profileImg={profileImg}
            name={"Nome do Cliente"}
            profession={"Contratante"}
            description={
              "Estávamos gastando muito com campanhas e agências antepassadas. Quando a Carol chegou e nos ajudou a otimizar nosso orçamento, concentrando os esforços onde realmente importava. Conseguimos economizar 30% do nosso orçamento de marketing enquanto aumentamos nossas conversões."
            }
          />

          <CardWhat
            profileImg={profileImg}
            name={"Nome do Cliente"}
            profession={"Contratante"}
            description={
              "A diversidade de canais e a expertise da Carol e do Erick foram fundamentais para nosso sucesso. Eles gerenciaram tudo, desde SEO até campanhas de mídia paga, com uma coordenação impecável. Nosso crescimento foi impressionante e constante. Eu nunca imaginei encontrar em uma única empresa a atração de clientes, qualificação e retenção"
            }
          />
        </div>
        <img src={aspasBackground} alt="" className="whattheysay__img-background" />
        <img src={splotLight} alt="" className="whattheysay__spot-light" />
      </div>
    </section>
  );
};
