import { Card } from "./card"
import social from "../../assets/card/social.svg"
import landing from "../../assets/card/landing.svg"
import web from "../../assets/card/web.svg"
import trafego from "../../assets/card/trafego.svg"
import acessoria from "../../assets/card/assessoria.svg"
import prospeccao from "../../assets/card/prospeccao.svg"

export const Cards = () => {
  return (
    <div className="section-cards">
      <Card title={"Social Media"} description={"Desenvolvimento estratégico e gestão completa de conteúdo para Instagram e Facebook. Impulsione o engajamento e alcance do seu público com posts criativos, planejados e alinhados com a identidade da sua marca."} image={social} />

      <Card title={"Landing Page"} description={"Desenvolvemos landing pages de alta conversão, projetadas para captar leads e transformar visitantes em clientes. Cada detalhe é pensado para entregar resultados."} image={landing} />

      <Card title={"WebSite"} description={"Sites modernos, responsivos e otimizados para SEO. Garantimos que sua presença online seja profissional e atraente, proporcionando a melhor experiência ao usuário."} image={web} />

      <Card title={"Tráfego Pago"} description={"Sites modernos, responsivos e otimizados para SEO. Garantimos que sua presença online seja profissional e atraente, proporcionando a melhor experiência ao usuário."} image={trafego} />

      <Card title={"Assessoria Comercial"} description={"Tenha seu setor comercial reorganizado por um especialista de nossa empresa no Setor Comercial. Sua Empresa merece."} image={acessoria} />

      <Card title={"Prospecção Fria"} description={"Não tem a pessoa ideal para gerar vendas? Nossa empresa tem uma equipe especializada em SDR para conversão de leads e prospecção de clientes inativos."} image={prospeccao} />

    </div>
  )
}