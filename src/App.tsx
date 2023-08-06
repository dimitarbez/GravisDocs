import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/UI/NavBar';
import HomePage from './components/Pages/Home/Home';
import MakePage from './components/Pages/Make/Make';
import AboutPage from './components/Pages/About/About';

const App: React.FC = () => {
  return (
    <Router basename="/">
      <div className="fixed top-0 right-0 left-0 z-50">
        <NavBar />
      </div>
      <div className="max-w-full overflow-x-hidden pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/make" element={<MakePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
