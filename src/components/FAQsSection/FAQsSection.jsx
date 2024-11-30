import React from 'react';
import styles from './FAQsSection.module.css';

const FAQsSection = () => {
  return (
    <div className={styles.faqs}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <ul className={styles.faqList}>
        <li>
          <details>
            <summary><strong>Q:</strong> When is the workshop?</summary>
            <p><strong>A:</strong> November 24, 2024.</p>
          </details>
        </li>
        <li>
          <details>
            <summary><strong>Q:</strong> Is it live?</summary>
            <p><strong>A:</strong> Yes, it's a live session with real-time interaction.</p>
          </details>
        </li>
        <li>
          <details>
            <summary><strong>Q:</strong> Will I get certified?</summary>
            <p><strong>A:</strong> Yes, you will receive a certificate after successful completion.</p>
          </details>
        </li>
        <li>
          <details>
            <summary><strong>Q:</strong> How can I access the workshop?</summary>
            <p><strong>A:</strong> You'll receive a link to join the live session via email before the workshop.</p>
          </details>
        </li>
        <li>
          <details>
            <summary><strong>Q:</strong> Is there a fee for the workshop?</summary>
            <p><strong>A:</strong> No, the workshop is completely free of charge.</p>
          </details>
        </li>
        <li>
          <details>
            <summary><strong>Q:</strong> Do I need to prepare anything for the workshop?</summary>
            <p><strong>A:</strong> Make sure you have a stable internet connection and a computer or mobile device with Zoom or your preferred meeting app installed.</p>
          </details>
        </li>
        <li>
          <details>
            <summary><strong>Q:</strong> Will there be any hands-on activities?</summary>
            <p><strong>A:</strong> Yes, we will have interactive sessions and practical examples to reinforce the learning experience.</p>
          </details>
        </li>
        <li>
          <details>
            <summary><strong>Q:</strong> How can I ask questions during the session?</summary>
            <p><strong>A:</strong> You can ask questions in the chat or unmute yourself to speak directly to the trainer.</p>
          </details>
        </li>
        <li>
          <details>
            <summary><strong>Q:</strong> Will I receive the recording of the session?</summary>
            <p><strong>A:</strong> Yes, the recording will be shared with all attendees after the session is over.</p>
          </details>
        </li>
      </ul>
    </div>
  );
};

export default FAQsSection;
