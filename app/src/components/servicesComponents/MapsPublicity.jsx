import { generalApi } from "../../axiosInstances/axiosInstances.js";
import { useState } from "react";

const PublicityScriptForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    serviceDescription: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");

      const response = await generalApi.post(
        "/publicity/googlePublicity",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(JSON.stringify(response.data, null, 2));
    } catch (err) {
      setError(err.response?.data?.message || "Error al enviar el formulario");
      alert("Error: " + (err.response?.data?.message || err.message));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-main-container">
      <div className="form-box">
        <h2>Script Publicidad</h2>

        {error && <div className="form-error">{error}</div>}

        <form onSubmit={handleSubmit} className="form-content">
          <div className="form-row">
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="form-input"
              placeholder="Nombre de tu empresa"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-row">
            <textarea
              name="serviceDescription"
              value={formData.serviceDescription}
              onChange={handleChange}
              className="form-input form-textarea"
              placeholder="Descripción del servicio que ofreces"
              rows="4"
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-footer">
            <button type="submit" className="form-button" disabled={isLoading}>
              {isLoading ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PublicityScriptForm;
