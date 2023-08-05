import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/UI/NavBar';
import HomePage from './components/Pages/Home/Home';
import MakePage from './components/Pages/Make/Make';
import AboutPage from './components/Pages/About/About';


const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/make" element={<MakePage />} />
      </Routes>
    </Router>
  );
};

export default App;
