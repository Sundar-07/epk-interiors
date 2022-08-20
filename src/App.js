import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/Miscellaneous/AboutUs";
import ContactUs from "./components/Miscellaneous/ContactUs";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";
import InteriorWorks from "./components/InteriorWorks/InteriorWorks";
import LandingPage from "./components/LandingPage/LandingPage";
import OfficeProducts from "./components/OfficeProducts/OfficeProducts";
import Teams from "./components/Teams/Teams";
import ErrorFound from "./components/404/ErrorFound";

function App() {
  const [isNotified, setIsNotified] = useState(false);
  return (
    <div>
      {isNotified && (
        <div className="notification is-link">
          <button className="delete"></button>
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
          ipsum dolor. <strong>Discount 10%</strong>, tempus quis
        </div>
      )}
      <Header />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="office-products" element={<OfficeProducts />} />
        <Route path="teams" element={<Teams />} />
        <Route path="interior-works" element={<InteriorWorks />} />
        {/* Error */}
        <Route path="*" element={<ErrorFound />} />
      </Routes>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
