// src/pages/Progress.jsx
import React from "react";

function Progress() {
  const stats = {
    totalWorkouts: 25,
    caloriesBurned: 4300,
    bestExercise: "Squats",
  };

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
        Your Progress
      </h1>

      {/* Stats cards */}
      <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <div
          style={{
            background: "#1a1a1a",
            padding: "20px",
            borderRadius: "16px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
          }}
        >
          <h2 style={{ color: "hotpink", margin: "0 0 8px" }}>Total Workouts</h2>
          <p style={{ fontSize: "1.2rem", margin: 0 }}>{stats.totalWorkouts}</p>
        </div>

        <div
          style={{
            background: "#1a1a1a",
            padding: "20px",
            borderRadius: "16px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
          }}
        >
          <h2 style={{ color: "hotpink", margin: "0 0 8px" }}>Calories Burned</h2>
          <p style={{ fontSize: "1.2rem", margin: 0 }}>{stats.caloriesBurned}</p>
        </div>

        <div
          style={{
            background: "#1a1a1a",
            padding: "20px",
            borderRadius: "16px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
          }}
        >
          <h2 style={{ color: "hotpink", margin: "0 0 8px" }}>Best Exercise</h2>
          <p style={{ fontSize: "1.2rem", margin: 0 }}>{stats.bestExercise}</p>
        </div>
      </div>
    </div>
  );
}

export default Progress;
