// src/pages/History.jsx
import React from "react";

function History() {
  const workouts = [
    { date: "2025-08-10", exercise: "Push-ups", reps: 30 },
    { date: "2025-08-11", exercise: "Squats", reps: 50 },
    { date: "2025-08-12", exercise: "Plank", duration: "2 min" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Workout History</h1>
      <ul className="mt-4 space-y-2">
        {workouts.map((workout, index) => (
          <li key={index} className="border p-2 rounded">
            <strong>{workout.date}</strong> – {workout.exercise}{" "}
            {workout.reps ? `${workout.reps} reps` : workout.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
