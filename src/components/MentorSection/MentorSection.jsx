import styles from "./MentorSection.module.css";

function MentorSection() {
  const mentors = [
    {
      name: "Sanjay Wadatkar",
      role: "AWS Certified Solutions Architect",
      description:
        "John has over 10 years of experience in cloud computing and specializes in building scalable, secure, and cost-effective AWS solutions.",
      image:
        "https://d1.awsstatic.com/1.d5498f4dc61ee37184d2998d426cee9bceab3326.PNG",
    },
    {
      name: "Rajiv Khade",
      role: "AWS DevOps Engineer",
      description:
        "Sarah is a seasoned DevOps expert with a knack for automating infrastructure and ensuring high availability for mission-critical applications.",
      image: "https://www.nexusctc.com/assets/Rajeev%20Khade-BwwdYO-k.webp",
    },
    {
      name: "Lekhraj Patil",
      role: "AWS Machine Learning Specialist",
      description:
        "Michael brings 8+ years of experience in AI and machine learning, helping organizations leverage AWS to build intelligent systems.",
      image: "https://www.nexusctc.com/assets/Sumit%20Sir-9G-VamcF.jpeg",
    },
  ];

  return (
    <div className={styles.MentorSection}>
      <h2 className={styles.Title}>Meet Our Expert Mentors</h2>
      <div className={styles.mentorsContainer}>
        {mentors.map((mentor, index) => (
          <div key={index} className={styles.mentorCard}>
            <div className={styles.info}>
              <h3 className={styles.name}>{mentor.name}</h3>
              <h4 className={styles.role}>{mentor.role}</h4>
              <p className={styles.description}>{mentor.description}</p>
            </div>
            <div className={styles.imageContainer}>
              <img
                src={mentor.image}
                alt={`${mentor.name}'s photo`}
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MentorSection;
