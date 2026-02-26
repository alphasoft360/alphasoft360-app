// src/components/ImageTextSection.jsx
import React from "react";
import backgroundImage from "../assets/img/Services-bg.jpeg";
const ServicesImage = () => {
  return (
    <section
      className="image-text-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "70vh",
        position: "relative",
        color: "#fff",
      }}
    >
      <div
        className="overlay"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Services</h2>
        <p>Home / Services</p>
      </div>
    </section>
  );
};

export default ServicesImage;
