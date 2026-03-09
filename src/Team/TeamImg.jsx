// src/components/ImageTextSection.jsx
import React from "react";
import backgroundImage from "../assets/img/Team-bg.jpeg";
const TeamImg = () => {
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
        color: "#fff"
      }}
    >
      <div className="overlay">
        <h2>Our Team</h2>
        <p>Home / Team</p>
      </div>
    </section>
  );
};

export default TeamImg;
