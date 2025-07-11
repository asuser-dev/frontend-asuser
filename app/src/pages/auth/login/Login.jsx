import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../../axiosInstances/axiosInstances.js";
import { useAuth } from "../../../authContext/authContext.jsx";
import "./Login.css";

const Login = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleEmailLogin = async () => {
    if (!email || !password) {
      setError("Por favor ingresa email y contraseña");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const userData = await authService.login({ email, password });

      console.log(userData);

      login(userData.token, userData.dataContext);

      navigate("/");
    } catch (err) {
      let errorMessage = "Error al iniciar sesión";

      if (err.response) {
        // Errores de la API (Axios)
        switch (err.response.status) {
          case 400:
            errorMessage = "Datos inválidos";
            break;
          case 401:
            errorMessage = "Email o contraseña incorrectos";
            break;
          case 404:
            errorMessage = "Usuario no encontrado";
            break;
          case 500:
            errorMessage = "Error del servidor. Intenta más tarde";
            break;
          default:
            errorMessage = "Error desconocido";
        }
      } else if (err.message) {
        errorMessage = err.message;
      } else {
        errorMessage = "No se pudo conectar al servidor";
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // El resto del componente permanece igual
  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src="https://res.cloudinary.com/dyqtgetv1/image/upload/v1752208817/login_ldeahh.webp"
          alt="#"
          className="login-icon"
        />

        {error && <div className="error-message">{error}</div>}

        <button
          className="email-button"
          onClick={() => setShowEmailForm(!showEmailForm)}
          disabled={isLoading}
        >
          {showEmailForm ? "Ocultar formulario" : "Ingresar con Email"}
        </button>

        {showEmailForm && (
          <div className="email-form">
            <input
              type="email"
              placeholder="Email"
              className="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
            <div className="form-footer">
              <button
                className="login-button"
                onClick={handleEmailLogin}
                disabled={isLoading}
              >
                {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
              </button>
              <div className="footer-links">
                <a href="#" className="forgot-password-link">
                  Olvidé mi contraseña
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
