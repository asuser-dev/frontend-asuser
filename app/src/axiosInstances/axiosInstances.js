import axios from "axios";

export const generalApi = axios.create({
  baseURL:
    window.location.hostname === "localhost"
      ? "http://localhost:8000/v1/"
      : "https://backend-asuser-production.up.railway.app/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

generalApi.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    if (error.response) {
      const { status, data } = error.response;

      console.error("Error de respuesta:", status, data);

      if (
        status === 403 &&
        data?.details &&
        data.details.toLowerCase().includes("token expired")
      ) {
        try {
          if (!error.config._retry) {
            error.config._retry = true;

            const { token } = await generalApi.post("session/refresh-token");
            localStorage.setItem("token", token);
            console.log("Nuevo token guardado en localStorage");

            error.config.headers["Authorization"] = `Bearer ${token}`;

            return generalApi(error.config);
          }
        } catch (refreshError) {
          console.error("Error al refrescar token", refreshError);
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject({
        status,
        message: data.message || data.details || "Error de autenticación",
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
      return await generalApi.post("/auth/login", credentials);
    } catch (error) {
      throw error;
    }
  },

  async register(userData) {
    try {
      return await generalApi.post("/auth/register", userData);
    } catch (error) {
      throw error;
    }
  },
};

export default authService;
