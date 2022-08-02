import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home';
import Resume from './pages/resume';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element= {<Home />} />
        </Routes>
    </Router>
  );
}

// NOTES
// add react routing for resume page
// fix resume URL highlighing thing
// add bolding or highlighting for keywords
// add browser title
// custom URL

export default App;
