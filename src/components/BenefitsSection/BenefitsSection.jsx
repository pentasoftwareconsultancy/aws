import React from 'react';
import styles from './BenefitsSection.module.css';

function BenefitsSection() {
    const benefits = [
        { title: "Master AWS Services in Minutes", description: "Learn to use the powerful AWS tools and services to deploy cloud applications without any hassle." },
        { title: "Complete Projects on AWS in No Time", description: "Gain the skills to deploy scalable applications in AWS quickly and efficiently." },
        { title: "Automate AWS Resources Seamlessly", description: "Leverage AWS automation tools like CloudFormation to manage infrastructure effortlessly." },
        { title: "Build Highly Available Architectures", description: "Learn to design and implement AWS architectures that are both highly available and fault-tolerant." },
        { title: "Boost Your Career with AWS Certifications", description: "Earn AWS certifications and enhance your resume to accelerate your career in cloud computing." },
        { title: "Optimize Costs with AWS Cloud", description: "Understand how to optimize your AWS resources and reduce costs with smart planning and the use of AWS services." }
    ];

    return (
        <>
            <h1 className={styles.Title}>Benefits of this AWS Course ☁️</h1>
            <div className={styles.Container}>
                {benefits.map((benefit, index) => (
                    <div key={index} className={styles.Card}>
                        <h2 className={styles.CardTitle}>{benefit.title}</h2>
                        <p className={styles.CardContent}>{benefit.description}</p>
                    </div>
                ))}
            </div>
            <h2 className={styles.Info}>⚠️Specially Designed for Working Professionals ⚠️</h2>
            <div className={styles.pricing}>
                <p className={styles.priceText}>
                    Join the live AWS workshop for only !<span className={styles.price}>&nbsp;(Only at ₹9)</span>
                </p>
            </div>
        </>
    );
}

export default BenefitsSection;
