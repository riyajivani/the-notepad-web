import { Suspense } from "react";

export const UnAuthenticateRoute = ({
  children,
}) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

export default UnAuthenticateRoute;
