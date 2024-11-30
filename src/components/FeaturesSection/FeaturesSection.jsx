import styles from './FeaturesSection.module.css';

const FeaturesSection = () => {
  return (
    <div className={styles.features}>
      <div className={styles.imageContainer}>
        <img 
          src="https://techvify-software.com/wp-content/uploads/2023/10/generative-ai-on-aws.jpg" 
          alt="AWS Workshop" 
          className={styles.image} 
        />
      </div>
      <div className={styles.textContainer}>
        <h2>Why Choose This AWS Workshop for Cloud Professionals?</h2>
        <ul>
          <li>Expert-led training with 25+ years of combined cloud experience.</li>
          <li>Get NexusCTC certification to enhance your professional credibility.</li>
          <li>Master AWS tools and automate daily tasks, saving 2 hours every day.</li>
          <li>Learn in-demand AWS skills like EC2, S3, RDS, and Lambda.</li>
          <li>Gain insights to future-proof your career in cloud computing.</li>
          <li>Boost your earning potential and open doors to high-paying roles.</li>
          <li>Understand real-world applications of AWS through hands-on projects.</li>
        </ul>
      </div>
    </div>
  );
};

export default FeaturesSection;
