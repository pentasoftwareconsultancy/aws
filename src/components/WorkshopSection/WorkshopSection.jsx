import React from 'react';
import styles from './WorkShopSection.module.css';

const WorkShopSection = () => {
  return (
    <div className={styles.workshopSection}>
      <h2 className={styles.Title}>Available AWS Workshops</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h3>Introduction to AWS Cloud Computing</h3>
          <p>
            This workshop covers the basics of AWS Cloud Computing, including core services like EC2, S3, and IAM, perfect for beginners looking to get started with cloud technologies.
          </p>
        </div>
        <div className={styles.card}>
          <h3>AWS Architecture and Design Best Practices</h3>
          <p>
            Dive deep into designing scalable and resilient architectures with AWS. Learn best practices, security considerations, and how to architect for high availability and fault tolerance.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Serverless Applications with AWS Lambda</h3>
          <p>
            This workshop explores serverless computing with AWS Lambda, where you'll learn how to build, deploy, and scale serverless applications using AWS services like Lambda, API Gateway, and DynamoDB.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Advanced AWS Security and Compliance</h3>
          <p>
            Understand how to secure your AWS environments with tools like AWS Shield, AWS WAF, and IAM policies. This workshop is ideal for security professionals looking to implement best practices for cloud security.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Machine Learning on AWS</h3>
          <p>
            Learn to build and deploy machine learning models using AWS services like SageMaker, Comprehend, and Rekognition. Explore how AI is transforming industries with AWS's machine learning tools.
          </p>
        </div>
        <div className={styles.card}>
          <h3>AWS Cost Management and Optimization</h3>
          <p>
            Discover the best practices for managing and optimizing your AWS costs. Learn how to use AWS Cost Explorer, Trusted Advisor, and budgeting tools to effectively monitor and reduce costs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkShopSection;
