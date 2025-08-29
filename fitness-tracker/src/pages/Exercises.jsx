// src/pages/Exercises.jsx
import React from "react";

function Exercises() {
  const exerciseList = [
    { name: "Push-ups", description: "Great for upper body strength." },
    { name: "Squats", description: "Strengthens legs and glutes." },
    { name: "Plank", description: "Builds core endurance." },
  ];

  return (
    <div style={{ color: "white" }}>
      {/* Page title */}
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "hotpink",
          marginBottom: "1.5rem",
        }}
      >
        Exercises
      </h1>

      {/* Cards grid */}
      <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "1fr 1fr" }}>
        {exerciseList.map((exercise, index) => (
          <div
            key={index}
            style={{
              background: "#1a1a1a",
              padding: "20px",
              borderRadius: "16px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
            }}
          >
            <h2 style={{ margin: "0 0 8px", color: "hotpink" }}>
              {exercise.name}
            </h2>
            <p style={{ margin: 0 }}>{exercise.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exercises;
