import React from 'react';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-brand">
        <strong>MDICC</strong> — Malawi Digital Innovation &amp; Cybersecurity Centre
      </div>
      <div className="footer-contact">
        <a href="mailto:info@mdicc.mw">info@mdicc.mw</a>
        <span className="separator">·</span>
        <a href="tel:+2651234567">+265 1 234 567</a>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} MDICC. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
