import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NetflixIntro from './components/NetflixIntro';
import WhoIsWatching from './pages/WhoIsWatching';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <>
      {showIntro && <NetflixIntro onComplete={handleIntroComplete} />}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<WhoIsWatching />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}
