import React from "react";
import styles from "./EducationGreeting.module.css";
import { FaGraduationCap } from "react-icons/fa";
function EducationGreeting() {
  return (
    <section className={styles.greetingwrapper}>
      <FaGraduationCap className={styles.icon} />
      <div className={styles.content}>
        <div className={styles.wrappercontent}>
          <h1 className={styles.heading1}> Education </h1>
          <h2 className={styles.heading2}>
            
            Basic Qualification and Certificates
          </h2>
          <p>
            
            My passion for learning has pushed me both inside and outside the
            classroom. Below are some of my major certifications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default EducationGreeting;
