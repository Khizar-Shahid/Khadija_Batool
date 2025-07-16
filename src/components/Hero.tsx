import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaLinkedin, FaTwitter, FaInstagram, FaBullhorn } from 'react-icons/fa';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Khadija Batool</span>
            </h1>
            <h2 className="hero-subtitle">
              Google & Facebook Ads Expert
            </h2>
            <p className="hero-description">
              I help businesses grow their online presence and drive results through 
              strategic digital advertising campaigns. Specializing in Google Ads and 
              Facebook Ads to maximize ROI and reach target audiences effectively.
            </p>
            <div className="hero-buttons">
              <motion.button
                className="btn btn-primary"
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                onClick={() => scrollToSection('portfolio')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Removed social-links block */}

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button onClick={() => scrollToSection('about')}>
            <FaArrowDown />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 