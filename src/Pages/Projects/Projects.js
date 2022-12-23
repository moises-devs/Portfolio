import React from 'react'
import styles from "./Projects.module.css"
import ProjectGreeting from '../../Components/ProjectGreeting/ProjectGreeting'
import ProjectList from '../../Components/ProjectList/ProjectList'
function Projects() {
  return (
    <section className={styles.wrapper}>
      <ProjectGreeting/>
      <ProjectList/>
    </section>
  )
}

export default Projects