// src/pages/History.jsx
import React from "react";

function History() {
  const workouts = [
    { date: "2025-08-10", exercise: "Push-ups", reps: 30 },
    { date: "2025-08-11", exercise: "Squats", reps: 50 },
    { date: "2025-08-12", exercise: "Plank", duration: "2 min" },
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
        Workout History
      </h1>

      {/* Cards container */}
      <div style={{ display: "grid", gap: "20px" }}>
        {workouts.map((workout, index) => (
          <div
            key={index}
            style={{
              background: "#1a1a1a",
              padding: "20px",
              borderRadius: "16px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
            }}
          >
            <p style={{ margin: 0, fontSize: "0.9rem", color: "#bbb" }}>
              {workout.date}
            </p>
            <h2 style={{ margin: "8px 0", color: "hotpink" }}>
              {workout.exercise}
            </h2>
            <p style={{ margin: 0 }}>
              {workout.reps
                ? `${workout.reps} reps`
                : workout.duration}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
