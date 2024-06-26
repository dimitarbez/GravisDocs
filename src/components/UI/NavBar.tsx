import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './NavBar.module.css'; // Importing the CSS module

const NavBar: React.FC = () => {
  const location = useLocation();

  const getClassName = (path: string) => {
    return location.pathname === path
      ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
      : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium';
  };

  return (
    <nav className="bg-gray-800">
      <div className="flex items-center">
        <div className="ml-10 flex items-baseline space-x-4">
          <Link to="/" className={`${getClassName('/')} ${styles.noOutline}`}>
            Home
          </Link>
          <Link to="/about" className={`${getClassName('/about')} ${styles.noOutline}`}>
            About
          </Link>
          <Link to="/make" className={`${getClassName('/make')} ${styles.noOutline}`}>
            Make
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
