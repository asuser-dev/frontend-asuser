import { useState } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    complete_name: "",
    email: "",
    phone: "",
    subject: "",
    content: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.complete_name ||
      !formData.email ||
      !formData.subject ||
      !formData.content
    ) {
      setError("Por favor complete todos los campos obligatorios");
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/v1/contact/createContactRequest",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setSubmitMessage(
          "¡Gracias por contactarnos! Responderemos a la brevedad."
        );
        setFormData({
          complete_name: "",
          email: "",
          phone: "",
          subject: "",
          content: "",
        });
      }
    } catch (err) {
      console.error("Error al enviar el formulario:", err);
      const errorMessage =
        err.response?.data?.errorMessage ||
        "Hubo un error al enviar el mensaje. Por favor intente nuevamente más tarde.";
      setSubmitMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2 className="contact-title">Contactános</h2>
        <p className="contact-subtitle">Estamos aquí para ayudarte</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-section">
              <h3 className="info-title">
                <i className="fas fa-map-marker-alt"></i> Ubicación
              </h3>
              <p>Rio Ceballos, Córdoba</p>
            </div>

            <div className="info-section">
              <h3 className="info-title">
                <i className="fas fa-envelope"></i> Email
              </h3>
              <p>asusercompany@gmail.com</p>
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
                {error && <div className="error-message">{error}</div>}

                <div className="form-row">
                  <input
                    type="text"
                    name="complete_name"
                    placeholder="Nombre completo *"
                    value={formData.complete_name}
                    onChange={handleChange}
                    className="form-input"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-row">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono (opcional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Asunto *"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <textarea
                  name="content"
                  placeholder="Tu mensaje... *"
                  value={formData.content}
                  onChange={handleChange}
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
