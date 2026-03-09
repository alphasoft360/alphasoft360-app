// src/components/ImageTextSection.jsx
import backgroundImage from "../assets/img/About-us-bg.jpeg";
const AboutImage = () => {
  return (
    <section
      className="image-text-section image-fluid"
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
        <h2>About US</h2>
        <p>Home / About</p>
      </div>
    </section>
  );
};

export default AboutImage;
