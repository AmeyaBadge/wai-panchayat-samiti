import React, { useEffect, useState } from "react";

import villageImage from "../assets/village.jpg";
import panchayatImage from "../assets/panchayat.png";

const Landing = () => {
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
    </div>
  );
};

export default Landing;
