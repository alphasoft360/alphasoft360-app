// src/components/ContactImage.jsx
import React from "react";

const ContactImage = () => {
  return (
    <section
      className="image-text-section"
      style={{
        background: `url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop") center/cover no-repeat`, // Live Unsplash image link for IT software houses
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        className="overlay"
       style={{
          //  
          // height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>
          Contact
        </h2>
        <p>Home / Contact</p>
      </div>
    </section>
  );
};

export default ContactImage;
