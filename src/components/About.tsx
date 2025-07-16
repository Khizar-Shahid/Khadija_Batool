import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUsers, FaBullseye, FaRocket } from 'react-icons/fa';
import './About.css';

const About: React.FC = () => {
  const stats = [
    { icon: <FaChartLine />, number: '500+', label: 'Campaigns Managed' },
    { icon: <FaUsers />, number: '200+', label: 'Happy Clients' },
    { icon: <FaBullseye />, number: '95%', label: 'Success Rate' },
    { icon: <FaRocket />, number: '5+', label: 'Years Experience' }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate digital marketing expert specializing in Google Ads and Facebook Ads
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Who I Am</h3>
            <p>
              I'm Khadija Batool, a dedicated digital marketing professional with over 5 years 
              of experience in creating and managing successful advertising campaigns. My passion 
              lies in helping businesses achieve their growth objectives through strategic 
              digital advertising.
            </p>
            
            <h3>What I Do</h3>
            <p>
              I specialize in Google Ads and Facebook Ads, creating targeted campaigns that 
              drive real results. From keyword research to ad copywriting, from audience 
              targeting to performance optimization, I handle every aspect of your digital 
              advertising needs.
            </p>

            <h3>My Approach</h3>
            <p>
              I believe in data-driven strategies combined with creative thinking. Every 
              campaign is unique, and I tailor my approach to meet your specific business 
              goals and target audience.
            </p>

            <div className="skills">
              <h3>Core Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">Google Ads</span>
                <span className="skill-tag">Facebook Ads</span>
                <span className="skill-tag">Campaign Management</span>
                <span className="skill-tag">Audience Targeting</span>
                <span className="skill-tag">Performance Optimization</span>
                <span className="skill-tag">Analytics & Reporting</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 