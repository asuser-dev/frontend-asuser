import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../../axiosInstances/axiosInstances.js";
import "./Register.css";

const Register = () => {
  const [registerType, setRegisterType] = useState("user");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    identificationNumber: "",
    birthDate: "",
    email: "",
    phone: "",
    address: "",
    province: "",
    city: "",
    postalCode: "",
    nationality: "",
    password: "",
    confirmPassword: "",
  });

  const [companyData, setCompanyData] = useState({
    name: "",
    email: "",
    phone: "",
    fiscalAddress: "",
    province: "",
    city: "",
    postalCode: "",
    contactName: "",
    contactLastName: "",
    contactPhone: "",
    password: "",
    confirmPassword: "",
  });

  const handleGoogleRegister = async () => {
    try {
      setIsLoading(true);
      setError(null);
      console.log("Registrando con Google...");
      navigate("/dashboard");
    } catch (err) {
      setError("Error al registrarse con Google");
      console.error("Google register error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCompanyChange = (e) => {
    const { name, value } = e.target;
    setCompanyData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (data, isUser) => {
    if (!data.email || (isUser ? !userData.firstName : !companyData.name)) {
      return isUser
        ? "Email y nombre son requeridos"
        : "Email y nombre de empresa son requeridos";
    }

    if (!data.password || !data.confirmPassword) {
      return "Por favor completa ambos campos de contraseña";
    }

    if (data.password !== data.confirmPassword) {
      return "Las contraseñas no coinciden";
    }

    return null;
  };

  const handleUserRegister = async () => {
    const validationError = validateForm(userData, true);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const response = await authService.post("/register/user", {
        firstName: userData.firstName,
        lastName: userData.lastName,
        identificationNumber: userData.identificationNumber,
        birthDate: userData.birthDate,
        email: userData.email,
        phone: userData.phone,
        address: userData.address,
        province: userData.province,
        city: userData.city,
        postalCode: userData.postalCode,
        nationality: userData.nationality,
        password: userData.password,
      });

      localStorage.setItem("authToken", response.data.token);
      navigate("/");
    } catch (err) {
      handleRegisterError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCompanyRegister = async () => {
    const validationError = validateForm(companyData, false);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const response = await authService.post("/register/company", {
        name: companyData.name,
        email: companyData.email,
        phone: companyData.phone,
        fiscalAddress: companyData.fiscalAddress,
        province: companyData.province,
        city: companyData.city,
        postalCode: companyData.postalCode,
        contactName: companyData.contactName,
        contactLastName: companyData.contactLastName,
        contactPhone: companyData.contactPhone,
        password: companyData.password,
      });

      localStorage.setItem("authToken", response.data.token);
      navigate("/");
    } catch (err) {
      handleRegisterError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterError = (err) => {
    if (err.response) {
      switch (err.response.status) {
        case 400:
          setError(err.response.data.error || "El usuario/empresa ya existe");
          break;
        case 422:
          setError("Datos de registro inválidos");
          break;
        default:
          setError("Error al registrarse");
      }
    } else {
      setError("Error de conexión con el servidor");
    }
    console.error("Register error:", err);
  };

  return (
    <div className="register-container">
      <div className="register-box">
        {registerType == "user" ? (
          <img
            src="src/assets/futuristicperson.webp"
            alt="#"
            className="register-icon"
          />
        ) : (
          <img
            src="src/assets/futuristicenterprise.webp"
            alt="#"
            className="register-icon"
          />
        )}

        {error && <div className="error-message">{error}</div>}

        <div className="register-type-buttons">
          <button
            className={`type-button ${registerType === "user" ? "active" : ""}`}
            onClick={() => setRegisterType("user")}
            disabled={isLoading}
          >
            Registro Usuario
          </button>
          <button
            className={`type-button ${
              registerType === "company" ? "active" : ""
            }`}
            onClick={() => setRegisterType("company")}
            disabled={isLoading}
          >
            Registro Empresa
          </button>
        </div>

        {registerType === "user" ? (
          <div className="register-form">
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="Nombre"
                value={userData.firstName}
                onChange={handleUserChange}
                disabled={isLoading}
                className="form-input"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Apellido"
                value={userData.lastName}
                onChange={handleUserChange}
                disabled={isLoading}
                className="form-input"
              />
            </div>

            <input
              type="text"
              name="identificationNumber"
              placeholder="Número de identificación"
              value={userData.identificationNumber}
              onChange={handleUserChange}
              disabled={isLoading}
              className="form-input"
            />

            <input
              type="date"
              name="birthDate"
              placeholder="Fecha de nacimiento"
              value={userData.birthDate}
              onChange={handleUserChange}
              disabled={isLoading}
              className="form-input"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userData.email}
              onChange={handleUserChange}
              disabled={isLoading}
              className="form-input"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Teléfono"
              value={userData.phone}
              onChange={handleUserChange}
              disabled={isLoading}
              className="form-input"
            />

            <input
              type="text"
              name="address"
              placeholder="Dirección"
              value={userData.address}
              onChange={handleUserChange}
              disabled={isLoading}
              className="form-input"
            />

            <div className="form-row">
              <input
                type="text"
                name="province"
                placeholder="Provincia"
                value={userData.province}
                onChange={handleUserChange}
                disabled={isLoading}
                className="form-input"
              />
              <input
                type="text"
                name="city"
                placeholder="Ciudad"
                value={userData.city}
                onChange={handleUserChange}
                disabled={isLoading}
                className="form-input"
              />
            </div>

            <div className="form-row">
              <input
                type="text"
                name="postalCode"
                placeholder="Código Postal"
                value={userData.postalCode}
                onChange={handleUserChange}
                disabled={isLoading}
                className="form-input"
              />
              <input
                type="text"
                name="nationality"
                placeholder="Nacionalidad"
                value={userData.nationality}
                onChange={handleUserChange}
                disabled={isLoading}
                className="form-input"
              />
            </div>

            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={userData.password}
              onChange={handleUserChange}
              disabled={isLoading}
              className="form-input"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar Contraseña"
              value={userData.confirmPassword}
              onChange={handleUserChange}
              disabled={isLoading}
              className="form-input"
            />

            <div className="form-footer">
              <button
                className="register-button"
                onClick={handleUserRegister}
                disabled={isLoading}
              >
                {isLoading ? "Registrando..." : "Registrarse"}
              </button>
              <div className="footer-links">
                <a href="/login" className="login-link">
                  ¿Ya tienes cuenta? Inicia sesión
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="register-form">
            <input
              type="text"
              name="name"
              placeholder="Nombre de la empresa"
              value={companyData.name}
              onChange={handleCompanyChange}
              disabled={isLoading}
              className="form-input"
            />

            <input
              type="email"
              name="email"
              placeholder="Email de la empresa"
              value={companyData.email}
              onChange={handleCompanyChange}
              disabled={isLoading}
              className="form-input"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Teléfono de la empresa"
              value={companyData.phone}
              onChange={handleCompanyChange}
              disabled={isLoading}
              className="form-input"
            />

            <input
              type="text"
              name="fiscalAddress"
              placeholder="Dirección fiscal"
              value={companyData.fiscalAddress}
              onChange={handleCompanyChange}
              disabled={isLoading}
              className="form-input"
            />

            <div className="form-row">
              <input
                type="text"
                name="province"
                placeholder="Provincia"
                value={companyData.province}
                onChange={handleCompanyChange}
                disabled={isLoading}
                className="form-input"
              />
              <input
                type="text"
                name="city"
                placeholder="Ciudad"
                value={companyData.city}
                onChange={handleCompanyChange}
                disabled={isLoading}
                className="form-input"
              />
            </div>

            <input
              type="text"
              name="postalCode"
              placeholder="Código Postal"
              value={companyData.postalCode}
              onChange={handleCompanyChange}
              disabled={isLoading}
              className="form-input"
            />

            <div className="form-row">
              <input
                type="text"
                name="contactName"
                placeholder="Nombre del contacto"
                value={companyData.contactName}
                onChange={handleCompanyChange}
                disabled={isLoading}
                className="form-input"
              />
              <input
                type="text"
                name="contactLastName"
                placeholder="Apellido del contacto"
                value={companyData.contactLastName}
                onChange={handleCompanyChange}
                disabled={isLoading}
                className="form-input"
              />
            </div>

            <input
              type="tel"
              name="contactPhone"
              placeholder="Teléfono del contacto"
              value={companyData.contactPhone}
              onChange={handleCompanyChange}
              disabled={isLoading}
              className="form-input"
            />

            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={companyData.password}
              onChange={handleCompanyChange}
              disabled={isLoading}
              className="form-input"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar Contraseña"
              value={companyData.confirmPassword}
              onChange={handleCompanyChange}
              disabled={isLoading}
              className="form-input"
            />

            <div className="form-footer">
              <button
                className="register-button"
                onClick={handleCompanyRegister}
                disabled={isLoading}
              >
                {isLoading ? "Registrando..." : "Registrar Empresa"}
              </button>
              <div className="footer-links">
                <a href="/login" className="login-link">
                  ¿Ya tienes cuenta? Inicia sesión
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
