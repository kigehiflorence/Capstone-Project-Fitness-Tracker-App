// src/pages/Exercises.jsx
import React from "react";

function Exercises() {
  const exerciseList = [
    { name: "Push-ups", description: "Great for upper body strength." },
    { name: "Squats", description: "Strengthens legs and glutes." },
    { name: "Plank", description: "Builds core endurance." },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Exercises</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {exerciseList.map((exercise, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h2 className="font-semibold">{exercise.name}</h2>
            <p>{exercise.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exercises;
