import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("../pages/TermsConditions"));
const Pricing = lazy(() => import("../pages/Pricing"));
const Deleteacc = lazy(()=> import("../pages/deleteAcc"))

export const ROUTES = {
  DEFAULT: {
    path: "/",
    routeType: "public",
    showHeader: true,
    showFooter:true,
    element: <Home />,
  },
  TERMS: {
    path: "/terms",
    routeType: "public",
    showHeader: true,
    showFooter:true,
    element: <TermsConditions />,
  },
  POLICY: {
    path: "/policy",
    routeType: "public",
    showHeader: true,
    showFooter:true,
    element: <PrivacyPolicy />,
  },
  PRICING: {
    path: "/pricing",
    routeType: "public",
    showHeader: true,
    showFooter:true,
    element: <Pricing />,
  },
  DELETE_ACC: {
    path: "/acc-deletion",
    routeType: "public",
    showHeader: true,
    // showFooter:true,
    element: <Deleteacc />,
  },
  NOT_FOUND: {
    path: "*",
    showHeader: false,
    routeType: "public",
    element: <Navigate to="/" />,
  },
};

export const PAGE_SECTIONS = {
  "/": ["hero", "features", "why-us", "cta"],
  "/pricing": ["pricing-hero","pricing-faq"],
   "/terms": ["terms"],
  "/policy": ["policy"],
};
