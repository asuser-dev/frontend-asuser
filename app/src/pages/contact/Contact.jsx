import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage(
        "¡Gracias por contactarnos! Responderemos a la brevedad."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2 className="contact-title">Contáctenos</h2>
        <p className="contact-subtitle">Estamos aquí para ayudarte</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-section">
              <h3 className="info-title">
                <i className="fas fa-map-marker-alt"></i> Dirección
              </h3>
              <p>Av. Rio Ceballos 742, Córdoba</p>
            </div>

            <div className="info-section">
              <h3 className="info-title">
                <i className="fas fa-phone"></i> Teléfonos
              </h3>
              <p>+54 11 1234-5678</p>
              <p>+54 11 9876-5432</p>
            </div>

            <div className="info-section">
              <h3 className="info-title">
                <i className="fas fa-envelope"></i> Email
              </h3>
              <p>asuser@asuser.com</p>
              <p>asuser@asuser.com</p>
            </div>

            <div className="info-section">
              <h3 className="info-title">
                <i className="fas fa-clock"></i> Horarios
              </h3>
              <p>Atención telefónica: Lunes a Viernes: 9:00 - 18:00</p>
              <p>Atención por email: Todos los días 24hs</p>
            </div>
          </div>

          <div className="contact-form-container">
            {submitMessage ? (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <p>{submitMessage}</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-row">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Asunto"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Tu mensaje..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  rows="5"
                ></textarea>

                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Enviando...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i> Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
