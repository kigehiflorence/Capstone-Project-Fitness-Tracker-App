import { useState } from "react"

export default function Home() {
  const [exercise, setExercise] = useState("")
  const [sets, setSets] = useState("")
  const [reps, setReps] = useState("")
  const [weight, setWeight] = useState("")
  const [logs, setLogs] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLog = { exercise, sets, reps, weight }
    setLogs([...logs, newLog])
    setExercise("")
    setSets("")
    setReps("")
    setWeight("")
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Log Workout</h2>
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
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Workout
        </button>
      </form>

      <h3 className="text-xl font-bold mt-6">Workout History</h3>
      <ul className="mt-2 space-y-2">
        {logs.map((log, index) => (
          <li key={index} className="border p-2 rounded">
            {log.exercise} - {log.sets} sets × {log.reps} reps @ {log.weight}kg
          </li>
        ))}
      </ul>
    </div>
  )
}
