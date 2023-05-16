import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Experience from "./pages/experience";
import Home from "./pages/home";
import Projects from "./pages/projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
