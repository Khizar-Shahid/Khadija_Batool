import React from 'react';
import { motion } from 'framer-motion';
import { FaGoogle, FaFacebook, FaChartBar, FaBullseye, FaChartLine, FaUsers } from 'react-icons/fa';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaGoogle />,
      title: 'Google Ads Management',
      description: 'Comprehensive Google Ads campaigns including Search, Display, Shopping, and Video ads with continuous optimization.',
      features: ['Keyword Research', 'Ad Copy Creation', 'Bid Management', 'Performance Tracking']
    },
    {
      icon: <FaFacebook />,
      title: 'Facebook Ads Management',
      description: 'Strategic Facebook and Instagram advertising campaigns designed to reach your target audience effectively.',
      features: ['Audience Targeting', 'Creative Design', 'Campaign Optimization', 'ROI Tracking']
    },
    {
      icon: <FaChartBar />,
      title: 'Campaign Strategy',
      description: 'Data-driven campaign strategies tailored to your business goals and target market.',
      features: ['Market Analysis', 'Competitor Research', 'Budget Planning', 'Goal Setting']
    },
    {
      icon: <FaBullseye />,
      title: 'Audience Targeting',
      description: 'Precise audience targeting using advanced demographic and behavioral data.',
      features: ['Demographic Analysis', 'Interest Targeting', 'Lookalike Audiences', 'Custom Audiences']
    },
    {
      icon: <FaChartLine />,
      title: 'Analytics & Reporting',
      description: 'Comprehensive reporting and analytics to track campaign performance and ROI.',
      features: ['Performance Metrics', 'Conversion Tracking', 'Monthly Reports', 'ROI Analysis']
    },
    {
      icon: <FaUsers />,
      title: 'Consultation & Training',
      description: 'One-on-one consultation and training sessions to help you understand digital advertising.',
      features: ['Strategy Sessions', 'Platform Training', 'Best Practices', 'Ongoing Support']
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">
            Comprehensive digital advertising solutions to grow your business
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Ready to grow your business?</h3>
          <p>Let's discuss how I can help you achieve your digital marketing goals.</p>
          <motion.button
            className="btn btn-primary"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 