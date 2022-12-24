import React from 'react'
import { data } from './ProjectData'
import ProjectItem from './ProjectItem/ProjectItem'
import styles from "./ProjectList.module.css"
function ProjectList() {
  return (
    <ul className={styles.wrapper}>
    {data.map(project => (
      <ProjectItem { ...project} key={project.id}/>
    ))}
    </ul>
  )
}

export default ProjectList