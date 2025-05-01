import React, { useState } from "react";
import { Link } from "react-router-dom";
import emblem from "../../assets/emblem.png";
import { Menu, X } from "lucide-react"; // Import icons
import "./index.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md border-b-4 border-saffron">
      <div className="container mx-auto px-4 py-3">
        {/* Desktop Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={emblem} alt="Government Emblem" className="h-12 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-navy">वाई पंचायत समिती</h1>
              <p className="text-sm text-gray-600">Wai Panchayat Samiti</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex space-x-6">
              <Link
                to="/rti"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                RTI
              </Link>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              to="/rti"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Right to Information (RTI)
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
