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

    const newWorkout = { exercise, sets, reps, weight };
    setWorkouts([...workouts, newWorkout]);

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
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Workout
        </button>
      </form>

      {/* Workout List */}
      <h3 className="text-xl font-bold mt-6">Workout History</h3>
      <ul className="mt-2 space-y-2">
        {workouts.map((log, index) => (
          <li key={index} className="border p-2 rounded">
            {log.exercise} - {log.sets} sets × {log.reps} reps @ {log.weight}kg
          </li>
        ))}
      </ul>
    </div>
  );
}
