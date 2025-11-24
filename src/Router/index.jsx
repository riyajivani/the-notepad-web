import { Suspense } from "react";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AuthenticateRoute from "./RouteGuard/AuthenticateRoute";
import UnAuthenticateRoute from "./RouteGuard/UnAuthenticateRoute";
import ErrorBoundary from "../common/ErrorBoundary";
import Layout from "../Component/Layout";
import { ROUTES } from "../constants/routespath";

const applySuspense = (routes) => {
  return routes.map((route) => ({
    ...route,
    element: (
      <Suspense fallback={
        <div className="flex justify-center items-center h-64">
          <div className="border-primary ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 animate-spin" />
        </div>
      }>{route.element}</Suspense>
    ),
  }));
};

const RoutesArray = applySuspense([
  ...Object.keys(ROUTES).map((key) => {
    const route = ROUTES[key];

    const routeObj = {
      path: route.path,
      element: route.element,
    };

    if (route.routeType === "authenticate") {
      routeObj["element"] = (
        <AuthenticateRoute allowedRoles={route.allowedRoles}>
          <Layout showHeader={route.showHeader} showFooter={route.showFooter}>
            {ROUTES.DEFAULT.path !== route.path ? (
              <ErrorBoundary path={ROUTES.DEFAULT.path}>
                {route.element}
              </ErrorBoundary>
            ) : (
              route.element
            )}
          </Layout>
        </AuthenticateRoute>
      );
    } else if (route.routeType === "un-authenticate") {
      routeObj["element"] = (
        <UnAuthenticateRoute>{route.element}</UnAuthenticateRoute>
      );
    } else if (route.routeType === "public") {
      routeObj.element = (
        <Layout showHeader={route.showHeader} showFooter={route.showFooter}>{route.element}</Layout>
      );
    }

    return routeObj;
  }),
]);
const AllRoute = createBrowserRouter(RoutesArray);
const Route = () => <RouterProvider router={AllRoute} />;

export default Route;
