import React from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ label, percentage, isVisible }) => {
  return (
    <div className="progress-bar-container" style={{ marginBottom: "1rem" }}>
      <div className="progress-label" style={{ marginBottom: "0.25rem", fontWeight: "bold" }}>
        {label}
      </div>
      <div
        className="progress-bar-background"
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: "#e0e0e0",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <motion.div
          className="progress-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percentage}%` : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            height: "100%",
            backgroundColor: "#007bff",
            borderRadius: "10px",
          }}
        />
      </div>
      <div className="progress-percentage" style={{ marginTop: "0.25rem", fontSize: "0.875rem", color: "#555" }}>
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressBar;
