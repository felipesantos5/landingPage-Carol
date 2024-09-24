import { Slider } from "../../components/slider-footer/slider";

import logo from "../../assets/header/logo.svg";
import instagram from "../../assets/header/instagram.svg";
import whatsapp from "../../assets/header/whats.svg";
import linkedin from "../../assets/header/linkedin.svg";

export const Footer = () => {
  return (
    <div className="footer-padding">
      <Slider />
      <footer className="footer">
        <footer className="footer__wrapper">
          <img src={logo} alt="logo Carol Quintano" className="footer__logo" />

          <p className="footer__number">(48) 99944-3959</p>
          <p className="footer__email">agenciacarolquintana@gmail.com</p>
          <p className="footer__cep">Florianópolis - Santa Catarina</p>

          <ul className="footer__option-wrapper">
            <li className="footer__item">Social Media</li>
            <li className="footer__item">Landing Page</li>
            <li className="footer__item">WebSite</li>
            <li className="footer__item">Tráfego Pago</li>
            <li className="footer__item">Assessoria Comercial</li>
            <li className="footer__item">Prospecção Fria</li>
          </ul>

          <div className="footer__midia-wrapper">
            <a href="">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="">
              <img src={whatsapp} alt="whatsapp" />
            </a>
            <a href="">
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>

          <p className="footer__credits">Carol Quintana - 2024 - Todos os direitos reservados.</p>
        </footer>
      </footer>
    </div>
  );
};
