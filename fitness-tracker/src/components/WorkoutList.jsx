function WorkoutList({ workouts }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-2">Logged Workouts</h2>
      <ul className="space-y-2">
        {workouts.map((w) => (
          <li key={w.id} className="p-3 border rounded shadow-sm bg-gray-50">
            <strong>{w.exercise}</strong> - {w.sets} sets × {w.reps} reps @ {w.weight}kg
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutList;
