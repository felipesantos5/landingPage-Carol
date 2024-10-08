import { Form } from "../form-initial/form";

export const Initial = () => {
  return (
    <section className="initial">
      <div className="initial-cointar-text">
        <p className="initial__span">Esqueça o modelo Agência... Conheça o</p>
        <h1 className="initial__title">Grupo Carol Quintana</h1>
        <p className="initial__paragraph">Estratégia alinhada, fluxo de vendas e qualificação de atendimento.</p>
        <button className="initial__button">
          Contate-nos{" "}
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="1" width="19" height="19" rx="9.5" stroke="black" />
            <path
              d="M13.5211 13.2727L13.298 7.60815C13.2915 7.50261 13.2643 7.39775 13.2179 7.29958C13.129 7.10182 12.9682 6.94104 12.7705 6.85212C12.6723 6.80574 12.5675 6.77855 12.4619 6.77209L6.79738 6.54892C6.69175 6.54476 6.58797 6.56145 6.49198 6.59803C6.39598 6.6346 6.30964 6.69036 6.23789 6.76211C6.09299 6.90701 6.0163 7.10827 6.02471 7.3216C6.03311 7.53493 6.12592 7.74286 6.28271 7.89965C6.4395 8.05644 6.64743 8.14925 6.86076 8.15765L10.5935 8.29906L5.91933 12.9732C5.77502 13.1175 5.69864 13.3179 5.70701 13.5304C5.71539 13.7429 5.80781 13.9499 5.96396 14.1061C6.12012 14.2623 6.3272 14.3547 6.53966 14.363C6.75212 14.3714 6.95256 14.295 7.09687 14.1507L11.771 9.4766L11.9124 13.2093C11.9161 13.315 11.9408 13.4206 11.9849 13.52C12.029 13.6194 12.0918 13.7106 12.1695 13.7883C12.2472 13.866 12.3384 13.9287 12.4378 13.9729C12.5371 14.017 12.6427 14.0416 12.7485 14.0454C12.8542 14.05 12.9582 14.0336 13.0544 13.9972C13.1506 13.9607 13.2371 13.905 13.309 13.8332C13.3808 13.7613 13.4365 13.6748 13.4729 13.5786C13.5094 13.4824 13.5257 13.3785 13.5211 13.2727Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <div className="initial__form">
        <Form />
      </div>
    </section>
  );
};
