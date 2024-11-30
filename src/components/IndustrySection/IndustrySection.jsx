import React from 'react';
import styles from './IndustrySection.module.css';

const IndustrySection = () => {
  return (
    <>
      <h2 className={styles.Title}>What Industry Thinks About AWS</h2>
      <div className={styles.industrySection}>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3>AWS: The Cloud Infrastructure Giant</h3>
            <p>
              AWS is widely regarded as the leader in the cloud computing space. Its vast infrastructure and global presence make it the go-to solution for businesses of all sizes, from startups to enterprise giants.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Unmatched Scalability and Flexibility</h3>
            <p>
              AWS offers unparalleled scalability, allowing businesses to scale up or down based on demand. This flexibility is a key reason why AWS is trusted by industries ranging from finance to entertainment.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Security at Its Core</h3>
            <p>
              With its enterprise-grade security features, including encryption, compliance certifications, and automated patching, AWS provides a secure platform for businesses to host their critical data and applications.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Driving Innovation Across Industries</h3>
            <p>
              From AI and machine learning to IoT and big data, AWS provides cutting-edge tools that enable businesses to innovate and stay competitive in an increasingly digital world.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustrySection;
