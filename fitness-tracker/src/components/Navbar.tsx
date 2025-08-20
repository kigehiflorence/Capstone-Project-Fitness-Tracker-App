import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="font-bold text-xl">Workout Tracker</h1>
      <ul className="flex gap-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/exercises">Exercises</Link></li>
        <li><Link to="/progress">Progress</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

