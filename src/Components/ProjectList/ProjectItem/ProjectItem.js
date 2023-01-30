import React from 'react'
import styles from "./ProjectItem.module.css"
import { AiOutlineLink } from "react-icons/ai";
import SkillList from '../../Skills/SkillList/SkillList';
function ProjectItem(props) {
    console.log(props);
  return (
    <div className={styles.cardwrapper}>
        <div className={styles.imgwrapper}>
            <img src={props.img} alt={props.name}/>
        </div>
        <div className={styles.contentwrapper}>
            <h2 className={styles.cardtitle}>{props.name}</h2>
            <div className={styles.linkwrapper}>
                <p className={styles.linktext}>
                    Demo here <a href={props.link}> <AiOutlineLink className={styles.iconlink}/> </a>
                </p>
                <p className={styles.linktext}>
                    Code here<a href={props.code}> <AiOutlineLink className={styles.iconlink}/> </a>
                </p>
            </div>
            <p className={styles.carddetails}>
                {props.description}
            </p>
            <SkillList skills={props.skills}/>
        </div>
    </div>
  )
}

export default ProjectItem