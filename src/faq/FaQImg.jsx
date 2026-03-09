// src/components/ImageTextSection.jsx
import React from "react";
import backgroundImage from "../assets/img/FAQ-bg.jpeg";
const FaQImg = () => {
  return (
    <section
      className="image-text-section"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Live Unsplash image link for IT software houses
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "40vh",
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
        <h2>FAQs</h2>
        <p>Home / FAQs</p>
      </div>
    </section>
  );
};

export default FaQImg;
