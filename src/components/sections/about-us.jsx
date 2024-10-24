import shadow from "../../assets/shadow-about-us.svg";
import { useState } from "react";
import AnimatedSection from "../animated-section/animatedSection";

export const AboutUs = () => {
  const [isIframeLoaded, setIframeLoaded] = useState(false);

  return (
    <AnimatedSection className="about-us" id="#about-us">
      <img src={shadow} alt="" className="about-us__shadow" />
      <div className="about-us__container">
        <div className="about-us__text" id="about-us">
          {/* <h2 className="about-us__text-title">Sobre nós</h2>
          <p className="about-us__text-paragraph1">
            Impulsione o sucesso da sua empresa com nossos serviços especializados. Transforme desafios em oportunidades e faça seu negócio alcançar novos patamares com a nossa expertise. Com anos de
            experiência no mercado digital, nossa equipe oferece soluções personalizadas para alavancar a presença online do seu negócio. Desde a criação de conteúdo envolvente para redes sociais até
            a implementação de estratégias de tráfego pago que realmente convertem, estamos aqui para ajudá-lo a atingir seus objetivos.
          </p> */}
          <div className="about-us__data-wrapper">
            <h2 className="about-us-title-data">Apoiamos negócios brilhantes</h2>
            <h3 className="about-us-subtitle-data">na transformação de mercados</h3>

            <section className="about-us__data">
              <div>
                <div className="about-us__data-container">
                  <img src="https://cdn.prod.website-files.com/61a3ca260fa4a5c7f6d7bf30/64e3d63af3da8bedaf0aa32f_clientes-atendidos.svg" alt="" />
                  <p className="about-us__data-container-title">+100</p>
                </div>
                <p className="about-us__data-description">clientes atentidos</p>
              </div>

              <div className="about-us__data-line"></div>

              <div>
                <div className="about-us__data-container">
                  <img src="https://cdn.prod.website-files.com/61a3ca260fa4a5c7f6d7bf30/64e3d63a8e1525ab709443a1_milhoes-investidos.svg" alt="" />
                  <p className="about-us__data-container-title">+120</p>
                </div>
                <p className="about-us__data-description">milhões investidos</p>
              </div>

              <div className="about-us__data-line"></div>

              <div>
                <div className="about-us__data-container">
                  <img src="https://cdn.prod.website-files.com/61a3ca260fa4a5c7f6d7bf30/64e3d63a20a5c9940b7cef27_geracao-receita.svg" alt="" />
                  <p className="about-us__data-container-title">+1bi</p>
                </div>
                <p className="about-us__data-description">gerado de receita</p>
              </div>
            </section>
          </div>

          <div className="about-us__services" id="services">
            <h2 className="about-us__services-title">Serviços Oferecidos</h2>
            <p className="about-us__services-description">
              Impulsione o sucesso da sua empresa com nossos serviços especializados. Transforme desafios em oportunidades e faça seu negócio alcançar novos patamares com a nossa expertise!
            </p>
          </div>
        </div>
        <div className="video-container">
          {!isIframeLoaded && <img src="https://img.youtube.com/vi/QAUzWtLMnU0/maxresdefault.jpg" alt="YouTube Thumbnail" className="video-thumbnail" onClick={() => setIframeLoaded(true)} />}
          {isIframeLoaded && (
            <iframe
              src="https://www.youtube.com/embed/QAUzWtLMnU0?autoplay=1"
              title="Video youtube"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};
