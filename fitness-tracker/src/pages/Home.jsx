// src/pages/Home.jsx
import React, { useState } from "react";

function Home() {
  const [workouts, setWorkouts] = useState([]);
  const [form, setForm] = useState({
    exercise: "",
    sets: "",
    reps: "",
    weight: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWorkouts([...workouts, form]);
    setForm({ exercise: "", sets: "", reps: "", weight: "" });
  };

  return (
    <div style={{ color: "white" }}>
      {/* Page title */}
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "hotpink", marginBottom: "1rem" }}>
        Workout Tracker
      </h1>

      {/* Card for workout logging */}
      <div style={{
        background: "#1a1a1a",
        borderRadius: "16px",
        padding: "20px",
        marginBottom: "20px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.5)"
      }}>
        <h2 style={{ color: "hotpink", marginBottom: "12px" }}>Log Your Workout</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <input
            type="text"
            name="exercise"
            placeholder="Exercise"
            value={form.exercise}
            onChange={handleChange}
            style={{ flex: "1", padding: "8px", borderRadius: "8px", border: "none" }}
          />
          <input
            type="number"
            name="sets"
            placeholder="Sets"
            value={form.sets}
            onChange={handleChange}
            style={{ width: "80px", padding: "8px", borderRadius: "8px", border: "none" }}
          />
          <input
            type="number"
            name="reps"
            placeholder="Reps"
            value={form.reps}
            onChange={handleChange}
            style={{ width: "80px", padding: "8px", borderRadius: "8px", border: "none" }}
          />
          <input
            type="number"
            name="weight"
            placeholder="Weight (kg)"
            value={form.weight}
            onChange={handleChange}
            style={{ width: "120px", padding: "8px", borderRadius: "8px", border: "none" }}
          />
          <button type="submit" style={{
            background: "hotpink",
            border: "none",
            padding: "10px 16px",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            Save Workout
          </button>
        </form>
      </div>

      {/* Card for workout history */}
      <div style={{
        background: "#1a1a1a",
        borderRadius: "16px",
        padding: "20px",
        marginBottom: "20px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.5)"
      }}>
        <h2 style={{ color: "hotpink", marginBottom: "12px" }}>Workout History</h2>
        {workouts.length === 0 ? (
          <p>No workouts yet.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {workouts.map((w, i) => (
              <li key={i} style={{
                padding: "10px",
                marginBottom: "10px",
                background: "#2a2a2a",
                borderRadius: "12px"
              }}>
                <strong>{w.exercise}</strong> — {w.sets} sets × {w.reps} reps @ {w.weight} kg
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Home;
