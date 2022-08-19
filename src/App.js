import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/ContactUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";
import InteriorWorks from "./components/InteriorWorks/InteriorWorks";
import LandingPage from "./components/LandingPage/LandingPage";
import OfficeProducts from "./components/OfficeProducts/OfficeProducts";
import Teams from "./components/Teams/Teams";

function App() {
  const [isNotified, setIsNotified] = useState(false);
  return (
    <div>
      {isNotified && (
        <div class="notification is-link">
          <button class="delete"></button>
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
          ipsum dolor. <strong>Discount 10%</strong>, tempus quis
        </div>
      )}
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="office-products" element={<OfficeProducts />} />
        <Route path="teams" element={<Teams />} />
        <Route path="interior-works" element={<InteriorWorks />} />
      </Routes>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
