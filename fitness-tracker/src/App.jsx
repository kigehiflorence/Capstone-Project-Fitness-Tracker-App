/// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import History from "./pages/History";
import Exercises from "./pages/Exercises";
import Progress from "./pages/Progress";
import "./App.css"; // custom CSS file

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar always visible */}
        <Navbar />

        {/* Page Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/progress" element={<Progress />} />

            {/* Fallback Route for 404s */}
            <Route
              path="*"
              element={
                <div className="error-page">
                  <h2>404 - Page Not Found</h2>
                  <p>The page you are looking for does not exist.</p>
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
