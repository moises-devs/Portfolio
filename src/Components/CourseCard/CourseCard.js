import React from "react";
import styles from "./CourseCard.module.css";
function CourseCard(props) {
  return <a className={styles.card} href={props.link} >
    <div className={styles.imgwrapper}>
      <img src={props.img} alt={props.title}/>
    </div>
    <div className={styles.cardcontent}>
      <h3 className={styles.cardtitle}>
        {props.title}
      </h3>
      <p className={styles.carddetails}>
        {props.courseAuthor}
      </p> 
    </div>
  </a>;
}

export default CourseCard;
