import React from 'react'
import styles from "./Education.module.css"
import EducationGreeting from "../../Components/EducationGreeting/EducationGreeting";
import EducationExperience from "../../Components/EducationExperience/EducationExperience";
import { motion } from 'framer-motion';
function Education() {
  return (
    <motion.section className={styles.wrapper}
    initial={{x:'-100%', opacity:0,}}
    transition={{duration:0.45, ease:'easeIn'}}
    animate={{x:0, opacity:1}}>
      <EducationGreeting/>
      <EducationExperience/>
    </motion.section>
  )
}

export default Education