import React from 'react';
import styles from './PricingSection.module.css';

const PricingSection = () => {
  return (
    <>
      <div className={styles.pricing}>
        <h2>Workshop Pricing</h2>
        <p className={styles.priceText}>
          Join the live AWS workshop for only <span className={styles.price}>₹9</span>!
        </p>
        <button className={styles.buyNow}>Buy Now</button>
      </div>

      <div className={styles.other}>
        <p>#1 🇮🇳 We're the highest-rated program in the world 🌎</p>
        <p>Accelerate your career at the price of less than a chai ☕!</p>
      </div>
    </>
  );
};

export default PricingSection;
