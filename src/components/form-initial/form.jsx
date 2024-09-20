import React, { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    nome: "",
    instagram: "",
    faturamento: "",
    email: "",
    funcionarios: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.nome) errors.nome = "Nome é obrigatório.";
    if (!formData.instagram) errors.instagram = "Instagram é obrigatório.";
    if (!formData.faturamento) errors.faturamento = "Faturamento é obrigatório.";
    if (!formData.email) {
      errors.email = "Email é obrigatório.";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Email inválido.";
    }
    if (!formData.funcionarios) errors.funcionarios = "Quantidade de funcionários é obrigatória.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const allFieldsFilled = Object.values(formData).every((field) => field);

  return (
    <form action="" className="form">
      <div className="form__container">
        <label htmlFor="nome" className="form__label">
          Nome
        </label>
        <input type="text" name="nome" className={`form__input ${formErrors.nome ? "form__input--error" : ""}`} placeholder="Digite seu nome aqui" value={formData.nome} onChange={handleInputChange} />
        {formErrors.nome && <span className="form__error">{formErrors.nome}</span>}
      </div>

      <div className="form__container">
        <label htmlFor="instagram" className="form__label">
          Instagram
        </label>
        <input
          type="text"
          name="instagram"
          className={`form__input ${formErrors.instagram ? "form__input--error" : ""}`}
          placeholder="Qual seu @?"
          value={formData.instagram}
          onChange={handleInputChange}
        />
        {formErrors.instagram && <span className="form__error">{formErrors.instagram}</span>}
      </div>

      <div className="form__container">
        <label htmlFor="faturamento" className="form__label">
          Faturamento
        </label>
        <input
          type="text"
          name="faturamento"
          className={`form__input ${formErrors.faturamento ? "form__input--error" : ""}`}
          placeholder="ex: R$ 30,000,00"
          value={formData.faturamento}
          onChange={handleInputChange}
        />
        {formErrors.faturamento && <span className="form__error">{formErrors.faturamento}</span>}
      </div>

      <div className="form__container">
        <label htmlFor="email" className="form__label">
          Email
        </label>
        <input
          type="email"
          name="email"
          className={`form__input ${formErrors.email ? "form__input--error" : ""}`}
          placeholder="Digite seu E-mail aqui"
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && <span className="form__error">{formErrors.email}</span>}
      </div>

      <div className="form__container">
        <label htmlFor="funcionarios" className="form__label">
          Quantidade de funcionários
        </label>
        <input
          type="text"
          name="funcionarios"
          className={`form__input ${formErrors.funcionarios ? "form__input--error" : ""}`}
          placeholder="Número de funcionários aqui"
          value={formData.funcionarios}
          onChange={handleInputChange}
        />
        {formErrors.funcionarios && <span className="form__error">{formErrors.funcionarios}</span>}
      </div>

      {allFieldsFilled && (
        <button
          type="submit"
          className="form__submit"
          onClick={(e) => {
            e.preventDefault();
            if (validateForm()) {
              alert("Formulário enviado com sucesso!");
            }
          }}
        >
          Enviar
        </button>
      )}
    </form>
  );
};
