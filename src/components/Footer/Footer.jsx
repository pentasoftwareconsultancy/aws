import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.branding}>
          <img
            src="https://aws.amazon.com/favicon.ico" // Replace with your logo
            alt="NexusCTC Logo"
            className={styles.logo}
          />
          <p>&copy; 2024 NexusCTC. All rights reserved.</p>
        </div>
        <div className={styles.links}>
          <a href="/privacy" className={styles.link}>Privacy Policy</a>
          <a href="/terms" className={styles.link}>Terms & Conditions</a>
          <a href="/contact" className={styles.link}>Contact Us</a>
        </div>
        <div className={styles.socialMedia}>
          <a href="https://facebook.com" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
