import { Suspense } from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../constants/routespath";

const AuthenticateRoute = ({
  children,
}) => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.DEFAULT.path} />;
  }

  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

export default AuthenticateRoute;
