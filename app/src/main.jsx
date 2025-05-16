import React from "react";
import ReactDOM from "react-dom/client";
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
  </React.StrictMode>
);
