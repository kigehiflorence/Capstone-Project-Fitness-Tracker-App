import { useState } from "react";

export default function Home() {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [workouts, setWorkouts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!exercise || !sets || !reps || !weight) return;

    const newWorkout = {
      exercise,
      sets,
      reps,
      weight,
      date: new Date().toLocaleDateString(), // Add timestamp
    };

    setWorkouts([newWorkout, ...workouts]); // latest on top

    // reset form
    setExercise("");
    setSets("");
    setReps("");
    setWeight("");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Log Your Workout</h1>

      {/* Workout Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Workout
        </button>
      </form>

      {/* Summary */}
      {workouts.length > 0 && (
        <div className="mt-6 p-4 bg-gray-100 rounded shadow">
          <h3 className="text-lg font-semibold">Summary</h3>
          <p>Total Workouts: {workouts.length}</p>
        </div>
      )}

      {/* Workout List */}
      <h3 className="text-xl font-bold mt-6">Workout History</h3>
      <ul className="mt-2 space-y-3">
        {workouts.map((log, index) => (
          <li key={index} className="border p-3 rounded shadow-sm bg-white">
            <div className="flex justify-between">
              <span className="font-semibold">{log.exercise}</span>
              <span className="text-sm text-gray-500">{log.date}</span>
            </div>
            <p className="text-gray-700">
              {log.sets} sets x {log.reps} reps @ {log.weight}kg
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
