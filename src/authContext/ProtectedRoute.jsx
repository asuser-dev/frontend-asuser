import { Navigate, Outlet, useLocation } from "react-router-dom";
<<<<<<< HEAD
import { useAuth } from "./authContext";
=======
import { useAuth } from "./authContext.jsx";
>>>>>>> 4b6bf31 (last changes to push frontend)

const ProtectedRoute = () => {
  const { userData, loading } = useAuth();
  const location = useLocation();

  if (loading) return null;

  if (!userData) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
