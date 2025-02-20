import { Route, Routes } from "react-router-dom";
import { routes } from "./menuRoutes";
import RouteNotFound from "../components/routeNotFound/routeNotFound";
import Layout from "../components/layout/Layout.jsx";

const mainRoutes = routes.map(({ id, path, Element }) => (
  <Route key={id} path={path} element={<Element />} />
));

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>{mainRoutes}</Route>
      <Route path="*" element={<RouteNotFound></RouteNotFound>}></Route>
    </Routes>
  );
};

export default AppRouter;
