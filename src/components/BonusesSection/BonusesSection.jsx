import React from 'react';
import styles from './BonusesSection.module.css';

const BonusesSection = () => {
  const bonuses = [
    {
      title: 'Bonus 1',
      heading: '50+ Productivity Hacks',
      description:
        '₹5000 Value - Master time-saving strategies to supercharge your efficiency and productivity in both personal and professional settings.',
    },
    {
      title: 'Bonus 2',
      heading: '800+ Premium PPT Templates',
      description:
        '₹3000 Value - Access a collection of high-quality, ready-to-use PowerPoint templates for your presentations.',
    },
    {
      title: 'Bonus 3',
      heading: 'Ebook on Time Management',
      description:
        '₹2500 Value - Learn expert techniques for managing your time more effectively and balancing your daily tasks.',
    },
  ];

  return (
    <div className={styles.bonusesSection}>
      <h2 className={styles.Title}>Exclusive Bonuses for Students</h2>
      <div className={styles.cardsContainer}>
        {bonuses.map((bonus, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardTitle}>{bonus.title}</div>
            <h3 className={styles.heading}>{bonus.heading}</h3>
            <p className={styles.description}>{bonus.description}</p>
          </div>
        ))}
      </div>
      <p className={styles.freeOffer}>Don't miss out! Time is running out!</p>
      <div className={styles.pricing}>
        <p className={styles.priceText}>
          Unlock all bonuses for just{' '}
          <span className={styles.price}>(₹9)</span>
        </p>
        <h4>
          REGISTER BEFORE MIDNIGHT OF November 22, 2024 <br />
          to Unlock All Bonuses Worth ₹10,500
        </h4>

        <button className={styles.buyNow}>Buy Now</button>
        
      </div>
    </div>
  );
};

export default BonusesSection;
