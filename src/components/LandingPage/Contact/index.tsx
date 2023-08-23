import ContactForm from './ContactForm';
import './styles.css';

const Contact = () => {
  return (
    <section className="contact-container-background">
      <div className="mx-auto max-w-screen-3xl lg:px-15 lg:pt-36">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
