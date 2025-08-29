// src/App.jsx


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import History from "./pages/History";
import Exercises from "./pages/Exercises";
import Progress from "./pages/Progress";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar always visible */}
        <Navbar />

        {/* Page Content */}
        <main className="p-6 mt-6 container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/progress" element={<Progress />} />

            {/* Fallback Route for 404s */}
            <Route
              path="*"
              element={
                <div className="text-center mt-20">
                  <h2 className="text-2xl font-bold text-red-500">404 - Page Not Found</h2>
                  <p className="mt-2 text-gray-600">
                    The page you are looking for does not exist.
                  </p>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
