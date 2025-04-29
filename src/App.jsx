import { useEffect, useState } from "react";
import villageImage from "./assets/village.jpg";
import panchayatImage from "./assets/panchayat.png";
import emblem from "./assets/emblem.png";

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [villageImage, panchayatImage];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Government Header */}
      <header className="bg-white shadow-md border-b-4 border-saffron">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={emblem} alt="Government Emblem" className="h-12 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-navy">वाई पंचायत समिती</h1>
              <p className="text-sm text-gray-600">Wai Panchayat Samiti</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-4">
            <button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition">
              Contact
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src={images[currentImage]}
            alt="Wai Village"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                वाई ग्रामपंचायत सुधारणा प्रकल्प
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Coming Soon - Digital Panchayat Portal
              </p>
              <button className="px-6 py-2 bg-saffron text-white font-medium rounded-md hover:bg-opacity-90 transition">
                Notify Me
              </button>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
            <h3 className="text-xl font-semibold text-navy mb-3">About Wai</h3>
            <p className="text-gray-600">
              Wai is a historic town in Satara district known for its temples
              and natural beauty.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-saffron">
            <h3 className="text-xl font-semibold text-navy mb-3">
              Panchayat Services
            </h3>
            <p className="text-gray-600">
              Soon offering online services for certificates, schemes and
              complaints.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-navy">
            <h3 className="text-xl font-semibold text-navy mb-3">
              Tourist Attractions
            </h3>
            <p className="text-gray-600">
              Visit the beautiful Dhom Dam, Krishna River and ancient temples.
            </p>
          </div>
        </div>
      </main>

      {/* Government Footer */}
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
    </div>
  );
}

export default App;
