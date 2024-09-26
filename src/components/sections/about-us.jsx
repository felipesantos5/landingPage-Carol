import shadow from "../../assets/shadow-about-us.svg";
import { useState } from "react";

export const AboutUs = () => {
  const [isIframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section className="about-us" id="#about-us">
      <img src={shadow} alt="" className="about-us__shadow" />
      <div className="about-us__container">
        <div className="about-us__text" id="about-us">
          <h2 className="about-us__text-title">Sobre nós</h2>
          <p className="about-us__text-paragraph1">
            Impulsione o sucesso da sua empresa com nossos serviços especializados. Transforme desafios em oportunidades e faça seu negócio alcançar novos patamares com a nossa expertise. Com anos de
            experiência no mercado digital, nossa equipe oferece soluções personalizadas para alavancar a presença online do seu negócio. Desde a criação de conteúdo envolvente para redes sociais até
            a implementação de estratégias de tráfego pago que realmente convertem, estamos aqui para ajudá-lo a atingir seus objetivos.
          </p>
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
    </section>
  );
};
