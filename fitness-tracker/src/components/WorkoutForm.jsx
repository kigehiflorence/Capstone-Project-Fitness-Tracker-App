import { useState } from "react";

function WorkoutForm({ onAddWorkout }) {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!exercise || !sets || !reps || !weight) return;

    const newWorkout = { id: Date.now(), exercise, sets, reps, weight };
    onAddWorkout(newWorkout);

    setExercise("");
    setSets("");
    setReps("");
    setWeight("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-md space-y-4">
      <div>
        <label className="block font-medium">Exercise</label>
        <input
          type="text"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          className="border w-full p-2 rounded"
          placeholder="Bench Press"
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <label className="block font-medium">Sets</label>
          <input
            type="number"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            className="border w-full p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Reps</label>
          <input
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className="border w-full p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border w-full p-2 rounded"
          />
        </div>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Add Workout
      </button>
    </form>
  );
}

export default WorkoutForm;
