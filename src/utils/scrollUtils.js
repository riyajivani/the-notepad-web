import { useNavigate, useLocation } from "react-router-dom";
import { PAGE_SECTIONS } from "../constants/routespath";

export const useScrollNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId, targetPath = null) => {
    const currentPath = location.pathname;
    const pathToNavigate = targetPath || currentPath;

    // Check if section exists on the target path
    const validSections = PAGE_SECTIONS[pathToNavigate] || [];
    
    if (!validSections.includes(sectionId)) {
      console.warn(`Section "${sectionId}" not found on path "${pathToNavigate}"`);
      return;
    }

    if (currentPath === pathToNavigate) {
      // Already on the target page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      // Navigate to target page with section hash
      navigate(`${pathToNavigate}#${sectionId}`);
    }
  };

  return { scrollToSection };
};