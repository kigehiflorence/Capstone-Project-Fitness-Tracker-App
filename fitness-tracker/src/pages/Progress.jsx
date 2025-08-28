// src/pages/Progress.jsx
import React from "react";

function Progress() {
  const stats = {
    totalWorkouts: 25,
    caloriesBurned: 4300,
    bestExercise: "Squats",
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Your Progress</h1>
      <ul className="mt-4 space-y-2">
        <li><strong>Total Workouts:</strong> {stats.totalWorkouts}</li>
        <li><strong>Calories Burned:</strong> {stats.caloriesBurned}</li>
        <li><strong>Best Exercise:</strong> {stats.bestExercise}</li>
      </ul>
    </div>
  );
}

export default Progress;
