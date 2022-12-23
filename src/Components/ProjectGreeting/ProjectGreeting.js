import React from 'react'
import styles from "./ProjectGreeting.module.css"
import manworking from "../../Assets/manworking.png";
function ProjectGreeting() {
  return (
    <section className={styles.wrapper}>
        <div className={styles.imgwrapper}>
            <img src={manworking} alt="Man working on desk"/>
        </div>
        <div className={styles.content}>
            <h1 className={styles.heading1}>Projects</h1>
            <p className={styles.bio}>My projects make use of the latest technologies and best practices. I am most comfortable when working with Javascript and love learning new tech stacks.
            </p>
        </div>
    </section>
  )
}

export default ProjectGreeting