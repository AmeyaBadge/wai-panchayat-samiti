import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import RTI from "./Pages/RTI";
const App = () => {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/rti" element={<RTI />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
