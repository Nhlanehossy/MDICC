import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import impactStats from '../data';

export default function Home() {
  return (
    <>
      <header className="hero-section">
        <motion.img
          src={logo}
          alt="MDICC logo"
          className="hero-image"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Malawi Digital Innovation &amp; Cybersecurity Centre
        </motion.h1>
        <motion.h3
          className="hero-slogan"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Learn Digital. Stay Secure.
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Empowering youth through digital skills, innovation, and cyber awareness.
        </motion.p>
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/programs" className="primary-btn">Explore Programs</Link>
          <Link to="/contact" className="secondary-btn">Support Our Mission</Link>
        </motion.div>
      </header>

      <main className="content">
        <motion.section
          className="section section-alt"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Impact at a Glance</h2>
          <div className="impact-grid">
            {impactStats.map(({ value, label }) => (
              <div key={label} className="impact-card">
                <span className="impact-value">{value}</span>
                <p className="impact-label">{label}</p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/impact" className="primary-btn">See Full Impact</Link>
          </div>
        </motion.section>

        <motion.section
          className="section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why MDICC?</h2>
          <div className="info-card-grid">
            <div className="info-card">
              <h3>🌐 Digital Skills Training</h3>
              <p>Providing youth with programming, ICT, and cybersecurity skills for the modern economy.</p>
            </div>
            <div className="info-card">
              <h3>🔐 Cybersecurity Awareness</h3>
              <p>Protecting communities from digital threats and mobile money fraud.</p>
            </div>
            <div className="info-card">
              <h3>🔬 Innovation Hub</h3>
              <p>Supporting technology startups and practical solutions for local challenges.</p>
            </div>
          </div>
          <div className="section-cta">
            <Link to="/about" className="secondary-btn">Learn More About Us</Link>
          </div>
        </motion.section>
      </main>
    </>
  );
}
