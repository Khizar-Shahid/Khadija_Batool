import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import './Portfolio.css';

// Import images
import image1 from '../assets/images/02a60c20-eb66-45fc-909c-9e1d311c7099.png';
import image2 from '../assets/images/df91024a-35e8-4924-bce3-e8365338cc18.png';
import image3 from '../assets/images/8d5f12be-13fe-468b-8e16-ada459c6a6d0.png';
import image4 from '../assets/images/bfc65937-4dac-4797-b1f8-30fb2ddbafc2.png';
import image5 from '../assets/images/306f062c-085c-437c-9cc3-cb419615833f.png';
import image6 from '../assets/images/8ecba8b5-9d07-458c-af3e-8cfc21b64439.png';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string | null>(null);

  const portfolioItems = [
    {
      id: 1,
      category: 'google-ads',
      title: 'E-commerce Google Ads Campaign',
      description: 'Increased online sales by 300% for a fashion retailer through targeted Google Shopping campaigns.',
      image: image1,
      results: ['300% increase in sales', '45% lower CPA', '2.5x ROAS improvement']
    },
    {
      id: 2,
      category: 'facebook-ads',
      title: 'Facebook Lead Generation',
      description: 'Generated 500+ qualified leads for a B2B software company using Facebook Lead Ads.',
      image: image2,
      results: ['500+ qualified leads', '60% lower cost per lead', '3x conversion rate']
    },
    {
      id: 3,
      category: 'google-ads',
      title: 'Local Business Google Ads',
      description: 'Helped a local restaurant increase foot traffic and online orders through local search campaigns.',
      image: image3,
      results: ['200% increase in foot traffic', '150% more online orders', '85% local search visibility']
    },
    {
      id: 4,
      category: 'facebook-ads',
      title: 'Brand Awareness Campaign',
      description: 'Launched a successful brand awareness campaign for a startup using Facebook and Instagram ads.',
      image: image4,
      results: ['2M+ impressions', '50% increase in brand recognition', '3x engagement rate']
    },
    {
      id: 5,
      category: 'strategy',
      title: 'Multi-Channel Strategy',
      description: 'Developed and executed a comprehensive multi-channel advertising strategy for a tech company.',
      image: image5,
      results: ['400% revenue growth', 'Unified brand messaging', 'Optimized budget allocation']
    },
    {
      id: 6,
      category: 'strategy',
      title: 'Retargeting Campaign',
      description: 'Implemented successful retargeting campaigns to convert website visitors into customers.',
      image: image6,
      results: ['25% conversion rate', '70% lower acquisition cost', '4x ROI improvement']
    }
  ];

  const filters = [
    { key: 'all', label: 'All Work' },
    { key: 'google-ads', label: 'Google Ads' },
    { key: 'facebook-ads', label: 'Facebook Ads' },
    { key: 'strategy', label: 'Strategy' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Portfolio</h2>
          <p className="section-subtitle">
            Showcasing successful campaigns and results-driven strategies
          </p>
        </motion.div>

        <motion.div
          className="portfolio-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <div className="portfolio-grid">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="portfolio-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} onClick={() => setModalImage(item.image)} style={{ cursor: 'pointer' }} />
                <div className="portfolio-overlay">
                  <div className="portfolio-actions">
                    <button className="action-btn" onClick={() => setModalImage(item.image)}>
                      <FaEye />
                    </button>
                    <button className="action-btn">
                      <FaExternalLinkAlt />
                    </button>
                  </div>
                </div>
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-title">{item.title}</h3>
                <p className="portfolio-description">{item.description}</p>
                <div className="portfolio-results">
                  <h4>Key Results:</h4>
                  <ul>
                    {item.results.map((result, resultIndex) => (
                      <li key={resultIndex}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Modal for image preview */}
        {modalImage && (
          <div className="portfolio-modal" onClick={() => setModalImage(null)}>
            <div className="portfolio-modal-content" onClick={e => e.stopPropagation()}>
              <button className="portfolio-modal-close" onClick={() => setModalImage(null)}>&times;</button>
              <img src={modalImage} alt="Portfolio Preview" />
            </div>
          </div>
        )}

        <motion.div
          className="portfolio-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Interested in working together?</h3>
          <p>Let's discuss how I can help you achieve similar results for your business.</p>
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
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 