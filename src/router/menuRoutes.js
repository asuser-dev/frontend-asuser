import HomePage from "../pages/homepage/HomePage.jsx";
import Contact from "../pages/Contact.jsx";

export const routes = [
  {
    id: "homepage",
    path: "/",
    Element: HomePage,
  },
  {
    id: "contact",
    path: "/contact",
    Element: Contact,
  },
];
