import HomePage from "../pages/homepage/HomePage.jsx";
import Contact from "../pages/contact/Contact.jsx";
import Login from "../pages/auth/login/Login.jsx";
import Register from "../pages/auth/register/Register.jsx";
import Admin from "../pages/admin/Admin.jsx";
import Services from "../pages/services/Services.jsx";

export const routes = [
  {
    id: "homepage",
    path: "/",
    Element: HomePage,
    public: true,
  },
  {
    id: "contact",
    path: "/contact",
    Element: Contact,
    public: true,
  },
  {
    id: "login",
    path: "/login",
    Element: Login,
    public: true,
  },
  {
    id: "register",
    path: "/register",
    Element: Register,
    public: true,
  },
  {
    id: "admin",
    path: "/admin",
    Element: Admin,
    public: false,
  },
  {
    id: "services",
    path: "/services",
    Element: Services,
    public: false,
  },
];
