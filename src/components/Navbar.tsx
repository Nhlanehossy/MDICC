import React, { useState, useCallback } from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';

const navItems = [
  { href: '#executive-summary', label: 'Summary' },
  { href: '#problem-statement', label: 'Problem' },
  { href: '#vision', label: 'Vision' },
  { href: '#mission', label: 'Mission' },
  { href: '#impact', label: 'Impact' },
  { href: '#programs', label: 'Programs' },
  { href: '#partners', label: 'Partners' },
  { href: '#get-involved', label: 'Get Involved' },
  { href: '#contact', label: 'Contact' },
] as const;

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-container">
        <a href="#" className="logo" onClick={closeMenu} aria-label="MDICC Home">
          <img src={logo} alt="" className="nav-logo" />
          <span className="logo-text">MDICC</span>
        </a>
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
