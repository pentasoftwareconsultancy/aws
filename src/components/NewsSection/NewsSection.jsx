import React from 'react';
import styles from './NewsSection.module.css';

function NewsSection() {
  const news = [
    {
      title: "AWS Cloud Careers Are Soaring!",
      description: "AWS job openings have grown by over 30% in the past year as more companies adopt cloud solutions. Stay ahead with the right AWS certifications and skills."
    },
    {
      title: "Demand for AWS Engineers is Rising",
      description: "The demand for AWS-certified engineers is skyrocketing, with companies seeking professionals to help migrate, manage, and scale their cloud infrastructure."
    },
    {
      title: "AWS Jobs Offering Attractive Salaries",
      description: "AWS-related roles are among the highest-paying jobs in the tech industry. Salaries for AWS professionals have increased by an average of 20% over the last year."
    }
  ];

  return (
    <>
      <h1 className={styles.Title}>Rise in AWS-related Jobs 🚀</h1>
      <div className={styles.Container}>
        {news.map((item, index) => (
          <div key={index} className={styles.Card}>
            <h2 className={styles.CardTitle}>{item.title}</h2>
            <p className={styles.CardContent}>{item.description}</p>
          </div>
        ))}
      </div>
      <h4 className={styles.Quote}>"The job market is increasingly shifting towards AWS-enabled professionals—equip yourself with AWS skills today to stay ahead."</h4>
    </>
  );
}

export default NewsSection;
