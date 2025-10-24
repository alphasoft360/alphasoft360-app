// src/components/MapSection.jsx
import React from "react";

const MapSection = () => {
  return (
    <section className="map-section">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6862.439295652244!2d73.09087971987711!3d30.684095530953844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b7f973c7db4d%3A0x86b3a893395d785d!2sMain%20Pakavenue%20Rd%2C%20Sahiwal%2C%20Pakistan!5e0!3m2!1sen!2s!4v1759863741524!5m2!1sen!2s" // Updated Google Maps link
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default MapSection;
