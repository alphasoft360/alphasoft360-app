// src/components/ContactImage.jsx
import React from "react";
import backgroundImage from "../assets/img/Contact-us-bg.jpeg";
const ContactImage = () => {
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
        <h2>Contact</h2>
        <p>Home / Contact</p>
      </div>
    </section>
  );
};

export default ContactImage;
