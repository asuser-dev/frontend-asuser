import HomePage from "../pages/homepage/HomePage.jsx";
import Contact from "../pages/contact/Contact.jsx";
<<<<<<< HEAD
import Login from "../components/sesion/login/Login.jsx";
import Register from "../components/sesion/register/Register.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import Profile from "../pages/profile/Profile.jsx";
import PaymentSuccess from "../pages/payment_mp/paymentSuccess/PaymentSuccess.jsx";
import PaymentFailed from "../pages/payment_mp/paymentFailed/PaymentFailed.jsx";
=======
import Login from "../pages/auth/login/Login.jsx";
import Register from "../pages/auth/register/Register.jsx";
import Admin from "../pages/admin/Admin.jsx";
import Services from "../pages/services/Services.jsx";
>>>>>>> 4b6bf31 (last changes to push frontend)

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
<<<<<<< HEAD
    id: "dashboard",
    path: "/dashboard",
    Element: Dashboard,
    public: false,
  },
  {
    id: "profile",
    path: "/profile",
    Element: Profile,
    public: false,
  },
  {
    id: "payment-success",
    path: "/payment-success",
    Element: PaymentSuccess,
    public: false,
  },
  {
    id: "payment-failed",
    path: "/payment-failed",
    Element: PaymentFailed,
=======
    id: "admin",
    path: "/admin",
    Element: Admin,
    public: false,
  },
  {
    id: "services",
    path: "/services",
    Element: Services,
>>>>>>> 4b6bf31 (last changes to push frontend)
    public: false,
  },
];
