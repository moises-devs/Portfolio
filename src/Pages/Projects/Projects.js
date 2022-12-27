import React from 'react'
import styles from "./Projects.module.css"
import ProjectGreeting from '../../Components/ProjectGreeting/ProjectGreeting'
import ProjectList from '../../Components/ProjectList/ProjectList'
import { motion } from 'framer-motion' 
function Projects() {
  return (
    <motion.section className={styles.wrapper}
    initial={{y:'100%', opacity:0}}
    transition={{duration:0.45, ease:'easeIn'}}
    animate={{y:0, opacity:1}}>
      <ProjectGreeting/>
      <ProjectList/>
    </motion.section>
  )
}

export default Projects