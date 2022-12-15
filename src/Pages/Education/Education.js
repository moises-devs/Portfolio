import React from 'react'
import styles from "./Education.module.css"
import EducationGreeting from "../../Components/EducationGreeting/EducationGreeting";
import EducationExperience from "../../Components/EducationExperience/EducationExperience";
function Education() {
  return (
    <section className={styles.wrapper}>
      <EducationGreeting/>
      <EducationExperience/>
    </section>
  )
}

export default Education