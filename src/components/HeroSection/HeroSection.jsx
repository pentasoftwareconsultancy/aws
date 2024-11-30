import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Learn AWS with NexusCTC</h1>
      <p className={styles.description}>
        Master AWS tools and skills with guidance from experts and experienced
        trainers boasting over 25 years of industry knowledge. Gain practical
        insights and hands-on expertise to excel in your cloud career. Get
        certified as a professional and unlock future opportunities. Build
        skills that will make you stand out in the rapidly evolving tech
        landscape!
      </p>
      <button className={styles.registerButton}>Register Now</button>
      <div className={styles.contentWrapper}>
        <div className={styles.videoSection}>
          <video className={styles.video} controls>
            <source
              src="https://10xvideo.b-cdn.net/Be10X.in/Videos/1-1%20updated.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={styles.leftContent}>
          <div className={styles.timing}>
            <ul>
              <li>📅 November 24, 2024</li>
              <li>⏳ 3+ Hours</li>
              <li>🎥 Live Session</li>
              <li>🕚 11:00 am Onwards</li>
            </ul>
          </div>

          <div className={styles.highlights}>
            <h2 className={styles.highlightsTitle}>Key Highlights:</h2>
            <ul>
              <li>Become a Highly Skilled AWS Cloud Professional (Avg. Salary: ₹15 LPA)</li>
              <li>No Prior Cloud Computing Knowledge Required</li>
              <li>Launch and Manage Scalable Applications</li>
              <li>Learn Core AWS Services (EC2, S3, RDS, Lambda, etc.)</li>
              <li>Optimize Costs and Ensure Security in the Cloud</li>
              <li>Access Hands-On Labs and Real-World Projects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
