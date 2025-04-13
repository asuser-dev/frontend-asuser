import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../src/authContext/authContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AppRouter from "./router/AppRouter.jsx";
import "./index.css";

const CLIENT_ID_GOOGLE = import.meta.env.VITE_GOOGLE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID_GOOGLE}>
      <BrowserRouter>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
=======
import AppRouter from "./router/AppRouter.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./authContext/authContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
>>>>>>> 4b6bf31 (last changes to push frontend)
  </React.StrictMode>
);
