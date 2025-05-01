import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import RTI from "./Pages/RTI";
import RTS from "./Pages/RTS";
const App = () => {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/rti" element={<RTI />} />
        <Route path="/rts" element={<RTS />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
