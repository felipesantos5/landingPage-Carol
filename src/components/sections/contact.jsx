import { Form } from "../form-initial/form";
import AnimatedSection from "../animated-section/animatedSection";

export const Contact = () => {
  return (
    <AnimatedSection className="contact">
      <h2 className="contact__title">Entre em contato</h2>
      <Form />
    </AnimatedSection>
  );
};
