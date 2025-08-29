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
      id: Date.now(),
      exercise,
      sets,
      reps,
      weight,
      date: new Date().toLocaleDateString(),
    };

    setWorkouts([newWorkout, ...workouts]); // latest on top

    // reset form
    setExercise("");
    setSets("");
    setReps("");
    setWeight("");
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-pink-500 mb-8">Workout Tracker</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Workout Form */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Log Your Workout</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Exercise"
              value={exercise}
              onChange={(e) => setExercise(e.target.value)}
              className="w-full p-3 rounded-lg bg-black border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="number"
              placeholder="Sets"
              value={sets}
              onChange={(e) => setSets(e.target.value)}
              className="w-full p-3 rounded-lg bg-black border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="number"
              placeholder="Reps"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              className="w-full p-3 rounded-lg bg-black border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="number"
              placeholder="Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-3 rounded-lg bg-black border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              type="submit"
              className="w-full bg-pink-500 py-3 rounded-xl text-white font-semibold hover:bg-pink-600 transition"
            >
              Save Workout
            </button>
          </form>

          {/* Summary */}
          {workouts.length > 0 && (
            <div className="mt-6 p-4 bg-black rounded-xl border border-pink-500 shadow">
              <h3 className="text-lg font-semibold text-pink-400">Summary</h3>
              <p>Total Workouts: {workouts.length}</p>
            </div>
          )}
        </div>

        {/* Workout History */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Workout History</h2>
          <ul className="space-y-3">
            {workouts.length === 0 ? (
              <p className="text-gray-400">No workouts yet.</p>
            ) : (
              workouts.map((w) => (
                <li
                  key={w.id}
                  className="p-3 rounded-lg bg-black border border-pink-500 shadow"
                >
                  <div className="flex justify-between">
                    <strong>{w.exercise}</strong>
                    <span className="text-sm text-gray-400">{w.date}</span>
                  </div>
                  <p className="text-gray-300">
                    {w.sets} sets × {w.reps} reps @ {w.weight}kg
                  </p>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
