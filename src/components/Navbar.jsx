import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: '#home', label: 'Home' },
    { name: '#projects', label: 'Projects' },
    { name: '#experience', label: 'Experience' },
    { name: '#skills', label: 'Skills' },
    { name: '#certifications', label: 'Certifications' },
    { name: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <span>Mehtab</span>
          <span className="accent">.Arif()</span>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <a href={link.name} className="nav-link" onClick={toggleMenu}>
                <span className="hash">#</span>{link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
