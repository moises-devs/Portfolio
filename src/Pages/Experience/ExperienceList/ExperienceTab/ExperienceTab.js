import React from 'react'
import styles from "./ExperienceTab.module.css"
function ExperienceTab(props) {
    console.log(props);
  return (
    <div className={styles.wrapper}>
        {/* checking if we have full company data if not then just print description */}
        {props.companyName && <div className={styles.biowrapper}>
            <div className={styles.imgwrapper}>
                <img src={props.companyImg} alt={props.comanyName}/>
            </div>
            <h2 className={styles.title}> {props.role}</h2>
            <p className={styles.date}> {props.date} </p>
            <p className={styles.companyName}> {props.companyName}</p>
            <p className={styles.type}> {props.worktype}</p>
        </div>}
        <div className={styles.description}>
            {props.description}
        </div>
    </div>
  )
}

export default ExperienceTab