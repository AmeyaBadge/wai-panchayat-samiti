import React from "react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-saffron">
                  Maharashtra Govt
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-saffron">
                  Zilla Parishad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-saffron">
                  Rural Development
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>Wai Panchayat Office</p>
            <p>Satara District, Maharashtra</p>
            <p>Phone: 02162-XXXXXX</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-saffron">
                Facebook
              </a>
              <a href="#" className="hover:text-saffron">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>© 2025 Wai Panchayat Samiti. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
