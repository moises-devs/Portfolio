import React from "react";
import styles from "./EducationGreeting.module.css";
import books from "../../Assets/desk.png";
function EducationGreeting() {
  return (
    <section className={styles.greetingwrapper}>
      <div className={styles.imgwrapper}>
        <img src={books} alt="books layer on top of eachother"/>
      </div>
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
