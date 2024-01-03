import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CustomCarousel from "./components/carousel"; 
import Sidebar from "./components/sidebar/Side";
import "./App.css";
import slides from "./components/carousel/carouselData.json"; 


function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Sidebar />
        <CustomCarousel data={slides.slides} />
        
      </div>
    </div>
  );
}

export default App;
