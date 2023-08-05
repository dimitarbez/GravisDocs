import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/UI/NavBar';
import HomePage from './components/Pages/Home';
import './styles.css'

const About: React.FC = () => <div>About Page</div>;
const Videos: React.FC = () => <div>Videos Page</div>;

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </Router>
  );
};

export default App;
