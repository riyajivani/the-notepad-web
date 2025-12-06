import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routespath'
import Button from '../common/Button'
import { Menu } from "lucide-react";
import { useScrollNavigation } from '../utils/scrollUtils';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollToSection } = useScrollNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId, targetPath = "/") => {
    scrollToSection(sectionId, targetPath);
    setMobileOpen(false);
  };

  return (
    <header className={`w-full fixed top-0 left-0 ${scrolled ? "bg-white shadow-md" : "bg-transparent"} z-50`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-12 px-4 sm:px-12">
        {/* Logo */}
        <Link to={ROUTES.DEFAULT.path} onClick={()=>setMobileOpen(false)}className="flex items-center gap-2 cursor-pointer select-none" >
          <div className="w-10 h-10 flex items-center justify-center text-xl font-bold">
            <img src={Logo} />
          </div>
          <span className="text-sm sm:text-xl font-bold text-textBlue">The Notepad</span>
        </Link>

        {/* Desktop Navigation */}
        {scrolled && <nav className="hidden lg:flex items-center gap-10 text-sm font-medium text-gray-800">
          <div onClick={() => handleNavClick("features", ROUTES.DEFAULT.path)} className="hover:text-hoverBlue transition cursor-pointer">Features</div>
          <Link to={ROUTES.PRICING.path} className="hover:text-hoverBlue transition cursor-pointer">Pricing</Link>
          <div onClick={() => handleNavClick("cta", ROUTES.DEFAULT.path)} className="hover:text-hoverBlue transition cursor-pointer">Download</div>
          <Link to={ROUTES.TERMS.path} className="hover:text-hoverBlue transition cursor-pointer">Terms</Link>
          <Link to={ROUTES.POLICY.path} className="hover:text-hoverBlue transition cursor-pointer">Policy</Link>
        </nav>}

        {/* Actions */}
        <button
          className="lg:hidden p-2 mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 pb-6 pt-3 flex flex-col  gap-4 text-sm font-medium">
          <div onClick={() => handleNavClick("features", ROUTES.DEFAULT.path)} className="text-center py-1 hover:text-hoverBlue">Features</div>
          <Link to={ROUTES.PRICING.path} onClick={()=>setMobileOpen(false)} className="text-center py-1 hover:text-hoverBlue">Pricing</Link>
          <div onClick={() => handleNavClick("features", ROUTES.DEFAULT.path)} className="text-center py-1 hover:text-hoverBlue">Download</div>
          <Link to={ROUTES.TERMS.path} onClick={()=>setMobileOpen(false)} className="text-center py-1 hover:text-hoverBlue">Terms</Link>
          <Link to={ROUTES.POLICY.path} onClick={()=>setMobileOpen(false)}  className="text-center py-1 hover:text-hoverBlue">Policy</Link>
        </div>
      )}
    </header>
  );
}

export default Header