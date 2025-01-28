import { Route, Routes } from "react-router-dom";
import { routes } from "./menuRoutes";

const mainRoutes = routes.map(({ id, path, Element }) => (
  <Route key={id} path={path} element={<Element />} />
));

const AppRouter = () => {
  return (
    <Routes>
      <Route>{mainRoutes}</Route>
    </Routes>
  );
};

export default AppRouter;
