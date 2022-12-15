import React from 'react'
import styles from "./EducationExperience.module.css";
import davis from "../../Assets/davis.png";
import EducationCard from '../EducationCard/EducationCard';
function EducationExperience() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Degree Recieved</h1>
      <div className={styles.content}>
      <EducationCard img={davis} title="University of California Davis"
        subtitle={'Bachelor of Science - Computer Science'} 
        date={'09/2018 - 07/2022'}
      >
        <li className={styles.listitem}>
          Throughout my time at Davis I was exposed to building web applications, mobile applications and small programming assignments.
        </li>
        <li className={styles.listitem}>
          From working with data structures and algorithms to experimenting with UX principles, I actively particpated in the broad 
          specturm of computer science theory.
        </li>
        <li className={styles.listitem}>
          Above all my favorite topics include the disucssion of user interfaces and using technology to assist users.
        </li>
      </EducationCard>
      </div>
    </section>
  )
}

export default EducationExperience