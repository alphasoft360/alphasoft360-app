// src/components/ImageTextSection.jsx
import React from "react";

const TeamImg = () => {
  return (
    <section
      className="image-text-section"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600')`, // Live Unsplash image link for IT software houses
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "300px",
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
