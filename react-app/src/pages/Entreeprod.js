import React from "react";
import Formprod from "../components/Formprod";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Entreeprod = () => {
  return (
    <div id="saisieprod">
      <Navigation />
      <h1>Upload des circuits</h1>
      <Formprod />
      <Footer />
    </div>
  );
};

export default Entreeprod;
