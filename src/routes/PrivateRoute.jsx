import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user && user?.email) {
    return children;
  };

  if (loading) {
    return <div className="flex min-h-screen justify-center items-center">
      <span className="loading loading-bars loading-lg"></span>
    </div>
  };

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRouter;

