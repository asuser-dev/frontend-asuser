import { useState } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
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
      !formData.name ||
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
        "https://backend-asuser-production.up.railway.app/v1/contact/createContactRequest",
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
          name: "",
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
    <div className="contact-container-2">
      <div className="contact-box-2">
        <h2 className="contact-title-2">Contactános</h2>
        <p className="contact-subtitle-2">Estamos aquí para ayudarte</p>

        <div className="contact-content-2">
          <div className="contact-info-2">
            <div className="info-section-2">
              <h3 className="info-title-2">
                <i className="fas fa-map-marker-alt"></i> Ubicación
              </h3>
              <p>Rio Ceballos, Córdoba</p>
            </div>

            <div className="info-section-2">
              <h3 className="info-title-2">
                <i className="fas fa-envelope"></i> Email
              </h3>
              <p>asusercompany@gmail.com</p>
            </div>

            <div className="info-section-2">
              <h3 className="info-title-2">
                <i className="fas fa-clock"></i> Horarios
              </h3>
              <p>Atención telefónica: Lunes a Viernes: 9:00 - 18:00</p>
              <p>Atención por email: Todos los días 24hs</p>
            </div>
          </div>

          <div className="contact-form-container-2">
            {submitMessage ? (
              <div className="success-message-2">
                <i className="fas fa-check-circle"></i>
                <p>{submitMessage}</p>
              </div>
            ) : (
              <form className="contact-form-2" onSubmit={handleSubmit}>
                {error && <div className="error-message-2">{error}</div>}

                <div className="form-row-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre completo *"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input-2"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input-2"
                  />
                </div>

                <div className="form-row-2">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono (opcional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input-2"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Asunto *"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input-2"
                  />
                </div>

                <textarea
                  name="content"
                  placeholder="Tu mensaje... *"
                  value={formData.content}
                  onChange={handleChange}
                  className="form-textarea-2"
                  rows="5"
                ></textarea>

                <button
                  type="submit"
                  className="submit-button-2"
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
