import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom'
import { ROUTES } from "../constants/routespath"
import { useScrollNavigation } from "../utils/scrollUtils";

const Footer = () => {
  const { scrollToSection } = useScrollNavigation();

  const handleNavClick = (sectionId, targetPath = "/") => {
    scrollToSection(sectionId, targetPath);
  };

  return (
    <footer className="w-full bg-[#c6d6fa60] pt-16 pb-10">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12">

        {/* Brand Column */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={Logo}
              alt="The Notepad"
              className="w-10 h-10 rounded-lg"
            />
            <h2 className="text-2xl font-extrabold text-textBlue  ">The Notepad</h2>
          </div>

          <p className="text-black/70 max-w-sm leading-relaxed font-medium">
            The simplest way to capture your ideas — fast, friendly, and built for everyday clarity.
          </p>
        </div>

        {/* Column Wrapper */}
        <div className="md:col-span-3 grid grid-cols-3 gap-10">

          {/* Product Column 1 */}
          <div>
            <h3 className="text-lg font-bold text-textBlue mb-4">Product</h3>
            <ul className="space-y-2 text-black/70 font-medium">
              <div  onClick={() => handleNavClick("features", ROUTES.DEFAULT.path)}><li className="hover:text-black cursor-pointer">Features</li></div>
              <div  onClick={() => handleNavClick("why-us", ROUTES.DEFAULT.path)}><li className="hover:text-black cursor-pointer">Why Choose Us</li></div>
            </ul>
          </div>

          {/* Product Column 2 */}
          <div>
            <h3 className="text-lg font-bold text-textBlue mb-4">More</h3>
            <ul className="space-y-2 text-black/70 font-medium">
              <div onClick={() => handleNavClick("pricing-hero", ROUTES.PRICING.path)}> <li className="hover:text-black cursor-pointer">Pricing</li></div>
              <div onClick={() => handleNavClick("pricing-faq", ROUTES.PRICING.path)}><li className="hover:text-black cursor-pointer">FAQs</li></div>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold text-textBlue mb-4">Resources</h3>
            <ul className="space-y-2 text-black/70 font-medium">
              <Link to={ROUTES.POLICY.path}> <li className="hover:text-black cursor-pointer">Privacy Policy</li></Link>
              <Link to={ROUTES.TERMS.path}><li className="hover:text-black cursor-pointer">Terms and Conditions</li></Link>
              <Link to={ROUTES.DELETE_ACC.path}><li className="hover:text-black cursor-pointer">Delete Account/data</li></Link>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-12 border-t border-black/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <Instagram className="w-6 h-6 text-textBlue hover:opacity-70 cursor-pointer" />
          <Linkedin className="w-6 h-6 text-textBlue hover:opacity-70 cursor-pointer" />
          <Twitter className="w-6 h-6 text-textBlue hover:opacity-70 cursor-pointer" />
          <Youtube className="w-6 h-6 text-textBlue hover:opacity-70 cursor-pointer" />
        </div>

        <p className="text-black/70 text-sm font-medium">
          © {new Date().getFullYear()} The Notepad. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
