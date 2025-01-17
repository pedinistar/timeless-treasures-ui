import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/ui/NavBar";
import ContactSection from "./components/sections/ContactSection";
import NotFound from "./pages/NotFoundPage";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";
import ScrollToTop from "./components/helpers/ScrollToTop"; // Import the ScrollToTop component

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />{" "}
      {/* Ensures the page scrolls to the top on route change */}
      <main className="w-full bg-primary">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          {/* Add more defined routes here */}
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
        <ContactSection />
      </main>
    </BrowserRouter>
  );
};

export default App;
