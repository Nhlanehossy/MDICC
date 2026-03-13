import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import logo from './assets/logo.png';
import jo from './assets/jo.jpg';
import './App.css';

function App() {
  const teamMembers = [
    { name: 'Jo', role: 'Founder & CEO', photo: jo },
    { name: 'Alex', role: 'CTO', photo: jo },
    { name: 'Maria', role: 'Program Manager', photo: jo },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      console.log('Toggling dark mode to:', newMode);
      return newMode;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    console.log('Dark mode applied:', darkMode);
  }, [darkMode]);

  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} />

      <header className="hero-section">
        <img src={logo} alt="MDICC logo" className="hero-image" />
        <h1>Malawi Digital Innovation &amp; Cybersecurity Centre</h1>
        <h3 className="hero-slogan">Learn Digital. Stay Secure.</h3>
        <p>Empowering youth through digital skills, innovation, and cyber awareness.</p>
        <div className="hero-cta">
          <a href="#programs" className="primary-btn">Explore Programs</a>
          <a href="#contact" className="secondary-btn">Support Our Mission</a>
        </div>
      </header>

      <main className="content">
        <AnimatedSection id="executive-summary">
          <h2>Executive Summary</h2>
          <p>
            The Malawi Digital Innovation &amp; Cybersecurity Centre (MDICC) is a
            non-profit organization with a mission to empower underprivileged
            youth and communities in Malawi with ICT skills, digital literacy,
            and cybersecurity awareness, while fostering innovation, sustainable
            careers, and practical digital solutions that contribute to national
            development.
          </p>
          <p>
            The organization offers programs in web &amp; mobile app development,
            systems analysis, networking, cybersecurity, community digital
            literacy, and digital financial safety, alongside scholarships and
            mentorship for underprivileged students. By combining training,
            innovation, consultancy, and outreach, MDICC aims to build a
            digitally skilled, cyber-secure, and inclusive Malawi, aligned with
            Malawi Vision 2063 — particularly in the areas of human capital
            development, technology &amp; innovation, and inclusive economic
            participation.
          </p>
        </AnimatedSection>

        <AnimatedSection id="problem-statement">
          <h2>Problem Statement</h2>
          <p>
            Despite increasing connectivity, Malawi continues to face
            significant digital inclusion challenges that hinder economic
            participation and personal safety:
          </p>
          <h3>Low Digital Skills &amp; Literacy</h3>
          <ul>
            <li>
              Only about 1.4 % of Malawians possess higher‑level digital
              expertise, limiting their ability to participate in the modern
              economy.
            </li>
            <li>
              Millions of learners in rural areas still lack access to computers
              and reliable internet connectivity, underscoring a deep
              urban–rural digital divide.
            </li>
          </ul>
          <h3>Limited Internet Penetration &amp; Barriers</h3>
          <p>
            Internet penetration in Malawi remains below regional averages due
            to high costs, limited infrastructure, and geographic challenges —
            restricting access to online learning, jobs, information, and
            services.
          </p>
          <h3>Rising Digital Financial Crime</h3>
          <ul>
            <li>
              In 2024, an estimated 27,767 people were reported victims of mobile
              money fraud, resulting in losses of at least K185 million (~$140,000)
              between January and July alone.
            </li>
            <li>
              Previous reporting by regulators highlighted losses of around
              120 million kwacha per month from mobile money fraud.
            </li>
            <li>
              Many scams involve fraudsters posing as trusted financial or
              mobile money providers, convincing victims to share sensitive
              information or transfer funds.
            </li>
          </ul>
          <p>
            These challenges significantly limit the ability of underprivileged
            youth and rural communities to gain meaningful employment, engage
            confidently in online services and digital markets, and protect
            themselves against financial exploitation.
          </p>
        </AnimatedSection>

        <AnimatedSection id="vision">
          <h2>Vision</h2>
          <div className="section-highlight">
            <p>
              To build a digitally skilled, cyber-secure, and inclusive Malawi by
              empowering underprivileged communities with technology knowledge,
              skills, and access to ICT opportunities, contributing to national
              transformation as outlined in Malawi Vision 2063.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection id="mission">
          <h2>Mission</h2>
          <div className="section-highlight">
            <p>
              To provide accessible ICT training, digital literacy, and
              cybersecurity awareness to underserved youth and communities, while
              fostering innovation, employment opportunities, and sustainable ICT
              solutions that support national economic development and
              inclusion.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection id="objectives">
          <h2>Core Objectives</h2>
          <h3>ICT Training, Scholarships &amp; Mentorship</h3>
          <p>
            Equip underprivileged students and youth with practical ICT skills
            (web/mobile development, networking, cybersecurity). Provide
            scholarships and mentorship pathways toward careers and further
            education.
          </p>
          <h3>Digital Literacy &amp; Cybersecurity Awareness</h3>
          <p>
            Improve basic digital literacy for rural and low-income communities.
            Raise awareness and resilience against online threats, including
            scams and digital financial fraud.
          </p>
          <h3>Innovation &amp; Practical ICT Solutions</h3>
          <p>
            Support development of technology solutions for local challenges.
            Offer affordable ICT consultancy (websites, systems, networks,
            cybersecurity) to small businesses, NGOs, and institutions.
          </p>
        </AnimatedSection>

        <AnimatedSection id="programs">
          <h2>Key Focus Areas / Programs</h2>
          <div className="programs-grid">
            <article className="program-card">
              <span className="program-icon" aria-hidden>🌐</span>
              <h3>Software &amp; Systems Development</h3>
              <ul>
                <li>Web &amp; mobile application development</li>
                <li>Custom system design</li>
                <li>UI/UX and prototyping</li>
              </ul>
              <p>Tools: Django, React, Flutter, Git/GitHub, VS Code, Figma</p>
            </article>
            <article className="program-card">
              <span className="program-icon" aria-hidden>📡</span>
              <h3>Networking &amp; IT Infrastructure</h3>
              <ul>
                <li>Network setup &amp; maintenance</li>
                <li>Practical labs for hands-on learning</li>
              </ul>
              <p>Tools: Cisco Packet Tracer, GNS3, routers, switches, WiFi access points</p>
            </article>
            <article className="program-card">
              <span className="program-icon" aria-hidden>🔐</span>
              <h3>Cybersecurity &amp; Digital Safety</h3>
              <ul>
                <li>Cybersecurity awareness &amp; safe internet use</li>
                <li>Ethical hacking basics</li>
              </ul>
              <p>Tools: Kali Linux, Wireshark, virtual labs</p>
            </article>
            <article className="program-card">
              <span className="program-icon" aria-hidden>💻</span>
              <h3>Digital Literacy &amp; Community Outreach</h3>
              <ul>
                <li>Basic computer skills</li>
                <li>Safe digital communication</li>
                <li>Workshops in rural communities</li>
              </ul>
              <p>Tools: Computers, projectors, LibreOffice/Microsoft Office</p>
            </article>
            <article className="program-card">
              <span className="program-icon" aria-hidden>🎓</span>
              <h3>Training &amp; Scholarship Programs</h3>
              <ul>
                <li>Bootcamps in web/mobile, networking, cybersecurity</li>
                <li>Scholarships for underprivileged youth</li>
                <li>Internship &amp; mentorship pathways</li>
              </ul>
            </article>
            <article className="program-card">
              <span className="program-icon" aria-hidden>🔬</span>
              <h3>Innovation &amp; Research Hub</h3>
              <ul>
                <li>Prototype solutions for education, agriculture, health</li>
                <li>Collaboration with universities &amp; tech partners</li>
              </ul>
              <p>Potential Partner: Mzuzu University</p>
            </article>
          </div>
        </AnimatedSection><AnimatedSection id="team">
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={teamMembers[currentIndex].photo} alt={teamMembers[currentIndex].name} className="team-photo" />
              <h3>{teamMembers[currentIndex].name}</h3>
              <p>{teamMembers[currentIndex].role}</p>
            </div>
          </div>
        </AnimatedSection>



        <AnimatedSection id="contact">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <p><strong>Email:</strong> <a href="mailto:info@mdicc.mw">info@mdicc.mw</a></p>
            <p><strong>Phone:</strong> <a href="tel:+2651234567">+265 1 234 567</a></p>
            <p><strong>Location:</strong> Malawi</p>
          </div>
        </AnimatedSection>

        
      </main>

      <Footer />
    </>
  );
}

export default App;
