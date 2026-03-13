import React, { useState, useCallback } from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';

const navItems = [
  { href: '#executive-summary', label: 'Summary' },
  { href: '#problem-statement', label: 'Problem' },
  { href: '#vision', label: 'Vision' },
  { href: '#mission', label: 'Mission' },
  { href: '#objectives', label: 'Objectives' },
  { href: '#programs', label: 'Programs' },
  { href: '#contact', label: 'Contact' },
] as const;

const Navbar: React.FC<{ toggleDarkMode: () => void }> = ({ toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-container">
        <a href="#" className="logo" onClick={closeMenu} aria-label="MDICC Home">
          <img src={logo} alt="MDICC" className="nav-logo" />
        </a>
        <button
          type="button"
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          🌙
        </button>
        <button
          type="button"
          className="nav-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="hamburger" data-open={menuOpen} />
        </button>
        <ul id="nav-menu" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={closeMenu}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
