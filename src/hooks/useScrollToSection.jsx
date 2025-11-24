import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL and scroll to that section
    if (location.hash) {
      const elementId = location.hash.substring(1); // Remove the '#'

      // Wait for page to fully load and render before scrolling to section
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.pathname]);
};