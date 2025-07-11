import axios from "axios";

export const authApi = axios.create({
  baseURL:
    window.location.hostname === "localhost"
      ? "http://localhost:8000/v1/auth"
      : "https://backend-asuser-production.up.railway.app/v1/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

authApi.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
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
      console.error("Error de conexión:", error.request);
      return Promise.reject({
        status: 503,
        message: "Servicio de autenticación no disponible",
      });
    } else {
      console.error("Error:", error.message);
      return Promise.reject({
        status: 500,
        message: "Error al configurar la petición de autenticación",
      });
    }
  }
);
export const authService = {
  async login(credentials) {
    try {
      return await authApi.post("/login", credentials);
    } catch (error) {
      throw error;
    }
  },

  async register(userData) {
    try {
      return await authApi.post("/register", userData);
    } catch (error) {
      throw error;
    }
  },

  async verifyToken(token) {
    try {
      return await authApi.get("/verify", {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      throw error;
    }
  },

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
