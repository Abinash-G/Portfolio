import React, { useState, useEffect } from 'react';
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaFileAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTimes,
  FaDownload,
  FaExternalLinkAlt,
  FaChevronDown,
  FaCloud,
  FaDesktop,
  FaLayerGroup,
  FaNetworkWired,
  FaShieldAlt,
  FaPython,
  FaJava,
  FaLinux,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaAward,
  FaHeart,
  FaInstagram,
  FaDiscord,
  FaWhatsapp,
  FaAws,
  FaGamepad,
  FaTerminal,
  FaArrowLeft,
  FaFolderOpen,
  FaServer,
  FaChartPie,
  FaCogs,
  FaUserSecret,
  FaRobot,
  FaBoxOpen,
  FaLock,
  FaDatabase,
  FaUserCircle,
  FaChevronLeft
} from 'react-icons/fa';
import { FaAtlassian, FaFileLines, FaFloppyDisk, FaHouseChimneyUser, FaSquareArrowUpRight, FaXmark, FaXTwitter } from 'react-icons/fa6';

// --- HELPER FUNCTION FOR PROGRESS BAR COLOR ---
const getProgressColor = (percentage) => {
  if (percentage < 25) return 'bg-danger';
  if (percentage < 50) return 'bg-success';
  if (percentage <= 75) return 'bg-white';
  return 'bg-primary';
};

// --- CONFIGURATION & CONTENT DATA ---
const RESUME_PDF_URL = "Resume.pdf";

const portfolioData = {
  socials: [
    { name: "Github", icon: <FaGithub size={24} />, link: "https://github.com/abinash-g/", color: "text-white" },
    { name: "Discord", icon: <FaDiscord size={24} />, link: "https://discord.com/users/1090237597651046440/", color: "text-info" },
    { name: "Instagram", icon: <FaInstagram size={24} />, link: "https://www.instagram.com/abinash_.g/", color: "text-danger" },
    { name: "X (Twitter)", icon: <FaXTwitter size={24} />, link: "https://twitter.com/yourhandle", color: "text-white" },
    { name: "LinkedIn", icon: <FaLinkedin size={24} />, link: "https://linkedin.com/in/abinash-g-051b92376/", color: "text-primary" },
    { name: "Naukri", icon: <FaBriefcase size={24} />, link: "https://www.naukri.com/mnjuser/profile", color: "text-warning" },
    { name: "WhatsApp", icon: <FaWhatsapp size={24} />, link: "https://wa.me/919360222849", color: "text-success" },
    { name: "Email", icon: <FaEnvelope size={24} />, link: "mailto:abimadhu55555@gmail.com", color: "text-light" }
  ],

  philosophy: [
    { title: "Vision", desc: "Creating digital experiences that feel smooth, human, and beautifully functional." },
    { title: "Approach", desc: "Mixing logic, creativity, and clean design to solve problems without overthinking." },
    { title: "Impact", desc: "Building things that actually help people and make the digital world feel nicer." }
  ],

  about: {
    intro: "I’m a Production Engineering graduate (2025) from Government College of Technology, Coimbatore. I work well with teams, adapt quickly, and love building cool things. I’m looking for a beginner role where I can learn fast and contribute meaningfully.",
    image: "Profile.jpg",
    location: "Tindivanam, India",
    email: "abimadhu55555@gmail.com",
    education: [
      { degree: "B.E. Production Engineering", school: "Government College of Technology, Coimbatore", year: "2020 - 2025", score: "76%" },
      { degree: "Higher Secondary", school: "Chanakya Matric Higher Secondary School", year: "2018 - 2020", score: "81%" },
      { degree: "SSLC", school: "Chanakya Matric Higher Secondary School", year: "2017 - 2018", score: "89%" }
    ],
    academicProjects: [
      { title: "WEDM Parameter Analysis (Major)", desc: "Studied how machining parameters affect SS304 using Wire EDM.", link: "#" },
      { title: "Sheet Metal Machine (Mini)", desc: "Designed and built a multipurpose sheet metal operation machine.", link: "#" }
    ],
    interests: ["Video Editing", "Photo Editing", "Game Modding", "Teamwork", "Adaptability"]
  },

  skills: [
    { name: "Cloud / AWS", percentage: 85, icon: <FaAws size={32} className="text-info" /> },
    { name: "Front End", percentage: 90, icon: <FaGamepad size={32} className="text-warning" /> },
    { name: "Full Stack", percentage: 70, icon: <FaLayerGroup size={32} className="text-success" /> },
    { name: "Networking", percentage: 80, icon: <FaNetworkWired size={32} className="text-primary" /> },
    { name: "Cyber Security", percentage: 80, icon: <FaShieldAlt size={32} className="text-danger" /> },
    { name: "Python", percentage: 80, icon: <FaPython size={32} className="text-warning" /> },
    { name: "Java", percentage: 60, icon: <FaJava size={32} className="text-white" /> },
    { name: "Linux", percentage: 75, icon: <FaTerminal size={32} className="text-light" /> }
  ],

  // UPDATED PROJECTS STRUCTURE: Added unique icons to the 'list' items
  projectCategories: [
    {
      id: "cloud",
      title: "Cloud Project",
      icon: <FaCloud size={32} className="text-info" />,
      desc: "AWS & Cloud Infrastructure",
      list: [
        { title: "S3 Website Hosting", icon: <FaAws size={28} className="text-warning" />, desc: "Hosted a static website on Amazon S3.", link: "https://abi-gaming.s3.ap-south-1.amazonaws.com/index.html" },
        { title: "EC2 Instance Setup", icon: <FaServer size={28} className="text-light" />, desc: "Configured a Linux web server on AWS EC2.", link: "#" },
      ]
    },
    {
      id: "frontend",
      title: "Front End",
      icon: <FaGamepad size={32} className="text-warning" />,
      desc: "React & Interactive UI",
      list: [
        { title: "Gaming Website", icon: <FaGamepad size={28} className="text-danger" />, desc: "A stylish and immersive gaming-themed site.", link: "https://abinash-g.github.io/gaming-site/Login.html" },
        { title: "Dashboard UI", icon: <FaChartPie size={28} className="text-info" />, desc: "A clean glassmorphism dashboard concept.", link: "#" }
      ]
    },
    {
      id: "fullstack",
      title: "Full Stack",
      icon: <FaLayerGroup size={32} className="text-success" />,
      desc: "MERN & Integrated Systems",
      list: [
        { title: "Integrated Systems", icon: <FaCogs size={28} className="text-white" />, desc: "A complete production management system.", link: "#" }
      ]
    },
    {
      id: "network",
      title: "Networking",
      icon: <FaNetworkWired size={32} className="text-primary" />,
      desc: "Infrastructure Design",
      list: [
        { title: "Home Lab Setup", icon: <FaNetworkWired size={28} className="text-primary" />, desc: "Created VLANs and secure routing for a home network.", link: "#" }
      ]
    },
    {
      id: "cyber",
      title: "Cyber Security",
      icon: <FaShieldAlt size={32} className="text-danger" />,
      desc: "Security Analysis",
      list: [
        { title: "Network Pentest", icon: <FaUserSecret size={28} className="text-danger" />, desc: "Performed a vulnerability assessment and documented findings.", link: "#" }
      ]
    },
    {
      id: "python",
      title: "Python",
      icon: <FaPython size={32} className="text-warning" />,
      desc: "Automation Scripts",
      list: [
        { title: "Data Scraper", icon: <FaRobot size={28} className="text-info" />, desc: "Script that automates web data extraction.", link: "#" },
        { title: "Discord Bot", icon: <FaDiscord size={28} className="text-primary" />, desc: "A bot for moderation and music playback.", link: "#" }
      ]
    },
    {
      id: "java",
      title: "Java",
      icon: <FaJava size={32} className="text-white" />,
      desc: "Enterprise Apps",
      list: [
        { title: "Inventory Mgmt", icon: <FaBoxOpen size={28} className="text-warning" />, desc: "A desktop app for tracking stock and inventory.", link: "#" }
      ]
    },
    {
      id: "linux",
      title: "Linux",
      icon: <FaTerminal size={32} className="text-light" />,
      desc: "System Admin",
      list: [
        { title: "Bash Suite", icon: <FaTerminal size={28} className="text-success" />, desc: "Automated scripts for server maintenance.", link: "#" }
      ]
    }
  ]
};

const themeConfig = {
  bgImage: "https://www.hdwallpapers.in/download/calm_body_of_water_beach_with_slanting_palm_tree_with_reflection_on_beach_sand_4k_hd_beach-1280x720.jpg"
};

const styles = `
/* Import Nunito Font */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');

/* Custom Font - Panther */
@font-face {
    font-family: 'Panther';
    src: url('./Panther.ttf') format('truetype');
}

@font-face {
    font-family: 'Aquatico';
    src: url('./Aquatico.otf') format('opentype');
}

.panther {
    font-family: 'Panther', 'Nunito', sans-serif !important;
    letter-spacing: 1px;
}

.aquatico {
    font-family: 'Aquatico', 'Nunito', sans-serif !important;
    letter-spacing: 1px;
}

/* Animation Keyframes */
@keyframes slideInFromRight {
    0% { opacity: 0; transform: translateX(100%) scale(0.9) skewX(-10deg); filter: blur(3px); }
    100% { opacity: 1; transform: translateX(0) scale(1) skewX(0); filter: blur(0); }
}
@keyframes slideInFromLeft {
    0% { opacity: 0; transform: translateX(-100%) scale(0.9) skewX(10deg); filter: blur(3px); }
    100% { opacity: 1; transform: translateX(0) scale(1) skewX(0); filter: blur(0); }
}
@keyframes slideInFromTopLeft {
    0% { opacity: 0; transform: translate(-100%, -25%) scale(0.9); filter: blur(3px); }
    100% { opacity: 1; transform: translate(0, 0) scale(1); filter: blur(0); }
}
@keyframes slideInFromBottomLeft {
    0% { opacity: 0; transform: translate(-100%, 25%) scale(0.9); filter: blur(3px); }
    100% { opacity: 1; transform: translate(0, 0) scale(1); filter: blur(0); }
}
@keyframes slideInFromTopRight {
    0% { opacity: 0; transform: translate(100%, -25%) scale(0.9); filter: blur(3px); }
    100% { opacity: 1; transform: translate(0, 0) scale(1); filter: blur(0); }
}
@keyframes slideInFromBottomRight {
    0% { opacity: 0; transform: translate(100%, 25%) scale(0.9); filter: blur(20px); }
    100% { opacity: 1; transform: translate(0, 0) scale(1); filter: blur(0); }
}
@keyframes slideInFromBottom {
    0% { opacity: 0; transform: translateY(100vh) scale(0.9); filter: blur(10px); }
    100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
}
@keyframes slideInFromTop {
    0% { opacity: 0; transform: translateY(-100vh) scale(0.9); filter: blur(10px); }
    100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
}
@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

@keyframes snapIn {
  0% { 
    opacity: 0; 
    transform: translateY(20px); /* Starts slightly lower */
  }
  100% { 
    opacity: 1; 
    transform: translateY(0); /* Moves to original position */
  }
}

@keyframes bounce-down {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(3px); }
}

@keyframes popUp {
    0% { transform: translateY(100px) scale(0.5); opacity: 0; }
    60% { transform: translateY(-10px) scale(1.1); opacity: 1; }
    100% { transform: translateY(0) scale(1); opacity: 1; }
}

@keyframes mobilePop {
    0% { transform: scale(0.1); opacity: 0; }
    80% { transform: scale(1.02); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
}

@keyframes popInLeft {
    0% { transform: translateX(-100px) scale(0.5); opacity: 0; }
    60% { transform: translateX(10px) scale(1.1); opacity: 1; }
    100% { transform: translateX(0) scale(1); opacity: 1; }
}

@keyframes popInRight {
    0% { transform: translateX(100px) scale(0.5); opacity: 0; }
    60% { transform: translateX(-10px) scale(1.1); opacity: 1; }
    100% { transform: translateX(0) scale(1); opacity: 1; }
}

/* Fade In for Inner Content Switching */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.fade-in-content {
    animation: fadeIn 0.4s ease-out forwards;
}

.mobile-nav-item {
    animation: popUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    opacity: 0; 
}

.desktop-nav-left {
    animation: popInLeft 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    opacity: 0;
}

.desktop-nav-right {
    animation: popInRight 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    opacity: 0;
}

.snap-in {
  opacity: 0;
  animation: snapIn 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.animate-page-enter-right { animation: slideInFromRight 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
.animate-page-enter-left { animation: slideInFromLeft 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
.animate-page-enter-top-left { animation: slideInFromTopLeft 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
.animate-page-enter-bottom-left { animation: slideInFromBottomLeft 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
.animate-page-enter-top-right { animation: slideInFromTopRight 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
.animate-page-enter-bottom-right { animation: slideInFromBottomRight 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
.animate-page-enter-bottom { animation: slideInFromBottom 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
.animate-page-enter-top { animation: slideInFromTop 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }

.typing-cursor::after {
    content: '|';
    position: relative;
    top:-3px;
    animation: blink 0.5s step-end infinite;
    margin-left: 4px;
    color: #60a5fa;
}

.glass-panel {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}

.glass-button {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: white !important;
}

.glass-button:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: scale(1.1);
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    color: white !important;
}

.glass-button.active {
    background: rgba(255, 255, 255, 0.4);
    border-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    color: white !important;
}

.btn-minimal {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.4);
    transition: all 0.3s ease;
    padding: 10px;
    border-radius: 50%;
    z-index: 2005;
}

.btn-minimal:hover {
    color: white;
}

.glass-pill {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    color: white !important;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.glass-pill:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    color: white !important;
}

.glass-pill:hover .chevron-anim {
    animation: bounce-down 1s infinite;
}

.glass-pill:active {
    transform: scale(0.95) !important;
}

.project-card {
  transition: transform 0.3s ease, background 0.3s ease;
  cursor: pointer;
}
.project-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.nav-group { position: relative; display: flex; align-items: center; }
.nav-tooltip {
    position: absolute;
    padding: 0.25rem 0.75rem;
    font-size: 0.875rem;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    pointer-events: none;
    color: white;
}
.nav-group:hover .nav-tooltip { opacity: 1; }
.nav-tooltip-left { left: 100%; margin-left: 1rem; transform: translateX(-0.5rem); }
.nav-group:hover .nav-tooltip-left { transform: translateX(0); }
.nav-tooltip-right { right: 100%; margin-right: 1rem; transform: translateX(0.5rem); }
.nav-group:hover .nav-tooltip-right { transform: translateX(0); }

.bg-cover-center { background-size: cover; background-position: center; background-repeat: no-repeat; }
.text-shadow { text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); }
.explore-overlay {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 2000;
    background: rgba(0, 0, 0, 0.9); backdrop-filter: blur(25px); overflow-y: auto;
}

@media (max-width: 768px) {
    .nav-dock-mobile {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        flex-direction: row !important;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(15px);
        border-radius: 50px;
        padding: 8px 15px;
        width: auto;
        min-width: 300px;
        max-width: 95%;
        justify-content: space-between !important;
        z-index: 1000;
        border: 1px solid rgba(255, 255, 255, 0.15);
        height: auto;
        gap: 10px;
    }

    .glass-button {
        width: 45px !important;
        height: 45px !important;
        padding: 10px !important;
        flex-shrink: 0;
    }

    .nav-tooltip { display: none; }

    .main-content-wrapper {
        padding: 20px !important;
        padding-bottom: 90px !important; 
        align-items: center !important;
        justify-content: center !important;
    }

    .content-glass-card {
        max-height: 80vh !important;
        overflow-y: auto !important;
        padding-bottom: 20px !important;
    }
    
    .btn-minimal {
        top: 1rem;
        right: 1rem;
    }

    .animate-page-enter-top-left,
    .animate-page-enter-left,
    .animate-page-enter-bottom-left,
    .animate-page-enter-top-right,
    .animate-page-enter-right,
    .animate-page-enter-bottom-right
    {
        animation-name: mobilePop !important;
        animation-duration: 0.6s !important;
    }

    .animate-page-enter-top-left { transform-origin: 15% 100% !important; }
    .animate-page-enter-left { transform-origin: 30% 100% !important; }
    .animate-page-enter-bottom-left { transform-origin: 45% 100% !important; }
    .animate-page-enter-top-right { transform-origin: 60% 100% !important; }
    .animate-page-enter-right { transform-origin: 75% 100% !important; }
    .animate-page-enter-bottom-right { transform-origin: 90% 100% !important; }
}
`;

// --- PROJECT EXPLORER COMPONENT ---
// This handles switching between the Category Grid and the Project List
const ProjectExplorer = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // If a category is selected, show the list of projects
  if (selectedCategory) {
    return (
      <div className="container py-5 fade-in-content">
        <div className="d-flex align-items-center mb-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className="btn glass-button text-secondary p-1 me-3 d-flex align-items-center justify-content-center"
            style={{ width: '40px', height: '40px' }}
          >
            <FaChevronLeft />
          </button>
          <div>
            <h2 className="display-6 fw-bold text-white mb-0 panther">{selectedCategory.title}</h2>
            <p className="text-white-50 mb-0 small">
              {selectedCategory.list.length} Project{selectedCategory.list.length !== 1 ? 's' : ''} Found
            </p>
          </div>
        </div>

        <div className="row g-4">
          {selectedCategory.list.length > 0 ? (
            selectedCategory.list.map((proj, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <a
                  href={proj.link}
                  target={proj.link !== '#' ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div className="glass-panel project-card p-4 rounded-4 h-100 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      {/* UPDATED: Uses the unique project icon, defaults to category icon if missing */}
                      <div className={`p-3 rounded-circle bg-white bg-opacity-10`}>
                        {proj.icon ? proj.icon : selectedCategory.icon}
                      </div>
                      {proj.link !== '#' && <FaExternalLinkAlt className="text-white-50" />}
                    </div>
                    <h5 className="text-white fw-bold">{proj.title}</h5>
                    <p className="text-white-50 small mb-0 mt-auto pt-3">{proj.desc}</p>
                  </div>
                </a>
              </div>
            ))
          ) : (
            <div className="col-12 text-center text-white-50 py-5">
              <FaFolderOpen size={48} className="mb-3 opacity-50" />
              <p>No projects listed in this category yet.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default View: Show Categories
  return (
    <div className="container py-5 fade-in-content text-center">
      <h2 className="display-5 fw-bold mb-5 text-white snap-in aquatico" style={{ '--r': '0deg', '--x': '0px', '--y': '-40px', animationDelay: '0.1s' }}>My Projects</h2>
      <div className="row g-4 justify-content-center">
        {categories.map((item, i) => {
          const angle = (i % 2 === 0 ? -3 : 3) + (i % 3 === 0 ? 2 : -2);
          const tx = (i % 2 === 0 ? 10 : -10);
          const ty = (i % 4) * 10 - 20;
          const delay = 0.2 + (i * 0.1);
          const count = item.list ? item.list.length : 0;

          return (
            <div key={i} className="col-6 col-md-3 snap-in" style={{
              '--r': `${angle}deg`,
              '--x': `${tx}px`,
              '--y': `${ty}px`,
              animationDelay: `${delay}s`
            }}>
              <div
                onClick={() => setSelectedCategory(item)}
                className="glass-panel project-card p-4 rounded-4 h-100 d-flex flex-column align-items-center justify-content-center text-center"
              >
                <div className="mb-3 p-3 rounded-circle bg-white bg-opacity-10 position-relative">
                  {item.icon}
                  {/* Project Count Badge */}
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark border border-dark">
                    {count}
                    <span className="visually-hidden">projects</span>
                  </span>
                </div>
                <h5 className="text-white fw-bold mb-2">{item.title}</h5>
                <p className="small text-white-50 m-0">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


// --- PAGE DEFINITIONS ---
const pages = {
  home: {
    title: "ABINASH",
    subtitle: "Creative Developer & Designer",
    content: "I build digital experiences that blend creativity and code. Explore my work and see how I turn ideas into smooth, interactive designs.",
    icon: <FaAtlassian size={24} />,
    side: 'left',
    animationDirection: 'top-left',
    exploreContent: (
      <div className="container text-center py-5">
        <h2 className="display-4 fw-bold mb-5 text-white snap-in aquatico" style={{ '--r': '-5deg', '--x': '0px', '--y': '-50px', animationDelay: '0.1s' }}>My Philosophy</h2>
        <div className="row g-4">
          {portfolioData.philosophy.map((item, i) => {
            const angle = (i % 2 === 0 ? 15 : -15) + (i * 5);
            const tx = (i % 2 === 0 ? -30 : 30);
            const ty = (i * 20) - 20;
            const delay = 0.3 + (i * 0.2);

            return (
              <div key={i} className="col-md-4 snap-in" style={{
                '--r': `${angle}deg`,
                '--x': `${tx}px`,
                '--y': `${ty}px`,
                animationDelay: `${delay}s`
              }}>
                <div className="glass-panel p-4 rounded-4 h-100">
                  <h3 className="h5 text-white mb-3">{item.title}</h3>
                  <p className="text-white-50">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  },
  about: {
    title: "About Me",
    subtitle: "The Person Behind the Code",
    content: portfolioData.about.intro,
    icon: <FaUserCircle size={24} />,
    side: 'left',
    animationDirection: 'left',
    exploreContent: (
      <div className="container py-5">
        <div className="row g-4">
          {/* Profile Section */}
          <div className="col-lg-4 text-center">
            <div className="glass-panel p-4 rounded-4 snap-in" style={{ '--r': '2deg', '--x': '-10px', '--y': '10px', animationDelay: '0.1s' }}>
              <img src={portfolioData.about.image} alt="Profile" className="img-fluid mb-3 border border-3 border-white border-opacity-25" style={{ width: '180px', height: '180px', objectFit: 'cover', borderRadius: '34% 66% 70% 30% / 48% 35% 65% 52% ' }} />
              <h3 className="h4 fw-bold text-white mb-1 panther">Abinash G</h3>
              <p className="text-info small mb-3">Production Engineer</p>

              <div className="d-flex flex-column gap-2 text-start small text-white-50">
                <div className="d-flex align-items-center gap-2">
                  <FaMapMarkerAlt size={16} className="text-white" /> {portfolioData.about.location}
                </div>
                <div className="d-flex align-items-center gap-2">
                  <FaEnvelope size={16} className="text-white" /> {portfolioData.about.email}
                </div>
              </div>
            </div>

            {/* Interests / Soft Skills */}
            <div className="glass-panel p-4 rounded-4 mt-3 snap-in" style={{ '--r': '-2deg', '--x': '10px', '--y': '-10px', animationDelay: '0.3s' }}>
              <h5 className="aquatico text-white mb-3 d-flex align-items-center gap-2"><FaHeart size={18} className="text-danger me-1" />Soft Skills</h5>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {portfolioData.about.interests.map((int, i) => (
                  <span key={i} className="btn badge bg-white bg-opacity-10 rounded-pill fw-normal border border-white border-opacity-25">{int}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="col-lg-8">
            <div className="row g-3">
              {/* Education */}
              <div className="col-12 snap-in" style={{ '--r': '0deg', '--x': '0px', '--y': '20px', animationDelay: '0.2s' }}>
                <div className="glass-panel p-4 rounded-4 h-100">
                  <h4 className="aquatico text-white mb-4 d-flex align-items-center gap-2 border-bottom border-white border-opacity-10 pb-2">
                    <FaGraduationCap className="text-warning me-1" /> Education
                  </h4>
                  <div className="d-flex flex-column gap-4">
                    {portfolioData.about.education.map((edu, i) => (
                      <div key={i} className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-2">
                        <div>
                          <h5 className="h6 text-white fw-bold mb-1">{edu.degree}</h5>
                          <p className="text-white-50 small mb-0">{edu.school}</p>
                        </div>
                        <div className="text-md-end">
                          <span className="badge bg-primary bg-opacity-50 mb-1">{edu.year}</span>
                          <div className="text-white small fw-bold">Score: {edu.score}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Academic Projects */}
              <div className="col-12 snap-in" style={{ '--r': '0deg', '--x': '0px', '--y': '30px', animationDelay: '0.4s' }}>
                <div className="glass-panel p-4 rounded-4 h-100">
                  <h4 className="aquatico text-white mb-4 d-flex align-items-center gap-2 border-bottom border-white border-opacity-10 pb-2">
                    <FaAward className="text-success" /> Academic Projects
                  </h4>
                  <div className="row g-3">
                    {portfolioData.about.academicProjects.map((proj, i) => (
                      <div key={i} className="col-md-6">
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                          <div className="glass-panel project-card p-4 rounded-4 h-100">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <h6 className="text-white fw-bold mb-0">{proj.title}</h6>
                              <FaExternalLinkAlt size={16} className="text-white-50" />
                            </div>
                            <p className="text-white-50 small mb-0">{proj.desc}</p>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  skills: {
    title: "My Skills",
    subtitle: "Tools I Use",
    content: "I work with React, Node.js, Bootstrap, Python, and more. I keep learning new tools to stay ahead and build better things.",
    icon: <FaCode size={24} />,
    side: 'left',
    animationDirection: 'bottom-left',
    exploreContent: (
      <div className="container py-5 text-center">
        <h2 className="display-5 fw-bold text-white mb-5 snap-in aquatico" style={{ '--r': '0deg', '--x': '0px', '--y': '-40px', animationDelay: '0.1s' }}>Technical Skills</h2>
        <div className="row g-4">
          {portfolioData.skills.map((skill, i) => {
            const angle = (i % 2 === 0 ? 10 : -10) + (i * 3);
            const tx = (i % 3 === 0 ? -20 : 20);
            const ty = (i * 15) - 30;
            const delay = 0.2 + (i * 0.15);
            return (
              <div key={i} className="col-6 col-md-3 snap-in" style={{
                '--r': `${angle}deg`,
                '--x': `${tx}px`,
                '--y': `${ty}px`,
                animationDelay: `${delay}s`
              }}>
                <div className="glass-panel p-4 rounded-3 text-center h-100 d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-2">
                    {skill.icon}
                  </div>
                  <h4 className="fw-bold text-white h6 mb-2">{skill.name}</h4>

                  <div className="progress w-100 mt-2" style={{ height: '6px', background: 'rgba(255,255,255,0.1)' }}>
                    <div
                      className={`progress-bar ${getProgressColor(skill.percentage)}`}
                      style={{ width: `${skill.percentage}%` }}
                      aria-valuenow={skill.percentage}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  },
  projects: {
    title: "Projects",
    subtitle: "Recent Work",
    content: "From UI design to cloud setups and automation scripts — here’s a quick look at the things I’ve built.",
    icon: <FaBriefcase size={24} />,
    side: 'right',
    animationDirection: 'top-right',
    // Now we use the component here
    exploreContent: <ProjectExplorer categories={portfolioData.projectCategories} />
  },
  resume: {
    title: "Resume",
    subtitle: "My Professional Journey",
    content: "You can check out my experience, education, and skills here. Download my CV for the full details.",
    icon: <FaFileLines size={24} />,
    side: 'right',
    animationDirection: 'right',
    exploreContent: (
      <div className="container py-5 text-center h-100 d-flex flex-column justify-content-center">
        <h2 className="display-5 fw-bold text-white mb-4 snap-in panther" style={{ '--r': '0deg', '--x': '0px', '--y': '-30px', animationDelay: '0.1s' }}>My Curriculum Vitae</h2>
        <div className="glass-panel p-5 rounded-4 mx-auto snap-in" style={{ maxWidth: '600px', '--r': '3deg', '--x': '0px', '--y': '40px', animationDelay: '0.3s' }}>
          <FaFileLines size={64} className="text-white mb-4" />
          <h3 className="text-white mb-3">Abinash's Resume</h3>
          <p className="text-white-50 mb-4">
            Click below to view the PDF directly or download it to your device.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href={RESUME_PDF_URL} target="_blank" rel="noopener noreferrer" className="btn btn-light rounded-pill px-4 py-2 fw-bold d-flex align-items-center gap-2">
              <FaSquareArrowUpRight size={18} /> View
            </a>
            <a href={RESUME_PDF_URL} download className="btn btn-outline-light rounded-pill px-4 py-2 fw-bold d-flex align-items-center gap-2">
              <FaFloppyDisk size={18} /> Save
            </a>
          </div>
        </div>
      </div>
    )
  },
  contact: {
    title: "Contact",
    subtitle: "Let’s Discuss Together",
    content: "Do you like my project? Feel free to reach out. I’m always open to discuss and talk.",
    icon: <FaEnvelope size={24} />,
    side: 'right',
    animationDirection: 'bottom-right',
    exploreContent: (
      <div className="container py-5 text-center">
        <h2 className="display-5 fw-bold text-white mb-5 snap-in aquatico" style={{ '--r': '0deg', '--x': '0px', '--y': '-40px', animationDelay: '0.1s' }}>Connect With Me</h2>
        <div className="row g-4 justify-content-center">
          {portfolioData.socials.map((social, i) => {
            const angle = (i % 2 === 0 ? 3 : -3);
            const tx = (i % 2 === 0 ? 5 : -5);
            const delay = 0.1 + (i * 0.05);

            return (
              <div key={i} className="col-6 col-md-3 snap-in" style={{
                '--r': `${angle}deg`,
                '--x': `${tx}px`,
                '--y': '10px',
                animationDelay: `${delay}s`
              }}>
                <a href={social.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <div className="glass-panel project-card p-4 rounded-4 h-100 d-flex flex-column align-items-center justify-content-center gap-3">
                    <div className={`p-3 rounded-circle bg-white bg-opacity-10 ${social.color}`}>
                      {React.cloneElement(social.icon, { size: 32 })}
                    </div>
                    <span className="fw-bold text-white">{social.name}</span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    )
  }
};

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('home');
  const [direction, setDirection] = useState('bottom');
  const [key, setKey] = useState(0);
  const [showExplore, setShowExplore] = useState(false);
  const [line1, setLine1] = useState('');

  useEffect(() => {
    const text1 = "Welcome to the portfolio of";
    let timer;
    const typeWriter = (i1) => {
      if (i1 <= text1.length) {
        setLine1(text1.slice(0, i1));
        const delay = Math.random() * 100 + 50;
        timer = setTimeout(() => typeWriter(i1 + 1), delay);
      } else {
        timer = setTimeout(() => setLoading(false), 800);
      }
    };
    timer = setTimeout(() => typeWriter(0), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!document.querySelector('link[href*="bootstrap"]')) {
      const link = document.createElement('link');
      link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  }, []);

  const handleNavClick = (pageKey) => {
    if (pageKey === activePage) return;
    setDirection(pages[pageKey].animationDirection);
    setActivePage(pageKey);
    setKey(prev => prev + 1);
  };

  const handleExploreClick = () => setShowExplore(true);
  const handleCloseExplore = () => {
    setDirection('top');
    setKey(prev => prev + 1);
    setShowExplore(false);
  };

  const currentPage = pages[activePage];

  const getAnimationClass = () => {
    switch (direction) {
      case 'bottom': return 'animate-page-enter-bottom';
      case 'top': return 'animate-page-enter-top';
      case 'left': return 'animate-page-enter-left';
      case 'top-left': return 'animate-page-enter-top-left';
      case 'bottom-left': return 'animate-page-enter-bottom-left';
      case 'right': return 'animate-page-enter-right';
      case 'top-right': return 'animate-page-enter-top-right';
      case 'bottom-right': return 'animate-page-enter-bottom-right';
      default: return 'animate-page-enter-bottom';
    }
  };

  return (
    <div className="position-relative w-100 vh-100 overflow-hidden text-white bg-black" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <style>{styles}</style>

      {/* Backgrounds */}
      <div className="position-fixed top-0 start-0 w-100 h-100 z-0 bg-cover-center" style={{ backgroundImage: `url("${themeConfig.bgImage}")`, filter: 'brightness(0.9) blur(3px)', transition: 'transform 10s ease' }} />
      <div className="position-fixed top-0 start-0 w-100 h-100 z-0 pe-none" style={{ background: 'linear-gradient(to bottom right, rgba(30,58,138,0.4), transparent, rgba(0,0,0,0.8))' }} />

      {/* Loading */}
      {loading && (
        <div className="position-fixed top-0 start-0 w-100 h-100 z-3 d-flex align-items-center justify-content-center" style={{ zIndex: 9999, backdropFilter: 'blur(20px)', backgroundColor: 'rgba(0,0,0,0.85)' }}>
          <div className="text-center">
            <p className="h4 text-uppercase letter-spacing-2 text-white mb-3 panther" style={{ letterSpacing: '2px', minHeight: '1.5em' }}>{line1}<span className="typing-cursor"></span></p>
          </div>
        </div>
      )}

      {/* Explore Overlay */}
      {showExplore && (
        <div className="explore-overlay animate-page-enter-bottom d-flex flex-column">
          {/* Header */}
          <div className="container-fluid py-4 d-flex justify-content-between align-items-center" style={{ zIndex: 2001 }}>
            <h3 className="m-0 ms-4 mt-2 fw-bold letter-spacing-2 text-uppercase text-white panther">{activePage}</h3>
            {/* Minimalist Close Button */}
            <button onClick={handleCloseExplore} className="btn-minimal">
              <FaXmark size={32} />
            </button>
          </div>

          {/* Main Overlay Content */}
          <div className="flex-grow-1 d-flex align-items-center text-white w-100">
            {currentPage.exploreContent}
          </div>

          {/* Social Footer in Overlay */}
          <div className="container-fluid py-4 d-flex justify-content-center d-none d-sm-flex">
            <div className="glass-panel px-4 py-2 rounded-pill d-flex gap-4 flex-wrap justify-content-center">
              {portfolioData.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none d-flex align-items-center gap-2 hover-scale transition p-1"
                  style={{ transition: 'transform 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  title={social.name}
                >
                  {React.cloneElement(social.icon, { size: 20 })}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      {!loading && !showExplore && (
        <>
          {/* Navigation Dock */}
          {/* DESKTOP SIDEBARS (Hidden on Mobile) */}
          <div className="d-none d-md-block position-absolute h-100 top-0 w-100 pe-none" style={{ zIndex: 50 }}>

            {/* Desktop Left */}
            <div className="position-absolute top-0 start-0 h-100 flex-column justify-content-center align-items-center gap-4 ps-5 pe-none d-flex">
              {Object.entries(pages).filter(([_, data]) => data.side === 'left').map(([key, data], index) => (
                <div key={key} className="nav-group pe-auto pointer-events-auto">
                  <span className="nav-tooltip nav-tooltip-left glass-panel rounded-2">{data.title}</span>
                  <button
                    onClick={() => handleNavClick(key)}
                    className={`glass-button p-3 desktop-nav-left ${activePage === key ? 'active' : ''}`}
                    style={{ width: '60px', height: '60px', animationDelay: `${index * 0.1}s` }}
                  >
                    {data.icon}
                  </button>
                </div>
              ))}
            </div>

            {/* Desktop Right */}
            <div className="position-absolute top-0 end-0 h-100 flex-column justify-content-center align-items-center gap-4 pe-5 pe-none d-flex">
              {Object.entries(pages).filter(([_, data]) => data.side === 'right').map(([key, data], index) => (
                <div key={key} className="nav-group pe-auto pointer-events-auto">
                  <span className="nav-tooltip nav-tooltip-right glass-panel rounded-2">{data.title}</span>
                  <button
                    onClick={() => handleNavClick(key)}
                    className={`glass-button p-3 desktop-nav-right ${activePage === key ? 'active' : ''}`}
                    style={{ width: '60px', height: '60px', animationDelay: `${index * 0.1}s` }}
                  >
                    {data.icon}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE BOTTOM DOCK (Hidden on Desktop, Separate from Desktop Wrapper) */}
          <div className="nav-dock-mobile d-flex d-md-none justify-content-between align-items-center pe-auto pointer-events-auto" style={{ zIndex: 50 }}>
            {Object.entries(pages).map(([key, data], index) => (
              <button
                key={key}
                onClick={() => handleNavClick(key)}
                className={`glass-button mobile-nav-item ${activePage === key ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {React.cloneElement(data.icon, { size: 20 })}
              </button>
            ))}
          </div>

          {/* Content Wrapper */}
          <div
            key={key}
            className={`main-content-wrapper position-absolute top-0 start-0 w-100 h-100 z-1 d-flex align-items-center justify-content-center p-3 ${getAnimationClass()}`}
            style={{ backgroundColor: 'rgba(0,0,0,0.0)', backdropFilter: 'blur(2px)' }}
          >
            <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 gap-md-5" style={{ maxWidth: '1000px' }}>

              {/* Desktop Big Icon */}
              <div className="d-none d-md-flex glass-panel p-5 rounded-circle shadow-lg text-info">
                {React.cloneElement(currentPage.icon, { size: 64 })}
              </div>

              {/* Mobile Small Icon */}
              <div className="d-flex d-md-none glass-panel p-3 rounded-circle shadow-lg text-info mb-3">
                {React.cloneElement(currentPage.icon, { size: 40 })}
              </div>

              {/* Text Card (Auto Adjust for Mobile) */}
              <div className="glass-panel content-glass-card w-100 p-4 p-md-5 rounded-4 d-flex flex-column align-items-start position-relative text-start">

                <span className="badge bg-primary bg-opacity-25 text-white mb-3 px-3 py-2 text-uppercase letter-spacing-2">
                  {activePage === 'home' ? 'PORTFOLIO' : activePage}
                </span>

                <h1 className={`${activePage === 'home' ? 'display-3 display-md-1 fw-bold' : 'display-5 display-md-4 fw-bold'} mb-3 text-shadow panther`}>
                  {currentPage.title}
                </h1>

                <h3 className="h5 h4-md text-white mb-3 fw-light aquatico">
                  {currentPage.subtitle}
                </h3>

                <p className="lead mb-4 fs-6 fs-md-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  {currentPage.content}
                </p>

                <div className="d-flex flex-wrap gap-3 mt-auto z-2">
                  <button
                    onClick={handleExploreClick}
                    className="btn btn-outline-light rounded-pill px-4 py-2 fw-bold glass-pill"
                    style={{ borderRadius: '50px' }}
                  >
                    EXPLORE <FaChevronDown size={18} className="ms-2 chevron-anim" />
                  </button>
                  {activePage === 'contact' && (
                    <div className="d-flex gap-2">
                      {portfolioData.socials.slice(0, 4).map((social, idx) => (
                        <a
                          key={idx}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass-button p-2 text-white"
                          style={{ width: '45px', height: '45px' }}
                          title={social.name}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const App = Home;
export default App;