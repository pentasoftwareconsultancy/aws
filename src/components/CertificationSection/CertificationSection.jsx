import React from 'react';
import styles from './CertificationSection.module.css';

function CertificationSection() {
  return (
    <div className={styles.container}>
      <h3 className={styles.Title}>Get Certified by AWS Expert Trainers</h3>
      <p className={styles.description}>
        Yes! You will be certified by AWS Certified Expert Trainers, boosting your resume and credibility.
      </p>
      <div className={styles.certification}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDG0gm8cXdtpk660CruwXnT-VAyMmb5mAKjg&s"
          alt="AWS Certification"
          className={styles.image}
        />
      </div>
      <p className={styles.callToAction}>Earn Your Certification Today!</p>
    </div>
  );
}

export default CertificationSection;
