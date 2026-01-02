// src/components/ImageTextSection.jsx
import React from "react";

const FaQImg = () => {
  return (
    <section
      className="image-text-section"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')`, // Live Unsplash image link for IT software houses
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
        <h2>FAQs</h2>
        <p>Home / FAQs</p>
      </div>
    </section>
  );
};

export default FaQImg;
