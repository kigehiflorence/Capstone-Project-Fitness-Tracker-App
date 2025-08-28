// src/components/WorkoutForm.jsx
import React, { useState, useEffect } from "react";

function WorkoutForm({ addWorkout }) {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("kg");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!exercise || !sets || !reps || !weight) {
      setError("⚠️ Please fill in all fields.");
      return;
    }

    setError("");
    addWorkout({
      id: Date.now(),
      exercise,
      sets: Number(sets),
      reps: Number(reps),
      weight: Number(weight),
      unit,
    });

    // Reset form
    setExercise("");
    setSets("");
    setReps("");
    setWeight("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold mb-3">Log a Workout</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <input
        type="text"
        placeholder="Exercise name (e.g., Squat)"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />

      <input
        type="number"
        placeholder="Sets"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />

      <input
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />

      <div className="flex space-x-2 mb-2">
        <input
          type="number"
          placeholder="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="kg">kg</option>
          <option value="lbs">lbs</option>
        </select>
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Workout
        </button>
        <button
          type="button"
          onClick={() => {
            setExercise("");
            setSets("");
            setReps("");
            setWeight("");
            setError("");
          }}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default WorkoutForm;
