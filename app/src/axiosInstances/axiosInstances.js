import axios from "axios";

export const authApi = axios.create({
  baseURL: "https://backend-asuser-production.up.railway.app/v1/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para manejar errores globalmente
authApi.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango 2xx
      console.error(
        "Error de respuesta:",
        error.response.status,
        error.response.data
      );
      return Promise.reject({
        status: error.response.status,
        message: error.response.data.message || "Error de autenticación",
      });
    } else if (error.request) {
      // La petición fue hecha pero no se recibió respuesta
      console.error("Error de conexión:", error.request);
      return Promise.reject({
        status: 503,
        message: "Servicio de autenticación no disponible",
      });
    } else {
      // Algo pasó al configurar la petición
      console.error("Error:", error.message);
      return Promise.reject({
        status: 500,
        message: "Error al configurar la petición de autenticación",
      });
    }
  }
);

// Funciones para los endpoints de autenticación
export const authService = {
  /**
   * Login con credenciales
   * @param {Object} credentials - {email, password}
   * @returns {Promise<Object>} - Datos del usuario y token
   */
  async login(credentials) {
    try {
      return await authApi.post("/login", credentials);
    } catch (error) {
      throw error;
    }
  },

  /**
   * Registro de nuevo usuario
   * @param {Object} userData - Datos del usuario
   * @returns {Promise<Object>} - Datos del usuario creado
   */
  async register(userData) {
    try {
      return await authApi.post("/register", userData);
    } catch (error) {
      throw error;
    }
  },

  /**
   * Verificar token
   * @param {string} token - Token JWT
   * @returns {Promise<Object>} - Datos del usuario verificado
   */
  async verifyToken(token) {
    try {
      return await authApi.get("/verify", {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      throw error;
    }
  },

  /**
   * Actualizar perfil de usuario
   * @param {string} userId - ID del usuario
   * @param {Object} updates - Campos a actualizar
   * @param {string} token - Token JWT
   * @returns {Promise<Object>} - Datos actualizados del usuario
   */
  async updateProfile(userId, updates, token) {
    try {
      return await authApi.put(`/users/${userId}`, updates, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      throw error;
    }
  },
};

export default authService;
