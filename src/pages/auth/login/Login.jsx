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

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      setError(null);

      console.log("Iniciando sesión con Google...");
      navigate("/");
    } catch (err) {
      setError("Error al iniciar sesión con Google");
      console.error("Google login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

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
      if (err.response) {
        switch (err.response.status) {
          case 401:
            setError("Credenciales incorrectas");
            break;
          case 404:
            setError("Usuario no encontrado");
            break;
          default:
            setError("Error al iniciar sesión");
        }
      } else {
        setError("Error de conexión con el servidor");
      }
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // El resto del componente permanece igual
  return (
    <div className="login-container">
      <div className="login-box">
        <img src="src/assets/login.webp" alt="#" className="login-icon" />

        {error && <div className="error-message">{error}</div>}

        <button
          className="google-button"
          onClick={handleGoogleLogin}
          disabled={isLoading}
        >
          {isLoading ? "Cargando..." : "Ingresar con Google"}
        </button>

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
