// src/components/ImageTextSection.jsx

const ServicesImage = () => {
  return (
    <section
      className="image-text-section"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=2000&h=300&fit=crop')`, // Live Unsplash image link for IT software houses
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "300px",
        position: "relative",
        color: "#fff",
      }}
    >
      <div
        className="overlay"
        style={{
          // background: "rgba(0, 0, 0, 0.5)",
          // height: "100%",
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

export default ServicesImage;
